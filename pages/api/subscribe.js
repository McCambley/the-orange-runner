const mailchimp = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default async function subscribeHandler(req, res) {
  const { email } = req.body;
  const response = await client.ping.get();
  //   const response = await client.lists.addListMember("d97698f190", {
  //     email_address: email,
  //     status: "pending",
  //   });
  console.log({ response });
  res.status(200).json({ email, response });
}
