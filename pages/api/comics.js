// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "../../utils/client";

export default async function comicsHandler(req, res) {
  const { skip, limit } = req.query;

  const data = await client.getEntries({
    content_type: "comic",
    skip: skip,
    limit: limit,
    order: "-fields.originalPublishDate",
  });

  if (data == null) {
    res.status(404).send({ message: "Error with contentful" });
  }

  if (data.items < 1) {
    res.status(404).send({ message: "No comics found" });
  }

  const done = data.items.length < limit;

  return res.status(200).json({ data, done });
}
