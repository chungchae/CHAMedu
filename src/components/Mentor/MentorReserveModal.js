import styled from "styled-components";
import { PRIMARY } from "../../colors";
import Modal from "react-modal";
import { HEADER_HEIGHT } from "../../assets/system/layout";

const MentorReserveModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={Modalstyle}
    >
      <Root>
        <CloseButton onClick={closeModal}>X</CloseButton>
      </Root>
    </Modal>
  );
};

const Root = styled.div`
  padding-top: ${HEADER_HEIGHT};
  width: 900px;
  height: 700px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: black;

  &:hover {
    color: ${PRIMARY.LIGHT};
  }
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
    borderRadius: "10px"
  },
};

export default MentorReserveModal;
