import { Header } from '@/components';
import * as S from './style';
import { PhotoPage } from '@/pageContainers';
import { useState } from 'react';
import { Flow } from '@/types';

const MainPage = () => {
  const [flow, setFlow] = useState<Flow>(Flow.FORM_FLOW);
  const [Image, setImage] = useState<File | null>(null);

  return (
    <S.Container>
      <Header />
      {flow === Flow.PHOTO_FLOW && (
        <PhotoPage setImage={setImage} setFlow={setFlow} />
      )}
    </S.Container>
  );
};

export default MainPage;
