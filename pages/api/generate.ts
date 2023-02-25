import { OpenAIStream, OpenAIStreamPayload } from "../../utils/OpenAIStream";

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  const { prompt } = (await req.json()) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response(
      "💬 Type a description to get the git command you need.",
    );
  }

  if (prompt.length >= 100) {
    return new Response(
      "🚨 The description is too large for the OpenAI API. Try reducing the number of characters.",
    );
  }

  const payload: OpenAIStreamPayload = {
    model: "text-davinci-003",
    prompt: `I want you to act as a Senior Frontend developer. Give me the git command that would do the following: ${prompt}`,
    temperature: 0.5,
    max_tokens: 80,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);
};

export default handler;
