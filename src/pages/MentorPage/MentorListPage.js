import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY, PRIMARY } from "../../colors";
import Header from "../../components/Header/HeaderMentee";
import styled from "styled-components";
import MentorCard from "../../components/Mentor/MentorCard";
import MentorSmaple from "../../constants/json/mentor_list_sample.json";
import camelizeKey from "../../utils/camelizeKey";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { Select, ConfigProvider } from "antd";
import axios from "axios";

const MentorListPage = () => {
  const mentorList = camelizeKey(MentorSmaple.mentor_list); //멘토 샘플
  console.log("망", mentorList);

  const [search, setSearch] = useState(""); //검색어
  const [admissionSelect, setAdmissionSelect] = useState(""); //전형 옵션
  const [collegeSelect, setCollegeSelect] = useState(""); //단과대 옵션
  const [mentorList1, setMentorList1] = useState();

  useEffect(() => {
  const test = () => {
    axios.get(`http://localhost:8080/mentor-profile-list`).then((res) => {
      
      setMentorList1(res.data.content);
    }).catch((error) =>{
      console.error('Axios Error', error);
    })
  }
  test();
},[]);

  console.log("파", mentorList1);
  //int 값으로 변경 필요
  const admissionOptions = [
    { value: "All", label: "All" },
    { value: "학종", label: "학종" },
    { value: "정시", label: "정시" },
    { value: "교과", label: "교과" },
    { value: "논술", label: "논술" },
  ];

  const collegeOptions = [
    { value: "All", label: "All" },
    { value: "공과대", label: "공과대" },
    { value: "자연대", label: "자연대" },
    { value: "문과대", label: "문과대" },
    { value: "예대", label: "예대" },
    { value: "체대", label: "체대" },
  ];
  const handleSearchChange = (event) => {
    setSearch(event.currentTarget.value);
  };
  const handleAdmissionChange = (option) => {
    setAdmissionSelect(option);
  };
  const handleCollegeChange = (option) => {
    setCollegeSelect(option);
  };

  //검색어, 전형, 단과대로 데이터 필터링
  const filteredMentorListData = mentorList.filter((MentorItem) => {
    const nicknameIncludes = MentorItem.nickname.toLowerCase().includes(search.toLowerCase());
    const admissionIncludes = admissionSelect === "All" || MentorItem.admission.toLowerCase().includes(admissionSelect.toLowerCase());
    const collegeIncludes = collegeSelect === "All" || MentorItem.college.toLowerCase().includes(collegeSelect.toLowerCase());
    return nicknameIncludes && admissionIncludes && collegeIncludes;
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY.DEFAULT,
        },
      }}
    > 
      <Root>
        <Header />
        <Container>
          <SearchContainer>
            <SearchBox
              placeholder='멘토를 검색해보세요!'
              type='search'
              id='psearch'
              name='psearch'
              maxLength={20}
              onChange={handleSearchChange}
            />
          </SearchContainer>
          <SelectContainer>
            <SelectBox
              onChange={(option) => handleAdmissionChange(option)}
              placeholder='입시 전형 선택'
              options={admissionOptions}
            />
            <SelectBox
              onChange={(option) => handleCollegeChange(option)}
              placeholder='단과대 선택'
              options={collegeOptions}
            />
          </SelectContainer>
          <MentorCardContainer>
            {mentorList1?.length === 0 ? (
              <NoResultsMessage>검색 결과가 없습니다</NoResultsMessage>
            ) : (
              mentorList1?.map((mentor, index) => (
                <MentorCard
                  mentor={mentor}
                  index={index}
                  key={`mentor_card_${index}`}
                />
              ))
            )}
          </MentorCardContainer>
        </Container>
      </Root>
    </ConfigProvider>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px; //헤더 높이만큼 padding
  position: relative;
  background-color: ${GRAY.LIGHT};
`;
const Container = styled.div`
  flex-direction: column;
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  align-items: center;
`;

const MentorCardContainer = styled.div`
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
  padding-bottom: 500px;
`;

const NoResultsMessage = styled.div`
  text-align: center;
  font-size: 16px;
  color: ${GRAY.DARK};
  margin-top: 60px;
  height: 500px;
  width: 100%; 
`;

const SearchContainer = styled.div`
  width: 70%;
  height: 50px;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectContainer = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const SearchBox = styled(Search)`
`;
const SelectBox = styled(Select)`
  width: 150px;
  margin-right: 20px;
`;

export default MentorListPage;
