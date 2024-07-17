import React, { useState } from 'react';
import axios from 'axios';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/build/pdf.worker.entry';

export default function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [pdfText, setPdfText] = useState('');

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = async (e) => {
                const typedArray = new Uint8Array(e.target.result);
                const pdf = await pdfjsLib.getDocument(typedArray).promise;
                let text = '';
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    textContent.items.forEach(item => {
                        text += item.str + ' ';
                    });
                }
                setPdfText(text);
            };
            fileReader.readAsArrayBuffer(file);
        }
    };

    const handleSendMessage = async () => {
        const newMessages = [...messages, { text: input, user: true }];
        setMessages(newMessages);
        setInput('');
        const response = await handleChatbotResponse(input);
        setMessages([...newMessages, { text: response, user: false }]);
    };

    const handleChatbotResponse = async (question) => {
        try {
            const response = await axios.post('YOUR_API_ENDPOINT', {
                question,
                pdfText,
            });
            return response.data.answer;
        } catch (error) {
            console.error('Error fetching response:', error);
            return 'Sorry, something went wrong.';
        }
    };

    return (
        <div className="w-full m-10 p-10">
            <div className="bg-white shadow-lg rounded-lg max-w-md">
                <div className="border-b-2 px-2 py-4">
                    <div className="inline-flex items-center">
                        <img src="" alt="logo" className="w-8"/>
                        <span className="ml-4">ChatBot</span>
                    </div>
                </div>
                <div className="h-80 flex flex-col space-y-4 max-w-md px-2 mb-2 mt-2 overflow-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex flex-col ${msg.user ? 'items-end' : 'items-start'}`}>
                            <span className={`px-4 py-2 text-white rounded-b-xl mb-2 mt-2 ${msg.user ? 'bg-gray-500 rounded-tr-xl' : 'bg-blue-500 rounded-tl-xl'}`}>
                                {msg.text}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="border-t-2 flex items-center py-4 px-2">
                    <input type="file" onChange={handleFileUpload} className="mr-2"/>
                    <input 
                        type="text" 
                        placeholder="Type here..." 
                        className="flex-1 rounded-lg px-4 py-2 border-2 mr-2"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleSendMessage} className="relative right-16">Send</button>
                </div>
            </div>
        </div>
    );
}
