// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// This API is no longer used. It's being kept in case it's brought back later.
// To use, uncomment the SelectInput located in Navigation.js
import { client } from "../../utils/client";

export default async function searchHandler(req, res) {
  const { keyword } = req.query;

  const data = await client.getEntries({
    content_type: "comic",
    // "fields.keywords": keyword,
    query: keyword,
    // "fields.title": keyword,
    order: "-fields.originalPublishDate",
    limit: 1000,
    // match: keyword,
  });

  if (data.total < 1) {
    return res.status(404).send({ message: "No results found" });
  }

  return res.status(200).json({ data });
}
