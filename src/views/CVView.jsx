import { ParallaxBanner } from "react-scroll-parallax"
import { PageLayout } from "../layout"
import background from '../assets/Background-3.svg'
import './index.css';
import { useTranslation } from 'react-i18next';

export const CVView = () => {

  const { t } = useTranslation();
  let width = window.innerWidth;

  if (width > '640') {
    return (
      <div id="cv">
        <PageLayout>
          <ParallaxBanner
            layers={[
            {
              image: background,
              speed: -20
            }
            ]}
            className="h-screen"
          >
            <div className="mx-5 absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-6xl text-white font-thin">{t('Resume')}</p>
            </div>
          </ParallaxBanner>
        </PageLayout>
      </div>
    )
  } else {
    return (
      <div id="cv" className="h-screen flex bg-primary">
        <div className="mx-5 h-screen w-screen flex flex-col items-center justify-center">
          <p className="text-6xl text-white font-thin">{t('Resume')}</p>
        </div>
      </div>
    )
  }
}
