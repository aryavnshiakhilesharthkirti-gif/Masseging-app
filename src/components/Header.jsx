import React from 'react';
import { useChat } from '../context/ChatContext';

const Header = () => {
  const { contacts, activeContactId } = useChat();
  const contact = contacts.find((c) => c.id === activeContactId);

  if (!contact) return null;

  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <div className="header-avatar">
          <span>{contact.avatar}</span>
          <span
            className={`status-dot ${contact.status === 'online' ? 'online' : 'offline'}`}
          ></span>
        </div>
        <div>
          <h3>{contact.name}</h3>
          <span className="status-text">
            {contact.status === 'online' ? '🟢 Active now' : '⚫ Offline'}
          </span>
        </div>
      </div>
      <div className="chat-header-actions">
        <button title="Call">📞</button>
        <button title="Video">📹</button>
        <button title="More">⋮</button>
      </div>
    </div>
  );
};

export default Header;
