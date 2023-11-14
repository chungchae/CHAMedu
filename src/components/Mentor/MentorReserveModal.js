import styled from "styled-components";
import { PRIMARY } from "../../colors";
import Modal from "react-modal";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const MentorReserveModal = ({ isOpen, closeModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const timeOptions = [
    "09:00", "09:30",
    "10:00", "10:30",
    "11:00", "11:30",
    "12:00", "12:30",
    "13:00", "13:30",
    "14:00", "14:30",
    "15:00", "15:30",
    "16:00", "16:30",
    "17:00", "17:30",
    "18:00"
  ];

  const handleTimeButtonClick = (time) => {
    setStartDate((prevDate) => {
      const newDate = new Date(prevDate);
      const [hours, minutes] = time.split(":");
      newDate.setHours(parseInt(hours, 10));
      newDate.setMinutes(parseInt(minutes, 10));
      setSelectedTime(time);
      return newDate;
    });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={Modalstyle}>
      <Root>
        <Container>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale='pt-BR'
          showTimeSelect
          timeFormat='p'
          timeIntervals={30}
          dateFormat='Pp'
          inline
        />
        <TimeSelection>
          {timeOptions.map((time) => (
            <TimeButton
              key={time}
              onClick={() => handleTimeButtonClick(time)}
              selected={time === selectedTime}
            >
              {time}
            </TimeButton>
          ))}
        </TimeSelection>
        <SelectedTime>{startDate.toLocaleString()}</SelectedTime>
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

const Container = styled.div`
flex-direction: row;
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

const TimeSelection = styled.div`
width: 400px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
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
  margin-top: 10px;
  font-size: 16px;
  color: ${PRIMARY.DARK};
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

export default MentorReserveModal;
