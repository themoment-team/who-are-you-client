import * as S from './style';
import * as T from '../style';

interface Props {
  name: string;
  major?: string;
  phoneNumber: string;
  email: string;
  mbti: string;
  sns: string;
}

const Theme2: React.FC<Props> = ({
  name,
  major,
  phoneNumber,
  email,
  mbti,
  sns,
}) => {
  return (
    <S.Contianer>
      <S.ImgContinaer>Img</S.ImgContinaer>

      <S.UserContianer>
        <T.MainInfoBox>
          <T.UserName>{name}</T.UserName>
          <T.UserMajor>{major}</T.UserMajor>
        </T.MainInfoBox>

        <T.UserInfoBox>
          <T.UserInfoText>Tel) {phoneNumber}</T.UserInfoText>
          <T.UserInfoText>Email) {email}</T.UserInfoText>
          <T.UserInfoText>MBTI) {mbti}</T.UserInfoText>
          <T.UserInfoText>Insta) {sns}</T.UserInfoText>
        </T.UserInfoBox>
      </S.UserContianer>
    </S.Contianer>
  );
};

export default Theme2;
