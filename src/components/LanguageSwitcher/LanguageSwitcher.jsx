import { useTranslation } from "react-i18next";

import styles from './LanguageSwitcher.module.scss';

import lang from '../../assets/icons/lang.svg';

import { locales } from "../../i18n.js";

import {useEffect, useRef, useState } from "react";

import DropDownButton from "../../UI/DropDownBtn/Button.jsx";
import DropDownMenu from '../../UI/DropDownMenu/Menu.jsx';
const LanguageSwitcher = () => {

    const [isOpen,setOpen] = useState(false);
    const {i18n} = useTranslation();

    let menuRef = useRef();

    useEffect(()=>{
        let handler = (e) =>{
            if(e.target && menuRef !== null && !menuRef.current.contains(e.target)){
                setOpen(false);
            }
        };

        document.addEventListener('mousedown',handler);
    },[])



    const toggleLanguage = (lang) =>{
        i18n.changeLanguage(lang)
        setOpen(!isOpen)
        
    }


    const toggleMenu = () => {setOpen(!isOpen)}


    

    return (
        <div className= {styles.lang} ref = {menuRef}>
            <DropDownButton toggleMenu={toggleMenu} icon = {lang}/>

            <DropDownMenu 
                obj = {locales} 
                toggle = {toggleLanguage} 
                isOpen = {isOpen}
                />
        </div>
    )
}


export default LanguageSwitcher;