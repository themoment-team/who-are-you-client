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
  const userInfo = [
    { label: 'Tel', value: phoneNumber },
    { label: 'Email', value: email },
    { label: 'MBTI', value: mbti },
    { label: 'Insta', value: sns },
  ].filter((info) => info.value);

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
        {userInfo.map((info, index) => (
          <T.UserInfoText key={index}>
            {info.label}) {info.value}
          </T.UserInfoText>
        ))}
      </T.UserInfoBox>
    </S.Contianer>
  );
};

export default Theme1;
