/* import styled from "styled-components";
import { GRAY, PRIMARY } from "../../colors";
import Modal from "react-modal";
import React, { useState, useEffect, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Typography } from "antd";
import { useHistory } from 'react-router';
import io from 'socket.io-client';
import axios from "axios";

const ChatModal = ({ isOpen, closeModal, roomId }) => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");  // State to manage the current message being typed
  const [sessionId, setSessionId] = useState(null);  // State to store the user's session ID
  const [error, setError] = useState(null);  // State to handle errors
  const messagesEndRef = useRef(null);  // Reference to the end of the message list for auto-scrolling
;

const socket = io.connect('http://localhost:8080',{
  cors: { origin: '*' }
})

  useEffect(() => {
    // Handle initial connection
    socket.on("connect", () => {
      console.log("socket server connected.");
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("socket server disconnected.");
    });

    // Handle receiving messages
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });

    // Emit join event with the roomId
    socket.emit("join", { roomId }, (sessionIdFromServer) => {
      setSessionId(sessionIdFromServer);
    });

    return () => {
      // Cleanup when component unmounts
      socket.disconnect();
    };
  }, [roomId]);

  // Auto-scroll to the end of the message list when it updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSendMessage = () => {
    // Emit a message event to the server
    socket.emit("send_message", { roomId, message, sessionId }, (errorFromServer) => {
      if (errorFromServer) {
        setError(errorFromServer);
      } else {
        setMessage("");
      }
    });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={Modalstyle}>
      <Root>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <Container>
          <TitleTypo>상담 채팅방</TitleTypo>
          <MessageList>
            {messageList.map((message, index) => (
              <Message key={index}>{message}</Message>
            ))}
            <div ref={messagesEndRef} />
          </MessageList>
          <MessageInput
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <SendMessageButton onClick={handleSendMessage}>Send</SendMessageButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
      </Root>
    </Modal>
  );
};
const MessageList = styled.div`
  overflow-y: auto;
  max-height: 300px;
  border: 1px solid ${GRAY.LIGHT};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Message = styled.div`
  background-color: ${PRIMARY.LIGHT};
  color: white;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const MessageInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${GRAY.LIGHT};
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SendMessageButton = styled.button`
  background-color: ${PRIMARY.MAIN};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${PRIMARY.DARK};
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const Root = styled.div`
  width: 900px;
  height: 600px;
  position: relative;
`;

const Modalstyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "35px",
  },
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 18px;
  span {
    padding-right: 1px;
    font-weight: 700;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: black;

  &:hover {
    color: ${PRIMARY.LIGHT};
  }
`;


export default ChatModal;
 */