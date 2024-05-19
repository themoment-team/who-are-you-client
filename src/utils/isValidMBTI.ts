const isValidMBTI = (mbti: string) => {
  return /^[A-Za-z]{4}$/.test(mbti);
};

export default isValidMBTI;
