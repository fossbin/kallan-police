import React from 'react';

function WorkInProgressPage() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{
        width: '50%', 
        maxWidth: '100%', 
        height: 'auto' 
      }}>
        <img src="https://media.giphy.com/media/rJacrW43BXVAgpSo8D/giphy.gif" alt="GIF from Giphy" style={{
          width: '100%',
          height: '100%', 
          display: 'block', 
          margin: '0 auto' 
        }} />
      </div>
    </div>
  );
}

export default WorkInProgressPage;
