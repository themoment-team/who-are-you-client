import * as S from './style';
import * as T from '../style';

const LINE_IMG_PATH = '/image/LineImg.png' as const;

interface Props {
  name: string;
  imageUrl: string;
  phoneNumber?: string;
  email?: string;
  major?: string;
}

const Theme2: React.FC<Props> = ({
  name,
  major,
  phoneNumber,
  email,
  imageUrl,
}) => {
  const userInfo = [
    { label: 'Tel', value: phoneNumber },
    { label: 'Email', value: email },
  ].filter((info) => info.value);

  return (
    <S.Contianer>
      <S.ImgContinaer>
        <S.ImageWrapper>
          <S.ImgBox src={imageUrl} />
        </S.ImageWrapper>
      </S.ImgContinaer>

      <S.UserContianer>
        <T.MainInfoBox>
          <T.UserName>{name}</T.UserName>
          <T.UserMajor>{major}</T.UserMajor>
          <S.LineImage src={LINE_IMG_PATH} />
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
