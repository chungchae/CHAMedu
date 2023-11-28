import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { Input, Typography, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { PRIMARY } from "../../colors";
import StarRatings from "react-star-ratings";

const MentorReviewModal = ({ isOpen, closeModal }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Rating:", rating);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={Modalstyle}>
      <Root>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <Container>
          <TitleTypo>
            <span>치와와교수</span>의 상담 후기 작성하기
          </TitleTypo>
          <StarRatings
            rating={rating}
            starDimension={30}
            starRatedColor={PRIMARY.LIGHT}
            starHoverColor={PRIMARY.LIGHT}
            changeRating={handleRatingChange}
            numberOfStars={5}
            name='rating'
          />
          <TitleBox
            placeholder='제목을 작성해주세요'
            value={title}
            onChange={handleTitleChange}
          />
          <ContentBox
            maxLength={1000}
            placeholder='내용을 작성해주세요'
            value={content}
            onChange={handleContentChange}
            style={{
              height: "200px",
              borderColor: `${PRIMARY.DEFAULT} !important`,
              boxShadow: `0 0 0 2px ${PRIMARY.DEFAULT}20 !important`,
            }}
          />
          <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
        </Container>
      </Root>
    </Modal>
  );
};

const Root = styled.div`
  width: 900px;
  height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
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
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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

const TitleTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 18px;
  span {
    padding-right: 1px;
    font-weight: 700;
  }
`;

const TitleBox = styled(Input)`
  &:hover {
    border-color: ${PRIMARY.DEFAULT};
    box-shadow: 0 0 0 2px ${PRIMARY.DEFAULT}20;
  }
  &:focus {
    border-color: ${PRIMARY.DEFAULT};
    box-shadow: 0 0 0 2px ${PRIMARY.DEFAULT}20;
  }
`;

const ContentBox = styled(TextArea)`
  height: 200px;
  vertical-align: top;

  &:hover,
  &:focus {
    border-color: ${PRIMARY.DEFAULT} !important;
    box-shadow: 0 0 0 2px ${PRIMARY.DEFAULT}20 !important;
  }
`;

const SubmitButton = styled(Button)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PRIMARY.DEFAULT};
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  right: 5px;
  bottom: 5px;

  &:hover {
    background-color: ${PRIMARY.LIGHT};
  }
`;

export default MentorReviewModal;
