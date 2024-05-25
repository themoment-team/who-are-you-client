import * as S from './style';
import * as T from '../style';

interface Props {
  name: string;
  instagram: string;
  imageUrl: string;
  phoneNumber?: string;
  email?: string;
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
        </S.ImgHeightBox>
      </S.MainInfoContianer>
    </S.Contianer>
  );
};

export default Theme3;
