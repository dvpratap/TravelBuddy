import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, TextField, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { useNavigate } from 'react-router-dom';
import '../src/css/ChatPage.css';


const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([
    {
      message: 'Hi',
      sender: 'other'
    },
    {
      message: 'hello',
      sender: 'other'
    },
    {
      message: 'hi',
      sender: 'user'
    },
    {
      message: 'hello',
      sender: 'user'
    }
  ]);
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const cancelButtonClick = (e) => {
    navigate('/')
  };

  const payButtonClick = (e) => {
    navigate('/payment');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      message: message,
      sender: 'user'
    }
    setChatLog([...chatLog, newMessage]);
    setMessage('');
  };

  return (
    <Card variant="outlined" className="chat-page">
      <CardHeader title="Chat" className="header" />
      <CardContent className="chat-log">
        {chatLog.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'message-container right' : 'message-container left'}>
            <Typography variant="body1" gutterBottom className="message">
              {msg.message}
            </Typography>
          </div>
        ))}
      </CardContent>
      <form onSubmit={handleFormSubmit}>
        <Card variant="outlined" className="chat-input">
          <CardContent>
            <TextField
              id="message-input"
              label="Type your message here"
              variant="outlined"
              fullWidth
              value={message}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <IconButton type="submit">
                    <SendIcon />
                  </IconButton>
                )
              }}
            />
            <div className="button-group">
              <Button variant="contained" color="error" onClick={cancelButtonClick} type="button" style={{marginRight: '10px'}}>
                Cancel
              </Button>
              <Button variant="contained" onClick={payButtonClick} color="primary" type="button">
                Pay
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </Card>
  );
};

export default ChatPage;
