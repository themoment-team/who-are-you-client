import * as S from './style';
import * as T from '../style';

const GSM_LOGO_PATH = '/image/GSMLogo.png' as const;

interface Props {
  name: string;
  imageUrl: string;
  phoneNumber?: string;
  major?: string;
  email?: string;
}

const Theme3: React.FC<Props> = ({
  name,
  phoneNumber,
  email,
  imageUrl,
  major,
}) => {
  const userInfo = [
    { label: 'Major', value: major },
    { label: 'Tel', value: phoneNumber },
    { label: 'Email', value: email },
  ].filter((info) => info.value);

  return (
    <S.Contianer>
      <S.MainInfoContianer>
        <S.BarContainer>
          <S.Bar />
          <T.MainInfoBox>
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
          </T.MainInfoBox>
        </S.BarContainer>

        <S.ImgHeightBox>
          <S.ImageWrapper>
            <S.ImgContinaer src={imageUrl} />
            <S.LogoImage src={GSM_LOGO_PATH} />
          </S.ImageWrapper>
        </S.ImgHeightBox>
      </S.MainInfoContianer>
    </S.Contianer>
  );
};

export default Theme3;
