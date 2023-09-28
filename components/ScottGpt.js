import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "scottdavisxx",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default function ScottGpt() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    try {
      const prompt = input; // You might want to customize this based on your use case
      const { choices } = await openai.createCompletion({
        engine: "text-davinci-003", // Specify the engine you want to use
        prompt,
        max_tokens: 150,
      });

      const generatedText = choices[0]?.text || "";
      setOutput(generatedText);
    } catch (error) {
      console.error("Error calling ChatGPT API:", error);
    }
  };

  return (
    <div className="relative h-[400px] top-12 flex justify-center items-center bg-prim">
      <div className="flex flex-col items-center gap-y-8">
        <label htmlFor="gpt" className="text-6xl text-comp">
          Ask about Scott
        </label>
        <input
          id="gpt"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          className="w-fit mb-5 bg-comp-light text-2xl rounded-lg px-3 py-1"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <div>
          <strong>Generated Output:</strong>
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
}
