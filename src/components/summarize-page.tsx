import { useState } from "react";
import { motion } from "framer-motion";

const SummarizePage = () => {
    const [text, setText] = useState("");
    const [summary, setSummary] = useState("");

    const summarizeText = async () => {
        try {
            console.log('hi people')
            const response = await fetch(import.meta.env.VITE_BACKEND_API_URL + 'summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'

                },
                body: JSON.stringify({ text })
            });

            console.log('====================================');
            console.log(response);
            console.log('====================================');

            const data = await response.json();
            setSummary(data.summary);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center  min-h-screen bg-gray-100 p-8">
                <h1 className="text-2xl font-semibold mb-4">Summarize your texts or PDF in seconds 😄</h1>
                <textarea
                    className="w-full h-40 p-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none"
                    placeholder="Enter text to summarize..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <button
                    className="w-full py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={summarizeText}
                >
                    Summarize
                </button>
                {summary && (
                    <motion.div
                        className="p-4 bg-gray-200 rounded-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-lg font-bold mb-2">Summary</h2>
                        <p>{summary}</p>
                    </motion.div>
                )}
        </div>
    );
};

export default SummarizePage;
