import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are 'Aria', an expert interior design consultant for Foam & Decor. 
We sell premium minimalist couches and artisanal cushions.
Your goal is to assist customers in choosing products that match their room's aesthetic.
Be concise, warm, and sophisticated. Use a tone that matches a high-end furniture boutique.

We are located at Witkoppen Road, Sandton, Gauteng, South Africa.
Note: All prices are in South African Rand (ZAR).

Here is our product catalog:
${JSON.stringify(PRODUCTS.map(p => ({ name: p.name, category: p.category, colors: p.colors, price: p.price, vibe: p.description })))}

If a user describes their room (e.g., "small apartment, lots of plants" or "modern industrial"), recommend specific products from our catalog.
Explain WHY you chose them (e.g., "The Olive Haven Sectional would complement your plants perfectly.").
Do not recommend products we don't have.
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]) => {
  try {
    if (!apiKey) {
      return "I'm currently undergoing maintenance (API Key missing). Please browse our collection manually!";
    }

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my design database right now. Please try again in a moment.";
  }
};