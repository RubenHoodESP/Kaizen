import './ContactForm.css'

export const ContactForm = () => {
  return (
    <form className="w-full max-w-sm m-4 p-10 border">
      <div className="flex flex-col items-center">
        <input className="appearance-none bg-transparent border-b mb-5 py-3 w-full text-white
        leading-tight focus:outline-none" type="text" placeholder="Your email" aria-label="E-mail" />
        <input className='bg-transparent border-b mb-5 py-3 w-full text-white
        leading-tight focus:outline-none' type="textarea" placeholder="Your message" aria-label='Message' />
        <button className='flex-shrink-0 bg-transparent font-thin text-white border-b border-t w-20 py-2' type='submit'>Send</button>
      </div>
    </form>
  )
}
