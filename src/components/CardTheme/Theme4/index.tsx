import * as S from './style';
import * as T from '../style';
import { GSMLogo, ShortBar } from '@/assets';
import { getUserInfoList } from '@/utils';
import { CardContentProps } from '@/types';

const Theme4: React.FC<CardContentProps> = ({
  name,
  major,
  phoneNumber,
  email,
  imageUrl,
}) => {
  const userInfo = getUserInfoList({ major, email, phoneNumber });

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
