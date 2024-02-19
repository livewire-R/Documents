const express = require('express');
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Securely use your API key from environment variables
});
const openai = new OpenAIApi(configuration);

app.post('/api/chatbot', async (req, res) => {
  try {
    const prompt = req.body.message;
    const response = await openai.createCompletion({
      model: "text-davinci-003", // You can use "text-davinci-002" or other models as needed
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    res.json({ response: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).send("Error communicating with OpenAI");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
