// backend/routes/chatbotRoutes.js
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Define contextual instructions for the AI
    const systemPrompt = `
      You are an AI Career Counselor providing guidance on career paths, skills, and job market trends. 
      Your purpose is to offer personalized career advice, assess skills, and ensure inclusivity in recommendations.
      Stay focused on career-related discussions and avoid answering unrelated questions.
    `;

    const response = await model.generateContent([systemPrompt, message]); // Ensure context

    // Extract response text
    const reply = response?.response?.candidates?.[0]?.content?.parts?.[0]?.text 
      || "I'm here to assist with career guidance. Could you clarify your question?";

    res.status(200).json({ reply });
  } catch (err) {
    console.error("Chatbot API Error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
