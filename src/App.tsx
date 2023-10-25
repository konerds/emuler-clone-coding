import tw from 'tailwind-styled-components';

import CmpLayoutFooter from './components/footer/CmpLayoutFooter';
import CmpLayoutHeader from './components/header/CmpLayoutHeader';
import CmpLayoutMain from './components/main/CmpLayoutMain';
import ImgBgGrainLatest from './assets/image/img-bg-grain-latest.png';
import CmpContainerCTAFixed from './components/fixed/CmpContainerFixedCTA';

const DivApp = tw.div`
${(_) => (process.env.NODE_ENV !== 'production' ? 'debug-screens' : '')}
bg-inherit
`;

const MainWrapperPage = tw.main`
overflow-hidden [transform:translate(0px,0px)]
`;

const App = () => {
  return (
    <DivApp
      style={{
        backgroundImage: `url(${ImgBgGrainLatest})`,
      }}
    >
      <CmpContainerCTAFixed />
      <MainWrapperPage>
        <CmpLayoutHeader />
        <CmpLayoutMain />
        <CmpLayoutFooter />
      </MainWrapperPage>
    </DivApp>
  );
};

export default App;
