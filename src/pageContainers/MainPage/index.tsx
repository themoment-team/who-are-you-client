import { Header } from '@/components';
import * as S from './style';
import { ConvertPage, PhotoPage } from '@/pageContainers';
import { useState } from 'react';
import { Flow } from '@/types';

const MainPage = () => {
  const [flow, setFlow] = useState<Flow>(Flow.PHOTO_FLOW);
  const [image, setImage] = useState<string>('');

  return (
    <S.Container>
      <Header />
      {flow === Flow.PHOTO_FLOW && (
        <PhotoPage setImage={setImage} setFlow={setFlow} />
      )}
      {flow === Flow.CONVERT_PHOTO_FLOW && (
        <ConvertPage image={image} setFlow={setFlow} />
      )}
    </S.Container>
  );
};

export default MainPage;
