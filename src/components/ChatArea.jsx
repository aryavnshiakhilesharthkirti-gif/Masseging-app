import React, { useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';
import Header from './Header';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';

const ChatArea = () => {
  const { messages, activeContactId } = useChat();
  const messagesEndRef = useRef(null);

  const currentMessages = messages[activeContactId] || [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentMessages.length, activeContactId]);

  return (
    <div className="chat-area">
      <Header />

      <div className="messages-container">
        {currentMessages.length === 0 ? (
          <div className="empty-chat">
            <p>👋 No messages yet. Say hi!</p>
          </div>
        ) : (
          currentMessages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatArea;
