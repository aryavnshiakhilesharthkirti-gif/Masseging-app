import React from 'react';

const MessageBubble = ({ message }) => {
  const isMe = message.sender === 'me';

  return (
    <div className={`message-bubble ${isMe ? 'me' : 'them'}`}>
      <p className="message-text">{message.text}</p>
      <span className="message-time">{message.time}</span>
    </div>
  );
};

export default MessageBubble;
