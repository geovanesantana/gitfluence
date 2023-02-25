import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

interface Response {
  type: string;
  content: string;
}

const responseType = {
  answer: "answer",
  question: "question",
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState<Response[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setInputFocus();
  }, []);

  const setInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const generateCommand = async () => {
    setLoading(true);
    setResponses((prev) => {
      return [
        ...prev,
        {
          type: responseType.question,
          content: input,
        },
      ];
    });
    setInput("");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
      }),
    });

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let resultData = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      resultData += chunkValue;
    }

    setResponses((prev) => {
      return [
        ...prev,
        {
          type: responseType.answer,
          content: resultData,
        },
      ];
    });

    setLoading(false);
    setTimeout(() => {
      setInputFocus();
    }, 250);
  };

  return (
    <div className="relative z-10 mx-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] xl:mx-0">
      <div
        className={classNames(
          "relative z-10 m-auto w-full max-w-[993px] overflow-hidden rounded-lg border border-light/5 font-mono leading-normal subpixel-antialiased shadow-3xl xl:px-0",
        )}
      >
        <div className="relative flex h-6 w-full items-center justify-center space-x-2 border-b border-slate bg-slate p-4">
          <div className="group absolute left-3 flex flex-1 space-x-2 justify-self-start">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="ml-2 h-3 w-3 rounded-full bg-orange-300"></div>
            <div className="ml-2 h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="flex h-96 flex-col space-y-2 overflow-y-auto bg-zinc p-3 pb-16 font-mono text-base text-light">
          {responses.map((item, index) => {
            return (
              <div className="space-y-2" key={index}>
                {item.type === responseType.question && (
                  <div>
                    <span className="text-gray">{"> "}</span>
                    {item.content}
                  </div>
                )}

                {loading && index === responses.length - 1 ? (
                  <span className="inline-block w-2 overflow-hidden align-middle font-mono">
                    <span className="flex w-16 animate-tiles flex-nowrap font-mono text-gray">
                      <span className="w-4">\</span>
                      <span className="w-4">|</span>
                      <span className="w-4">/</span>
                      <span className="w-4">-</span>
                    </span>
                  </span>
                ) : item.type === responseType.answer ? (
                  <div>
                    <span className="text-gray">{"> "}</span>
                    {item.content}
                  </div>
                ) : null}
              </div>
            );
          })}

          {!loading && (
            <div className="flex flex-row items-center ">
              <div className="text-gray">{">"}</div>
              <form
                action="submit"
                onSubmit={(e) => {
                  e.preventDefault();
                  generateCommand();
                }}
                className="w-full"
              >
                <input
                  ref={inputRef}
                  className="w-full bg-transparent pl-2.5 focus:outline-none focus:ring-0 focus:ring-offset-0"
                  value={input}
                  placeholder={
                    responses.length < 1 ? "Type what you need" : undefined
                  }
                  onChange={(e) => setInput(e.target.value)}
                />
              </form>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-terminal-pattern opacity-20 blur-3xl" />
    </div>
  );
}
