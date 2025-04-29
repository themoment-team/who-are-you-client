import * as S from './style';
import * as T from '../style';
import { ShortBar } from '@/assets';
import { getUserInfoList } from '@/utils';
import { CardContentProps } from '@/types';
import GSMLogo from '@/components/GSMLogo';

const Theme1: React.FC<CardContentProps> = ({
  name,
  major,
  phoneNumber,
  email,
  imageUrl,
}) => {
  const userInfo = getUserInfoList({ major, email, phoneNumber });

  return (
    <S.Container>
      <GSMLogo top='20px' left='17px' />
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
      <S.UserImage imageUrl={imageUrl} />
    </S.Container>
  );
};

export default Theme1;
