import React, { createContext, useContext, useState } from 'react';
import { initialContacts, initialMessages } from '../data/mockData';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [contacts] = useState(initialContacts);
  const [messages, setMessages] = useLocalStorage('chat_messages', initialMessages);
  const [activeContactId, setActiveContactId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const sendMessage = (text) => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const newMessage = {
      id: Date.now(),
      text,
      sender: 'me',
      time,
    };

    setMessages((prev) => ({
      ...prev,
      [activeContactId]: [...(prev[activeContactId] || []), newMessage],
    }));

    // Simulate auto-reply after 1.5 seconds
    setTimeout(() => {
      const replies = [
        'Got it 👍',
        'Okay, thanks!',
        'Let me check and get back to you.',
        'Sounds good!',
        'Haha 😄',
      ];
      const reply = {
        id: Date.now() + 1,
        text: replies[Math.floor(Math.random() * replies.length)],
        sender: 'them',
        time: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => ({
        ...prev,
        [activeContactId]: [...(prev[activeContactId] || []), reply],
      }));
    }, 1500);
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ChatContext.Provider
      value={{
        contacts: filteredContacts,
        messages,
        activeContactId,
        setActiveContactId,
        sendMessage,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
