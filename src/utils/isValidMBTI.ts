const isValidMBTI = (mbti: string | undefined) => {
  return !!mbti && /^[A-Za-z]{4}$/.test(mbti);
};

export default isValidMBTI;
