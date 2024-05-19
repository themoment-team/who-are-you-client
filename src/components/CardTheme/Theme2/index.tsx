import * as S from './style';
import * as T from '../style';

interface Props {
  name: string;
  major?: string;
  phoneNumber: string;
  email: string;
  mbti: string;
  sns: string;
  imageUrl: string;
}

const Theme2: React.FC<Props> = ({
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
      <S.ImgContinaer>
        <S.ImgBox src={imageUrl} />
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
