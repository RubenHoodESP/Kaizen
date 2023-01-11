import { useTranslation } from 'react-i18next';
import './ContactForm.css'
import linkedin from '../assets/logos/linkedin.svg'
import github from '../assets/logos/github.svg'

export const ContactForm = () => {

  const { t } = useTranslation();

  return (
    <>
      <form className="w-full max-w-sm m-4 p-10 border">
        <div className="flex flex-col items-center">
          <input className="appearance-none bg-transparent font-light font-roboto border-b mb-5 py-3 w-full text-white
          leading-tight focus:outline-none" type="text" placeholder={t("ContactPage.Email")} aria-label="E-mail" />
          <textarea className='font-light font-roboto bg-transparent border-b mb-5 py-3 w-full h-28 max-h-48 text-white
          leading-tight focus:outline-none' type="textarea" placeholder={t("ContactPage.Message")} aria-label='Message' />
          <button className='flex-shrink-0 bg-transparent font-light font-roboto text-white border-b border-t w-20 py-2' type='submit'>{t("ContactPage.Send")}</button>
        </div>
      </form>
      <div className="mt-10 flex flex-row justify-around max-w-sm w-full">
        <div className="col">
          <a href="https://www.linkedin.com/in/rubengarciakaizen/" target="_blank" rel="noopener noreferrer">
            <img src={ linkedin } alt="LinkedIn" />
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/RubenHoodESP" target="_blank" rel="noopener noreferrer">
            <img src={ github } alt="Github" />
          </a>
        </div>
      </div>
    </>
  )
}
