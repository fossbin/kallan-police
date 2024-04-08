import React, { useState, useEffect } from 'react';

function RoomJoiningList({ onJoinRoom }) {
    const [rooms,setRooms] = useState([]);

    useEffect(() => {
        const availableRooms = [
            {id:1,name: 'Room 1'},
            {id:2,name: 'Room 2'},
            {id:3,name: 'Room 3'},
        ];
        setRooms(availableRooms);
    }, []);

    const handleJoinRoom = (roomId) => {
        onJoinRoom(roomId);
    };

    return (
        <div>
            <h2>Available Rooms</h2>
            <ul>
                {rooms.map((room) => (
                    <li key={room.id}>
                        {room.name}{' '}
                        <button onClick={() => handleJoinRoom(room.id)}>Join</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default  RoomJoiningList;