import React from 'react';
import { ChatProvider } from './context/ChatContext';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import './App.css';

function App() {
  return (
    <ChatProvider>
      <div className="app">
        <Sidebar />
        <ChatArea />
      </div>
    </ChatProvider>
  );
}

export default App;
