import * as S from './style';
import * as T from '../style';
import { GsmLogo } from '@/assets';

interface Props {
  name: string;
  phoneNumber: string;
  email: string;
  instagram: string;
  imageUrl: string;
  major?: string;
  mbti?: string;
}

const Theme1: React.FC<Props> = ({
  name,
  major,
  phoneNumber,
  email,
  mbti,
  instagram,
  imageUrl,
}) => {
  const userInfo = [
    { label: 'Tel', value: phoneNumber },
    { label: 'Email', value: email },
    { label: 'MBTI', value: mbti },
    { label: 'Insta', value: instagram },
  ].filter((info) => info.value);

  return (
    <S.Contianer>
      <S.MainInfoContianer>
        <S.MainInfoBox>
          <T.UserName>{name}</T.UserName>
          <T.UserMajor>{major}</T.UserMajor>
          <S.MarginBox>
            <T.UserInfoBox>
              {userInfo.map((info, index) => (
                <T.UserInfoText key={index}>
                  {info.label}) {info.value}
                </T.UserInfoText>
              ))}
            </T.UserInfoBox>
          </S.MarginBox>
        </S.MainInfoBox>
        <S.ImgWrapper>
          <S.ImgContinaer src={imageUrl} />
          <GsmLogo />
        </S.ImgWrapper>
      </S.MainInfoContianer>
    </S.Contianer>
  );
};

export default Theme1;
