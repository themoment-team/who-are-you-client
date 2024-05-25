import * as S from './style';
import * as T from '../style';
import { GsmLogo } from '@/assets';

interface Props {
  name: string;
  phoneNumber: string;
  email: string;
  instagram: string;
  imageUrl: string;
  mbti?: string;
}

const Theme3: React.FC<Props> = ({
  name,
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
        <S.PuppleContainer>
          <S.PurpleBar />
          <T.MainInfoBox>
            <T.UserName>{name}</T.UserName>
            <T.UserInfoBox>
              {userInfo.map((info, index) => (
                <T.UserInfoText key={index}>
                  {info.label}) {info.value}
                </T.UserInfoText>
              ))}
            </T.UserInfoBox>
          </T.MainInfoBox>
        </S.PuppleContainer>

        <S.ImgHeightBox>
          <S.ImgContinaer src={imageUrl} />
          <GsmLogo />
        </S.ImgHeightBox>
      </S.MainInfoContianer>
    </S.Contianer>
  );
};

export default Theme3;
