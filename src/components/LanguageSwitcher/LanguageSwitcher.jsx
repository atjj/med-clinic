import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import styles from './LanguageSwitcher.module.scss';
import lang from '../../assets/icons/lang.svg';
import { locales } from "../../i18n.js";
import DropDownButton from "../../UI/DropDownBtn/Button.jsx";
import DropDownMenu from '../../UI/DropDownMenu/Menu.jsx';

const LanguageSwitcher = () => {
    const [isOpen, setOpen] = useState(false);
    const { i18n } = useTranslation();
    const menuRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, []);

    const toggleLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setOpen(!isOpen);
    };

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <div className={styles.lang} ref={menuRef}>
            <DropDownButton toggleMenu={toggleMenu} icon={lang} />
            <DropDownMenu 
                obj={locales} 
                toggle={toggleLanguage} 
                isOpen={isOpen} 
            />
        </div>
    );
};

export default LanguageSwitcher;