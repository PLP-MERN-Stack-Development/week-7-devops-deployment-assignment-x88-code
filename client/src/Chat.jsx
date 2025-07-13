import React, { useState } from 'react';
import { useSocket } from './socket/socket';

const Chat = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [joined, setJoined] = useState(false);

  const {
    isConnected,
    messages,
    users,
    typingUsers,
    connect,
    sendMessage,
    setTyping,
  } = useSocket();

  const handleJoin = () => {
    if (usernameInput.trim()) {
      connect(usernameInput);
      setJoined(true);
    }
  };

  const handleSend = () => {
    if (messageInput.trim()) {
      sendMessage(messageInput);
      setMessageInput('');
      setTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded shadow-md p-6">
        {!joined ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Enter your username to join</h2>
            <input
              type="text"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              placeholder="Username"
              className="border px-4 py-2 rounded w-1/2 mb-4"
            />
            <br />
            <button
              onClick={handleJoin}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Join Chat
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">Welcome to the Chat</h2>
              <span className="text-sm">
                Status:{' '}
                <span className={isConnected ? 'text-green-600' : 'text-red-500'}>
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Chat Messages */}
              <div className="flex-1">
                <div className="h-72 overflow-y-auto border rounded p-3 bg-gray-50">
                  {messages.map((msg) => (
                    <div key={msg.id} className="mb-2 text-sm">
                      {msg.system ? (
                        <em className="text-gray-500">{msg.message}</em>
                      ) : (
                        <>
                          <span className="font-semibold text-blue-700">{msg.sender}:</span>{' '}
                          {msg.message}
                          {msg.isPrivate && <span className="ml-1 text-yellow-500">🔒</span>}
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {typingUsers.length > 0 && (
                  <p className="text-xs italic mt-2 text-gray-500">
                    {typingUsers.join(', ')} typing...
                  </p>
                )}

                <div className="mt-4 flex items-center gap-2">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => {
                      setMessageInput(e.target.value);
                      setTyping(true);
                    }}
                    onBlur={() => setTyping(false)}
                    placeholder="Type your message..."
                    className="flex-1 border px-4 py-2 rounded"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Send
                  </button>
                </div>
              </div>

              {/* Online Users */}
              <div className="w-full md:w-64 bg-gray-50 border rounded p-3">
                <h3 className="font-semibold mb-2">Online Users</h3>
                <ul className="text-sm list-disc list-inside">
                  {users.map((u) => (
                    <li key={u.id}>{u.username}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
