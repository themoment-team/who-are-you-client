interface UserData {
  major?: string;
  email?: string;
  phoneNumber?: string;
}

interface UserInfoItem {
  label: string;
  value?: string;
}

const getUserInfoList = ({
  major,
  email,
  phoneNumber,
}: UserData): UserInfoItem[] => {
  return [
    { label: 'Major', value: major },
    { label: 'Email', value: email },
    { label: 'Tel', value: phoneNumber },
  ].filter((info) => info.value);
};

export default getUserInfoList;
