import { Header } from '@/components';
import * as S from './style';
import { ConvertPage, PhotoPage } from '@/pageContainers';
import { useState } from 'react';
import { Flow, SelectedType } from '@/types';

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
    <S.Container>
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
    </S.Container>
  );
};

export default MainPage;
