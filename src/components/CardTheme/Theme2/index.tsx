import * as S from './style';
import * as T from '../style';

const GSM_LOGO_PATH = '/image/GSMLogo.png' as const;

interface Props {
  name: string;
  phoneNumber: string;
  email: string;
  instagram: string;
  imageUrl: string;
  major?: string;
  mbti?: string;
}

const Theme2: React.FC<Props> = ({
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
      <S.ImgContinaer>
        <S.ImageWrapper>
          <S.ImgBox src={imageUrl} />
          <S.LogoImage src={GSM_LOGO_PATH}/>
        </S.ImageWrapper>
      </S.ImgContinaer>

      <S.UserContianer>
        <T.MainInfoBox>
          <T.UserName>{name}</T.UserName>
          <T.UserMajor>{major}</T.UserMajor>
        </T.MainInfoBox>

        <T.UserInfoBox>
          {userInfo.map((info, index) => (
            <T.UserInfoText key={index}>
              {info.label}) {info.value}
            </T.UserInfoText>
          ))}
        </T.UserInfoBox>
      </S.UserContianer>
    </S.Contianer>
  );
};

export default Theme2;
