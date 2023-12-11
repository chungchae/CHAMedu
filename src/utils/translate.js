export const translateAdmission = (value) => {
  if (value === 0) {
    return "학종";
  }
  if (value === 1) {
    return "정시";
  }
  if (value === 2) {
    return "교과";
  }
  if (value === 3) {
    return "논술";
  }
  else {
    return "기타";
  }
};
