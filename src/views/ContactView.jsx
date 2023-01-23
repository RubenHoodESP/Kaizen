import { ParallaxBanner } from "react-scroll-parallax"
import { PageLayout } from "../layout"
import background from '../assets/Background-4.svg'
import { ContactForm } from "../components"
import { useTranslation } from 'react-i18next';
import { useInView } from "react-hook-inview";
import { Modal } from '../components'

export const ContactView = () => {

  const options = {
    unobserveOnEnter: true,
    threshold: 0.5,
  }
  const [ref, inView] = useInView(options);
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
                speed: -30
              }
              ]}
              className="h-screen"
            >
              <div ref={ref} className={"mx-5 absolute inset-0 flex flex-col items-center justify-center opacity-0 " + (inView ? 'motion-safe:animate-fadeIn' : '')}>
                <p className="text-6xl text-white font-roboto-condensed font-thin mb-5">{t('Contact')}</p>
                <ContactForm />
              </div>
            <Modal />
            </ParallaxBanner>
          </PageLayout>
      </div>
    )
  } else {
    return (
      <div id="contact" className="h-screen flex bg-secondary">
        <div ref={ref} className={"mx-5 h-screen w-screen flex flex-col items-center justify-center opacity-0 " + (inView ? 'motion-safe:animate-fadeIn' : '')}>
          <p className="text-6xl text-white font-roboto-condensed mb-5">{t('Contact')}</p>
          <ContactForm />
        </div>
        <Modal />
      </div>
    )
  }
}
