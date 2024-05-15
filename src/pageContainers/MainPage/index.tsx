import * as S from './style';
import { PhotoPage, FormPage, SelectPage } from '@/pageContainers';
import { useState } from 'react';
import { Flow } from '@/types';

import { Header } from '@/components';

const MainPage = () => {
  const [flow, setFlow] = useState<Flow>(Flow.FORM_FLOW);
  const [Image, setImage] = useState<File | null>(null);

  return (
    <S.Wrapper>
      <div>
        <Header />
        {/* {flow === Flow.PHOTO_FLOW && (
          <PhotoPage setImage={setImage} setFlow={setFlow} />
        )}
        {flow === Flow.FORM_FLOW && <FormPage setFlow={setFlow} />} */}
        <SelectPage />
      </div>
    </S.Wrapper>
  );
};

export default MainPage;
