import { ParallaxBanner } from "react-scroll-parallax"
import { PageLayout } from "../layout"
import background from '../assets/Background-2.svg'
import { Carousel } from "../components"
import './index.css';
import { useTranslation } from 'react-i18next';
import { useInView } from "react-hook-inview";


export const PortfolioView = () => {

  const options = {
    unobserveOnEnter: true,
    threshold: 0.1,
  }
  const [ref, inView] = useInView(options);
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
              speed: -30
            }
            ]}
            className="h-screen"
          >
            <div ref={ref} className={"absolute mx-5 inset-0 flex flex-col items-center justify-center " + (inView ? 'motion-safe:animate-fadeIn' : '')}>
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
      <div id="portfolio" className="h-screen-50 flex bg-secondary">
        <div ref={ref} className={"absolute h-screen-50 mx-5 flex flex-col items-center justify-center " + (inView ? 'motion-safe:animate-fadeIn' : '')}>
          <p className="text-6xl text-white font-roboto-condensed mb-8">{t('Portfolio')}</p>
          <div className="container max-w-6xl">
            <Carousel />
          </div>
        </div>
      </div>
    )
  }
}
