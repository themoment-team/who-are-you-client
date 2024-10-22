import * as S from './style';
import * as T from '../style';

const GSM_LOGO_PATH = '/image/GSMLogo.png' as const;
const LINE_IMG_PATH = '/image/LineImg.png' as const;

interface Props {
  name: string;
  imageUrl: string;
  phoneNumber?: string;
  email?: string;
  major?: string;
}

const Theme1: React.FC<Props> = ({
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
    <S.Contianer>
      <S.MainInfoContianer>
        <T.MainInfoBox>
          <T.UserName>{name}</T.UserName>
          <T.UserMajor>{major}</T.UserMajor>
          <S.LineImage src={LINE_IMG_PATH} />
          <S.MarginBox>
            <T.UserInfoBox>
              {userInfo.map((info, index) => (
                <T.UserInfoText key={index}>
                  {info.label}) {info.value}
                </T.UserInfoText>
              ))}
            </T.UserInfoBox>
          </S.MarginBox>
        </T.MainInfoBox>
        <S.ImageWrapper>
          <S.ImgContinaer src={imageUrl} />
          <S.LogoImage src={GSM_LOGO_PATH} />
        </S.ImageWrapper>
      </S.MainInfoContianer>
    </S.Contianer>
  );
};

export default Theme1;
