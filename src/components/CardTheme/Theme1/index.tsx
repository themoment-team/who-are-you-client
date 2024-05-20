import * as S from './style';
import * as T from '../style';

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
        <S.ImgContinaer src={imageUrl} />
      </S.MainInfoContianer>
    </S.Contianer>
  );
};

export default Theme1;
