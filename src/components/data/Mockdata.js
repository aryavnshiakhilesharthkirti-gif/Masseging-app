export const initialContacts = [
  {
    id: 1,
    name: 'Rahul Sharma',
    avatar: '👨',
    status: 'online',
    lastMessage: 'Hey! How are you?',
    time: '10:30 AM',
  },
  {
    id: 2,
    name: 'Priya Singh',
    avatar: '👩',
    status: 'online',
    lastMessage: 'Meeting at 5 PM',
    time: '09:15 AM',
  },
  {
    id: 3,
    name: 'Amit Kumar',
    avatar: '🧑',
    status: 'offline',
    lastMessage: 'Thanks for the help!',
    time: 'Yesterday',
  },
  {
    id: 4,
    name: 'Sneha Patel',
    avatar: '👧',
    status: 'online',
    lastMessage: 'See you tomorrow 👋',
    time: 'Yesterday',
  },
  {
    id: 5,
    name: 'Team Group',
    avatar: '👥',
    status: 'online',
    lastMessage: 'Project update sent',
    time: 'Monday',
  },
];

export const initialMessages = {
  1: [
    { id: 1, text: 'Hi there!', sender: 'them', time: '10:25 AM' },
    { id: 2, text: 'Hey! How are you?', sender: 'them', time: '10:30 AM' },
  ],
  2: [
    { id: 1, text: 'Are you free today?', sender: 'them', time: '09:00 AM' },
    { id: 2, text: 'Meeting at 5 PM', sender: 'them', time: '09:15 AM' },
  ],
  3: [
    { id: 1, text: 'Can you help me with the code?', sender: 'me', time: 'Yesterday' },
    { id: 2, text: 'Thanks for the help!', sender: 'them', time: 'Yesterday' },
  ],
  4: [
    { id: 1, text: 'See you tomorrow 👋', sender: 'them', time: 'Yesterday' },
  ],
  5: [
    { id: 1, text: 'Project update sent', sender: 'them', time: 'Monday' },
  ],
};
