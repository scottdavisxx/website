import OpenAI from "openai";
import { useState } from "react";

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
  organization: "org-vwkn0WTV6ysfdlgUPvEhn2i1",
  apiKey: "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",
});

export default function ScottGPT() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    try {
      const prompt = input;
      const { choices } = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt },
        ],
        max_tokens: 150,
      });

      const generatedText =
        choices[0]?.message?.content || "No response from the assistant.";
      setOutput(generatedText);
    } catch (error) {
      console.error("Error calling ChatGPT API:", error);
      setOutput("Error calling ChatGPT API.");
    }
  };

  return (
    <div className="h-[500px] relative top-12 bg-prim flex flex-col justify-center items-center gap-y-6">
      <label htmlFor="gpt" className="text-white text-8xl">
        Ask about Scott
      </label>
      <input
        id="gpt"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-fit mb-5 bg-comp-light text-2xl rounded-lg px-3 py-1"
      >
        Submit
      </button>
      <div>
        <p className="text-white text-lg italic">{output}</p>
      </div>
    </div>
  );
}
