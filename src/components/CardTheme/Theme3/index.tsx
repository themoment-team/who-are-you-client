import * as S from './style';
import * as T from '../style';
import { GSMLogo, ShortBar } from '@/assets';

interface Props {
  name: string;
  imageUrl: string;
  phoneNumber?: string;
  email?: string;
  major?: string;
}

const Theme3: React.FC<Props> = ({
  name,
  major,
  phoneNumber,
  email,
  imageUrl,
}) => {
  const userInfo = [
    { label: 'Major', value: major },
    { label: 'Tel', value: phoneNumber },
    { label: 'Email', value: email },
  ].filter((info) => info.value);

  return (
    <S.Container>
      <GSMLogo top={264} left={20} />
      <S.UserImage imageUrl={imageUrl} />
      <S.UserInfoContainer>
        <T.MainInfoBox>
          <T.UserName>{name}</T.UserName>
          {major && <T.UserMajor>{major}</T.UserMajor>}
          <ShortBar />
        </T.MainInfoBox>
        <T.SubInfoBox>
          {userInfo.map((info, index) => (
            <T.SubInfoText key={index}>
              {info.label}) {info.value}
            </T.SubInfoText>
          ))}
        </T.SubInfoBox>
      </S.UserInfoContainer>
    </S.Container>
  );
};

export default Theme3;
