// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { client } from "../../utils/client";

export default function searchHandler(req, res) {
  const { keyword } = req.query;
  res.status(200).json({ keyword });
}
