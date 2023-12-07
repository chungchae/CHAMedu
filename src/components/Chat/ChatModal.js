import styled from "styled-components";
import { GRAY, PRIMARY } from "../../colors";
import Modal from "react-modal";
import React, { useState, useEffect, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Button, ConfigProvider, Input, Typography } from "antd";
import { useHistory } from "react-router";
// import io from 'socket.io-client';  // 기존 코드에서는 이 부분을 주석 처리하거나 제거합니다.

const ChatModal = ({ isOpen, closeModal, roomId }) => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState(""); // State to manage the current message being typed
  const [sessionId, setSessionId] = useState(null); // State to store the user's session ID
  const [error, setError] = useState(null); // State to handle errors
  const messagesEndRef = useRef(null); // Reference to the end of the message list for auto-scrolling
  const socketRef = useRef(null); // Ref for the WebSocket instance

  useEffect(() => {
    console.log("채팅 내역:::", messageList);
    console.log("roomId:", roomId);
    // Initialize WebSocket connection
    const socket = new WebSocket(`ws://localhost:8080/api/chat/${roomId}`);

    // Set the socket instance in the ref for later use
    socketRef.current = socket;

    // Handle connection open
    socket.addEventListener("open", () => {
      console.log("WebSocket connected.");
    });

    // Handle connection close
    socket.addEventListener("close", () => {
      console.log("WebSocket disconnected.");
    });

    // Handle receiving messages
    socket.addEventListener("message", (event) => {
      const data = event.data;
      try {
        const parsedData = JSON.parse(data);
        setMessageList((list) => [...list, parsedData]);
      } catch (error) {
        // If parsing fails, it's likely a regular string message
        setMessageList((list) => [...list, data]);
      }
    });

    // Emit join event with the roomId
    socket.addEventListener("open", () => {
      socket.send(JSON.stringify({ type: "join", roomId }));
    });

    return () => {
      // Cleanup when component unmounts
      socket.close();
    };
  }, [roomId]);

  // Auto-scroll to the end of the message list when it updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSendMessage = () => {
    // Emit a message event to the server
    const messageData = { type: "send_message", roomNumber: roomId, message };
    socketRef.current.send(JSON.stringify(messageData));

    // Assuming the message should be displayed on the client as well
    setMessageList((list) => [...list, messageData]);
    setMessage(""); // Clear the input after sending
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY.DEFAULT,
        },
      }}
    >
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={Modalstyle}>
      <Root>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <Container>
          <TitleTypo>상담 채팅방</TitleTypo>
          <MessageList>
            {messageList.map((message, index) => (
              <Message key={index}>
                {typeof message === "string" ? (
                  <span>{message}</span>
                ) : (
                  <span>
                    {message.type === "getId"
                      ? null
                      : message.message}
                  </span>
                )}
              </Message>
            ))}

            <div ref={messagesEndRef} />
          </MessageList>
          <MessageInput
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='메세지를 입력하세요'
          />
          <SendMessageButton onClick={handleSendMessage}>
            전송
          </SendMessageButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
      </Root>
    </Modal>
    </ConfigProvider>
  );
};

const MessageList = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: auto;
  border: 1px solid ${GRAY.LIGHT};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const Message = styled.div`
  width: 60%;
  display: flex;
  background-color: ${PRIMARY.LIGHT};
  color: white;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-left: auto; // Add this line
`;
const MessageInput = styled(Input)`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const SendMessageButton = styled(Button)`
font-family: "esamanru";
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
  margin-bottom: 20px;
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
