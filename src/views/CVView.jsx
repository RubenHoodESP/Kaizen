import { ParallaxBanner } from "react-scroll-parallax"
import { PageLayout } from "../layout"
import background from '../assets/Background-3.svg'

export const CVView = () => {
  return (
    <div id="cv" className="">
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
              <p className="text-6xl text-white font-thin">Resume</p>
            </div>
          </ParallaxBanner>
        </PageLayout>
    </div>
  )
}
