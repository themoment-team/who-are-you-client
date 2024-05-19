import * as S from './style';
import * as T from '../style';

interface Props {
  name: string;
  major?: string;
  phoneNumber: string;
  email: string;
  mbti?: string;
  sns: string;
  imageUrl: string;
}

const Theme1: React.FC<Props> = ({
  name,
  major,
  phoneNumber,
  email,
  mbti,
  sns,
  imageUrl,
}) => {
  return (
    <S.Contianer>
      <S.MainInfoContianer>
        <T.MainInfoBox>
          <T.UserName>{name}</T.UserName>
          <T.UserMajor>{major}</T.UserMajor>
        </T.MainInfoBox>
        <S.ImgContinaer src={imageUrl} />
      </S.MainInfoContianer>

      <T.UserInfoBox>
        <T.UserInfoText>Tel) {phoneNumber}</T.UserInfoText>
        <T.UserInfoText>Email) {email}</T.UserInfoText>
        {mbti && <T.UserInfoText>MBTI) {mbti}</T.UserInfoText>}
        <T.UserInfoText>Insta) {sns}</T.UserInfoText>
      </T.UserInfoBox>
    </S.Contianer>
  );
};

export default Theme1;
