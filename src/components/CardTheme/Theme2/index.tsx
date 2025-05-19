import * as S from './style';
import * as T from '../style';
import { DummyImage, LongBar } from '@/assets';
import { getUserInfoList } from '@/utils';
import { CardContentProps } from '@/types';
import GSMLogo from '@/components/GSMLogo';

const Theme2: React.FC<CardContentProps> = ({
  name,
  major,
  phoneNumber,
  email,
  imageUrl,
  isLoading,
}) => {
  const userInfo = getUserInfoList({ major, email, phoneNumber });

  return (
    <S.Container>
      <GSMLogo top='112px' left='29px' />
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
      {isLoading ? (
        <S.DummyImageWrapper>
          <DummyImage type='Horizontal' />
        </S.DummyImageWrapper>
      ) : (
        <S.UserImage imageUrl={imageUrl} />
      )}
    </S.Container>
  );
};

export default Theme2;
