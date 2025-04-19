import * as S from './style';
import * as T from '../style';
import { LongBar } from '@/assets';
import { getUserInfoList } from '@/utils';
import { CardContentProps } from '@/types';

const Theme2: React.FC<CardContentProps> = ({
  name,
  major,
  phoneNumber,
  email,
  imageUrl,
}) => {
  const userInfo = getUserInfoList({ major, email, phoneNumber });

  return (
    <S.Container>
      <LongBar style={{ top: 31, left: 23.1, position: 'absolute' }} />
      <S.UserInfoContainer>
        <T.MainInfoBox>
          <T.UserName>{name}</T.UserName>
          {major && <T.UserMajor>{major}</T.UserMajor>}
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

export default Theme2;
