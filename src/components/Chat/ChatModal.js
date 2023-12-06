import styled from "styled-components";
import { GRAY, PRIMARY } from "../../colors";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Typography } from "antd";
import { useHistory } from 'react-router';
import io from 'socket.io-client';
import axios from "axios";

const ChatModal = ({ isOpen, closeModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeList, setTimeList] = useState();

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={Modalstyle}>
      <Root>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <Container>
          
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

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 83%;
`;

const TimeContainer = styled.div``;

const ProfileContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
`;

const ProfileContainer2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimeSelection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const DatePickerContainer = styled.div`
  height: 220px;
  margin-right: 50px;
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

const MentorProfileImg = styled.img`
  width: 250px;
  height: 125px;
  object-fit: cover;
  border-radius: 200px;
  padding: 0px 30px;
  padding-bottom: 20px;
`;

const TimeButton = styled.button`
  margin: 5px;
  padding: 8px;
  background-color: ${(props) => (props.selected ? PRIMARY.LIGHT : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border: 1px solid ${PRIMARY.LIGHT};
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${PRIMARY.LIGHT};
    color: white;
  }
`;

const SelectedTime = styled.div`
  font-size: 16px;
`;


const TitleTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 18px;
  span {
    padding-right: 1px;
    font-weight: 700;
  }
`;

const EduTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 16px;
  color: ${GRAY.DARK};
`;

const InfoTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 16px;
  padding-right: 20px;
`;

const MenuTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 18px;
`;

const ReserveButtonStyled = styled.button`
  background-color: ${PRIMARY.DEFAULT};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 20px; 
  right: 20px; 

  &:hover {
    background-color: ${PRIMARY.LIGHT};
  }
`;


export default ChatModal;
