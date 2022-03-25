const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default async function subscribeHandler(req, res) {
  const { email } = req.body;
  // check status of client
  // const response = await client.ping.get();
  const response = await client.lists.addListMember("d97698f190", {
    email_address: email,
    status: "pending",
  });
  res.status(200).json(response);
}
