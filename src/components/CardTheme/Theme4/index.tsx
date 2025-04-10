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

const Theme4: React.FC<Props> = ({
  name,
  major,
  phoneNumber,
  email,
  imageUrl,
}) => {
  const userInfo = [
    { label: 'Major', value: major },
    { label: 'Email', value: email },
    { label: 'Tel', value: phoneNumber },
  ].filter((info) => info.value);

  return (
    <S.Container>
      <GSMLogo style={{ top: 264, left: 20, position: 'absolute' }} />
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

export default Theme4;
