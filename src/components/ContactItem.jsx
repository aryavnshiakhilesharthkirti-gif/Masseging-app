import React from 'react';

const ContactItem = ({ contact, isActive, onClick }) => {
  return (
    <div
      className={`contact-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="contact-avatar">
        <span>{contact.avatar}</span>
        <span
          className={`status-dot ${contact.status === 'online' ? 'online' : 'offline'}`}
        ></span>
      </div>
      <div className="contact-info">
        <div className="contact-top">
          <h4>{contact.name}</h4>
          <span className="time">{contact.time}</span>
        </div>
        <p className="last-message">{contact.lastMessage}</p>
      </div>
    </div>
  );
};

export default ContactItem;
