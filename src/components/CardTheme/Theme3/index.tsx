import * as S from './style';
import * as T from '../style';
import { DummyImage, ShortBar } from '@/assets';
import { getUserInfoList } from '@/utils';
import { CardContentProps } from '@/types';
import GSMLogo from '@/components/GSMLogo';

const Theme3: React.FC<CardContentProps> = ({
  name,
  major,
  phoneNumber,
  email,
  imageUrl,
  isLoading,
}) => {
  const userInfo = getUserInfoList({ major, email, phoneNumber });

  const ThemeNumber = 3;

  return (
    <S.Container>
      <GSMLogo top='252px' left='20px' />
      {isLoading ? (
        <T.DummyImageWrapper Theme={ThemeNumber}>
          <DummyImage type='Vertical' />
        </T.DummyImageWrapper>
      ) : (
        <S.UserImage imageUrl={imageUrl} />
      )}
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
