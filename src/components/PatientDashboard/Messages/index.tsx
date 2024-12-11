import React, { useState } from 'react';
import { ConversationList } from './components/ConversationList';
import { ChatWindow } from './components/ChatWindow';

const conversations = [
  {
    id: 1,
    doctor: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    lastMessage: 'Your latest test results look good. Keep up the good work!',
    timestamp: '2024-03-15T10:30:00',
    unread: true
  },
  {
    id: 2,
    doctor: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    lastMessage: 'Please remember to apply the prescribed cream twice daily.',
    timestamp: '2024-03-14T15:45:00',
    unread: false
  },
  {
    id: 3,
    doctor: 'Dr. Emily Brown',
    specialty: 'General Physician',
    lastMessage: 'How are you feeling after starting the new medication?',
    timestamp: '2024-03-13T09:15:00',
    unread: false
  }
];

export function Messages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');

  const selectedDoctor = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-1/3 h-1/2 sm:h-full">
        <ConversationList
          conversations={conversations}
          selectedConversation={selectedConversation}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onConversationSelect={setSelectedConversation}
        />
      </div>

      <div className="flex-1 h-1/2 sm:h-full">
        <ChatWindow
          selectedDoctor={selectedDoctor ? {
            name: selectedDoctor.doctor,
            specialty: selectedDoctor.specialty
          } : undefined}
          newMessage={newMessage}
          onMessageChange={setNewMessage}
          onSendMessage={() => {
            if (newMessage.trim()) {
              // Handle sending message
              setNewMessage('');
            }
          }}
        />
      </div>
    </div>
  );
}