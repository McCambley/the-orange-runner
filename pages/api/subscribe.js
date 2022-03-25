const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default function subscribeHandler(req, res) {
  const { email } = req.body;
  console.log("HERE!!!, ", req.method, email);
  // check status of client
  // const response = await client.ping.get();
  return client.lists
    .addListMember("d97698f190", {
      email_address: email,
      status: "pending",
    })
    .then((response) => {
      if (response.status !== "pending") {
        return Promise.reject(`${response.status} error!`);
      }
      console.log({ response });
      return res.status(200).json({ message: "Successfully subscribed!", response });
    })
    .catch((error) => {
      res.status(404).json({ message: "You're already subscribed!", error });
    });
}
