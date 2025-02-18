import React, { useState } from 'react';
import axios from 'axios';
import './ChatStyles.css';

const Chat = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(true);  

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const fetchGPTResponse = async (userInput) => {
    if (!API_KEY) {
      setOutput("Erreur : Clé API manquante.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userInput }],
          max_tokens: 150,
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setOutput(response.data.choices[0].message.content.trim());
    } catch (error) {
      console.error("Erreur OpenAI:", error.response?.data || error.message);
      setOutput(error.response?.data?.error?.message || "Erreur lors de la requête.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      fetchGPTResponse(input);
    } else {
      setOutput("Veuillez entrer une question.");
    }
  };

  const handleReset = () => {
    setInput('');
    setOutput('');
  };

  const toggleChat = () => {
    setShowChat(prevShowChat => !prevShowChat); 
  };

  return (
    <div className="chat-container">
      <button onClick={toggleChat} className="toggle-chat-btn">
        {showChat ? 'Cacher le cadre' : 'Afficher le cadre'}
      </button>

      {showChat && (
        <div className="chat-box">
          <h1>Parlez avec mon IA</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez lui une question !"
            />
            <div className="button-group">
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'En cours...' : 'Envoyer'}
              </button>
              <button type="button" onClick={handleReset} className="reset-btn">
                Réinitialiser
              </button>
            </div>
          </form>
          <div className="response-container">
            <h2>Réponse de mon IA :</h2>
            <p>{output}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
