import React,{ useState} from 'react';

function RoomCreationForm({onCreateRoom}){
    const [roomName, setRoomName]=useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreateRoom(roomName);
        setRoomName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input 
                    type='text' 
                    value={roomName}
                    onChange={(event) =>setRoomName(event.target.value)}
                />
            </label>
            <button type="submit">Create Room</button>
        </form>
    );
}

export default RoomCreationForm;