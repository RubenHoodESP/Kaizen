import { ParallaxBanner } from "react-scroll-parallax"
import { PageLayout } from "../layout"
import background from '../assets/Background-2.svg'
import { Carousel } from "../components"
import './index.css';
import { useTranslation } from 'react-i18next';

export const PortfolioView = () => {

  const { t } = useTranslation();
  let width = window.innerWidth;

  if (width > '640') {
    return (
      <div id="portfolio">
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
            <div className="absolute mx-5 inset-0 flex flex-col items-center justify-center">
              <p className="text-6xl text-white font-roboto-condensed mb-8">{t('Portfolio')}</p>
              <div className="container max-w-6xl">
                <Carousel />
              </div>
            </div>
          </ParallaxBanner>
        </PageLayout>
      </div>
    )
  } else {
    return (
      <div id="portfolio" className="h-screen flex bg-secondary">
        <div className="absolute h-screen mx-5 flex flex-col items-center justify-center">
          <p className="text-6xl text-white font-roboto-condensed mb-8">{t('Portfolio')}</p>
          <div className="container max-w-6xl">
            <Carousel />
          </div>
        </div>
      </div>
    )
  }
}
