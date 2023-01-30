import { ParallaxLayout } from "../layout"
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

  return (
    <ParallaxLayout>
      <div className='layer'/>
      <div ref={ref} className={"mx-5 mt-32 md:mt-auto h-screen flex flex-col items-center md:justify-center"}>
        <p className={"text-6xl text-white font-roboto-condensed font-thin mb-5 opacity-0 " + (inView ? 'motion-safe:animate-fadeIn' : '')}>{t('Contact')}</p>
        <ContactForm />
      </div>
      <Modal />
    </ParallaxLayout>
  )
}
