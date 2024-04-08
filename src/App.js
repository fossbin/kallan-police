// App.js
import React, { useState } from 'react';
import RoomCreationForm from './RoomCreationForm';
import RoomJoiningList from './RoomJoiningList';

function App() {
  const [currentRoom, setCurrentRoom] = useState(null);

  const handleCreateRoom = (roomName) => {
    // Implement logic to create a new room
    // Replace this with actual API call
    console.log(`Creating room: ${roomName}`);
  };

  const handleJoinRoom = (roomId) => {
    // Implement logic to join an existing room
    // Replace this with actual API call
    console.log(`Joining room: ${roomId}`);
    setCurrentRoom(roomId);
  };

  return (
    <div>
      <h1>Room Application</h1>
      {!currentRoom && (
        <>
          <h2>Create Room</h2>
          <RoomCreationForm onCreateRoom={handleCreateRoom} />
          <hr />
          <RoomJoiningList onJoinRoom={handleJoinRoom} />
        </>
      )}
      {currentRoom && <p>You are currently in room {currentRoom}</p>}
    </div>
  );
}

export default App;
