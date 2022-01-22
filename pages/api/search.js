// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "../../utils/client";

export default async function searchHandler(req, res) {
  const { keyword } = req.query;

  const data = await client.getEntries({
    content_type: "comic",
    // "fields.keywords": keyword,
    query: keyword,
    // "fields.title": keyword,
    order: "-fields.originalPublishDate",
    // match: keyword,
  });

  if (data.total < 1) {
    return res.status(404).send({ message: "No results found" });
  }

  return res.status(200).json({ data });
}
