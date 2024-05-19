import * as S from './style';
import * as T from '../style';

interface Props {
  name: string;
  phoneNumber: string;
  email: string;
  mbti: string;
  sns: string;
  imageUrl: string;
}

const Theme3: React.FC<Props> = ({
  name,
  phoneNumber,
  email,
  mbti,
  sns,
  imageUrl,
}) => {
  return (
    <S.Contianer>
      <S.MainInfoContianer>
        <S.PuppleContainer>
          <S.PurpleBar />
          <T.MainInfoBox>
            <T.UserName>{name}</T.UserName>
            <T.UserInfoBox>
              <T.UserInfoText>Tel) {phoneNumber}</T.UserInfoText>
              <T.UserInfoText>Email) {email}</T.UserInfoText>
              {mbti && <T.UserInfoText>MBTI) {mbti}</T.UserInfoText>}
              <T.UserInfoText>Insta) {sns}</T.UserInfoText>
            </T.UserInfoBox>
          </T.MainInfoBox>
        </S.PuppleContainer>

        <S.ImgHeightBox>
          <S.ImgContinaer src={imageUrl} />
        </S.ImgHeightBox>
      </S.MainInfoContianer>
    </S.Contianer>
  );
};

export default Theme3;
