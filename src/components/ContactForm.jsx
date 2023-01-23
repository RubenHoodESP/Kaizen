import { useTranslation } from 'react-i18next';
import './ContactForm.css'
import linkedin from '../assets/logos/linkedin.svg'
import github from '../assets/logos/github.svg'
import { send } from "@emailjs/browser";
import { useState } from 'react';

export const ContactForm = () => {

  const { t } = useTranslation();
  const [toSend, setToSend] = useState({
    user_name: '',
    message: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_0wjl2fo',
      'template_poazasy',
      toSend,
      'bXHhrEIS--lP_1jn8'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    })
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value})
  }

  return (
    <>
      <form onSubmit={onSubmit} className="w-full max-w-sm m-4 p-10 border">
        <div className="flex flex-col items-center">
          <input className="appearance-none bg-transparent font-light font-roboto border-b mb-5 py-3 w-full text-white
          leading-tight focus:outline-none" type="text" name='user_name' placeholder={t("ContactPage.Email")} value={toSend.user_name} onChange={handleChange} aria-label="E-mail" />
          <textarea className='font-light font-roboto bg-transparent border-b mb-5 py-3 w-full h-28 max-h-48 text-white
          leading-tight focus:outline-none' type="textarea" name='message' placeholder={t("ContactPage.Message")} value={toSend.message} onChange={handleChange} aria-label='Message' />
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
