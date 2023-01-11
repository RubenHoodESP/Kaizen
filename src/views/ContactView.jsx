import { ParallaxBanner } from "react-scroll-parallax"
import { PageLayout } from "../layout"
import background from '../assets/Background-4.svg'
import { ContactForm } from "../components"
import { useTranslation } from 'react-i18next';

export const ContactView = () => {

  const { t } = useTranslation();
  let width = window.innerWidth;

  if (width > '640') {
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
              <div className="mx-5 absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-6xl text-white font-thin mb-5">{t('Contact')}</p>
                <ContactForm />
              </div>
            </ParallaxBanner>
          </PageLayout>
      </div>
    )
  } else {
    return (
      <div id="contact" className="h-screen flex bg-secondary">
        <div className="mx-5 h-screen w-screen flex flex-col items-center justify-center">
          <p className="text-6xl text-white font-roboto-condensed mb-5">{t('Contact')}</p>
          <ContactForm />
        </div>
      </div>
    )
  }
}
