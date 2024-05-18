import * as S from './style';
import { ConvertPage, FormPage, PhotoPage } from '@/pageContainers';
import { useState } from 'react';
import { Flow, SelectedType } from '@/types';
import { Header } from '@/components';

const MainPage = () => {
  const [flow, setFlow] = useState<Flow>(Flow.PHOTO_FLOW);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [selectedButton, setSelectedButton] = useState<SelectedType | null>(
    null
  );
  const [convertedImageUrl, setConvertedImageUrl] = useState<string | null>(
    null
  );

  return (
    <S.Wrapper>
      <Header />
      {flow === Flow.PHOTO_FLOW && (
        <PhotoPage setImageUrl={setImageUrl} setFlow={setFlow} />
      )}
      {flow === Flow.CONVERT_PHOTO_FLOW && (
        <ConvertPage
          imageUrl={imageUrl}
          setFlow={setFlow}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          convertedImageUrl={convertedImageUrl}
          setConvertedImageUrl={setConvertedImageUrl}
        />
      )}
      {flow === Flow.FORM_FLOW && <FormPage setFlow={setFlow} />}
    </S.Wrapper>
  );
};

export default MainPage;
