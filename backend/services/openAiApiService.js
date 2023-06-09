const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



class OpenAiApiService {

  async chat() {
    try {

      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello world" }],
      });



      const message = response.data.choices[0].message;

      return message;

    } catch (error) {
      console.error("Error:", error.message);
      throw error
    }
  }
}

module.exports = OpenAiApiService;