import { useState } from "react";
import { useTranslation } from 'react-i18next';
import './NavBar.css'
import logo from '../assets/logos/KaizenLogo.svg'

export const NavBar = () => {

    const [show, setShow] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setShow(!show);
    }

    return (
        <nav id="navbar" className="fixed top-0 left-0 right-0 bg-transparent z-10">
            <div className="flex items-center justify-between flex-wrap px-5">
                <img id="logo_navbar" src={ logo } alt="logo" />
                <button id="navbar_button" onClick={onToggle} type="button" className="inline-flex items-center mx-3 p-2 ml-3 text-sm text-gray-900 rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-gray-100" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div id="navbar-default" className={`${show ? 'show_navbar' : ''} hide w-full md:w-auto md:block md:auto md:h-auto`}>
                    <ul className="flex flex-col justify-end p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-light md:border-0">
                        <li id="nav_item-1" className="nav-item">
                            <a href="#intro" className="font-roboto-condensed text-lg block py-2 pr-4 text-white font-light md:bg-transparent md:text-white md:p-0" aria-current="page">Intro</a>
                        </li>
                        <li id="nav_item-2" className="nav-item">
                            <a href="#portfolio" className="font-roboto-condensed text-lg block py-2 pr-4 text-white font-light md:bg-transparent md:text-white md:p-0" aria-current="page">Portfolio</a>
                        </li>
                        <li id="nav_item-3" className="nav-item">
                            <a href="#cv" className="font-roboto-condensed text-lg block py-2 pr-4 text-white font-light md:bg-transparent md:text-white md:p-0" aria-current="page">{t('Resume.title')}</a>
                        </li>
                        <li id="nav_item-4" className="nav-item">
                            <a href="#contact" className="font-roboto-condensed text-lg block py-2 pr-4 text-white font-light md:bg-transparent md:text-white md:p-0" aria-current="page">{t('Contact')}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
