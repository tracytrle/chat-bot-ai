import { useState } from "react";
import "./App.css";

function App() {
  const API_KEY = process.env.REACT_APP_OPEN_API_KEY;
  const [message, useMessage] = useState([
    {
      role: "system",
      content:
        "You're like a grammar-checking wizard, helping users fix grammar bloopers and jazz up their sentence structures.",
    },
  ]);

  const fetchData() {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          // We'll later replace the content with user input
          messages: [...messages, { "role": "user", "content": "This is a test!" }],
          temperature: 0.7,
        }),
      }
    );
    return response.json()
  }
  
  return <div></div>;
}

export default App;
