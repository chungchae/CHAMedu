import styled from "styled-components";
import { GRAY, PRIMARY } from "../../colors";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Typography } from "antd";
import { useHistory } from 'react-router';
import io from 'socket.io-client';
import axios from "axios";

const ChatModal = ({ isOpen, closeModal, roomId }) => {
  const [messageList, setMessageList] = useState([]);

   const socket = io.connect('http://localhost:8080');

  /* useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
    console.log(socket)
  }, [socket]); */

  socket.on("connect", () => {
    console.log("socket server connected.");
  });
  
  socket.on("disconnect", () => {
    console.log("socket server disconnected.");
  });
  useEffect(() => {
    console.log('채팅방 아이디:',roomId)
  }, [])

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={Modalstyle}>
      <Root>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <Container>
          <TitleTypo>상담 채팅방</TitleTypo>
        </Container>
      </Root>
    </Modal>
  );
};

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
