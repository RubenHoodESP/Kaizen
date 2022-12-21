import { ParallaxBanner } from "react-scroll-parallax"
import { PageLayout } from "../layout"
import background from '../assets/Background-4.svg'
import { ContactForm } from "../components"

export const ContactView = () => {
  return (
    <div id="contact" className="">
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
              <p className="text-6xl text-white font-thin mb-5">Contact</p>
              <ContactForm />
            </div>
          </ParallaxBanner>
        </PageLayout>
    </div>
  )
}
