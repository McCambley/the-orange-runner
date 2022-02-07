// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "../../utils/client";

export default async function comicsHandler(req, res) {
  const { skip } = req.query;
  const BLOB_LENGTH = 15;

  const data = await client.getEntries({
    content_type: "comic",
    skip: skip,
    include: BLOB_LENGTH,
    order: "-fields.originalPublishDate",
  });

  if (data == null) {
    res.send(404).send({ message: "Error with contentful" });
  }

  if (data.items < 1) {
    res.send(404).send({ message: "No comics found" });
  }

  const done = data.length < BLOB_LENGTH;

  return res.status(200).json({ data, done });
}
