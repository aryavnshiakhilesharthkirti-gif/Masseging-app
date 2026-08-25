import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';

const MessageInput = () => {
  const [text, setText] = useState('');
  const { sendMessage } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      sendMessage(text.trim());
      setText('');
    }
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <button type="button" className="icon-btn">😊</button>
      <button type="button" className="icon-btn">📎</button>
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
      <button type="submit" className="send-btn">
        {text.trim() ? '➤' : '🎤'}
      </button>
    </form>
  );
};

export default MessageInput;
