// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "../../utils/client";

export default async function collectionsHandler(req, res) {
  const response = await client.getEntries({
    content_type: "collection",
    include: 1,
  });

  if (!response) {
    res.send(404).send({ message: "Error with contentful" });
  }

  if (response.items < 1) {
    res.send(404).send({ message: "No collections found" });
  }

  const data = response.items.map((collection) => {
    return { title: collection.fields.title, slug: collection.fields.slug };
  });

  return res.status(200).json({ data });
}
