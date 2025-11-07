import { GoogleGenAI, Modality } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateProductImage = async (): Promise<string> => {
  const prompt = `
    Professional studio product photography of a luxurious, elegant glass bottle of 'NOOR AL MADINAH' hair oil.
    The bottle is a beautiful amber-colored glass with a shiny gold spray nozzle.
    The label is clean, minimalist, and elegant in a cream color with the text 'NOOR AL MADINAH' in a sophisticated dark green serif font.
    The bottle is placed on a piece of natural slate.
    The background is a soft, out-of-focus arrangement of lush green leaves and natural ingredients like argan nuts and jasmine flowers, creating a serene and organic atmosphere.
    The lighting is soft and warm, highlighting the rich golden color of the oil inside the bottle.
    The overall image quality should be 4k, hyper-realistic, and exude a sense of premium, natural quality.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64ImageBytes: string = part.inlineData.data;
        return `data:${part.inlineData.mimeType};base64,${base64ImageBytes}`;
      }
    }
    throw new Error("No image data found in the API response.");
  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    throw new Error("Failed to generate image.");
  }
};