import {
  memo,
  useState,
  Fragment,
  createElement,
  useLayoutEffect,
} from 'react';

import { tw } from '../../utils';
import { customRP } from '../../utils';
import ImgBgGrainLatest from '../../assets/image/img-bg-grain-latest.png';
import CmpElContentPrivacyPolicy from './CmpElContentPrivacyPolicy';
import { IObjPrivacyPolicy } from '../../interface';
import { getListObjPrivacyPolicy } from '../../api';

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImgBgGrainLatest})`,
});
const SectionWrapper = tw.section`
relative bg-[size:300px_300px] bg-[position:0px_0px] pb-[120px] pt-[160px] max-desktop:pb-[104px] max-desktop:pt-[120px] max-tablet:pb-[64px]
`;

const DivContainer = tw.div`
felx relative z-[2] mx-auto w-[90%] max-w-[920px] flex-col items-center justify-center
`;

const H1Title = tw.h1`
mb-[80px] text-center max-desktop:mb-[64px] max-desktop:text-[64px] max-desktop:leading-[72px] max-tablet:mb-[48px] max-tablet:text-[48px] max-tablet:leading-[56px] max-mobile-landscape:text-[40px] max-mobile-landscape:leading-[48px]
`;

const DivWrapperContent = tw.div`
max-w-[800px]
`;

const ParagraphContent = tw.p`
`;

const H5Content = tw.h5`
`;

const CmpLayoutPrivacyPolicy = () => {
  const [listObjPrivacyPolicy, setListObjPrivacyPolicy] = useState<
    IObjPrivacyPolicy[]
  >([]);
  useLayoutEffect(() => {
    getListObjPrivacyPolicy().then((dataListObjPrivacyPolicy) => {
      if (dataListObjPrivacyPolicy) {
        setListObjPrivacyPolicy(dataListObjPrivacyPolicy);
      }
    });
  }, []);
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <DivContainer>
        <H1Title>Privacy Policy</H1Title>
        <DivWrapperContent>
          {listObjPrivacyPolicy.map((objPrivayPolicy, idxObjPrivacyPolicy) => {
            return (
              <Fragment key={idxObjPrivacyPolicy}>
                {createElement(
                  objPrivayPolicy.type === 'heading'
                    ? H5Content
                    : ParagraphContent,
                  {
                    children: (
                      <>
                        {objPrivayPolicy.content.map((content, idxContent) => {
                          return (
                            <CmpElContentPrivacyPolicy
                              key={idxContent}
                              content={content}
                            />
                          );
                        })}
                      </>
                    ),
                  },
                )}
              </Fragment>
            );
          })}
        </DivWrapperContent>
      </DivContainer>
    </SectionWrapper>
  );
};

export default memo(CmpLayoutPrivacyPolicy);
