import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle name input
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log('Name changed: ' + e.target.value); // just to see what's happening
  };

  // Handle email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle message input
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Reset form 
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    console.log('Form reset!');
  };

  return (
    <div className="App">
      <h1>My React Form </h1>
      <p>Type something and see it appear below!</p>

      {/* FORM SECTION */}
      <div className="form-box">
        <h2>Fill this form:</h2>
        
        <div className="input-group">
          <label>Your Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={handleNameChange}
            placeholder="Enter your name here..."
          />
        </div>

        <div className="input-group">
          <label>Email Address:</label>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange}
            placeholder="Enter your email adress here..."
          />
        </div>

        <div className="input-group">
          <label>Your Message:</label>
          <textarea 
            value={message} 
            onChange={handleMessageChange}
            placeholder="Write something..."
            rows="4"
          />
        </div>

        <button onClick={resetForm} className="reset-btn">
          Clear All
        </button>
      </div>

      {/* PREVIEW SECTION */}
      <div className="preview-box">
        <h2>Live Preview </h2>
        
      
        {name === '' && email === '' && message === '' ? (
          <p className="empty-msg">Nothing to show yet... Type..!</p>
        ) : (
          <div className="preview-content">
            <p><span>Name:</span> {name || 'Not entered'}</p>
            <p><span>Email:</span> {email || 'Not entered'}</p>
            <p><span>Message:</span> {message || 'Not entered'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;