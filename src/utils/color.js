export const getAdmissionColor = (value) => {
  // if (value === '논술') {
  //   return '#99DDEC';
  // }
  // if (value === '학종') {
  //   return '#E9E587';
  // }
  // if (value === '교과') {
  //   return '#F8A7A2';
  // }
  // if (value === '정시') {
  //   return '#D5BEED';
  // }
  // else {
  //   return '#C4C4C4'
  // }
  if (value === 3) {
    return '#99DDEC';
  }
  if (value === 0) {
    return '#E9E587';
  }
  if (value === 2) {
    return '#F8A7A2';
  }
  if (value === 1) {
    return '#D5BEED';
  }
  else {
    return '#C4C4C4'
  }
};
