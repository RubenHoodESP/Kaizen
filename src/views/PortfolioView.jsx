import { ParallaxBanner } from "react-scroll-parallax"
import { PageLayout } from "../layout"
import background from '../assets/Background-2.svg'
import { Carousel } from "../components"
import './index.css';

export const PortfolioView = () => {
  return (
    <div id="portfolio" className="">
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
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-6xl text-white font-thin mb-8">Portfolio</p>
              <div className="container max-w-6xl">
                <Carousel />
              </div>
            </div>
          </ParallaxBanner>
        </PageLayout>
    </div>
  )
}
