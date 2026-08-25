import React from 'react';
import { useChat } from '../context/ChatContext';
import ContactItem from './ContactItem';

const Sidebar = () => {
  const {
    contacts,
    activeContactId,
    setActiveContactId,
    searchQuery,
    setSearchQuery,
  } = useChat();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>💬 Chats</h2>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="contacts-list">
        {contacts.length === 0 ? (
          <p className="no-results">No contacts found</p>
        ) : (
          contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              isActive={contact.id === activeContactId}
              onClick={() => setActiveContactId(contact.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
