import Button from '../../UI/Button/Button.jsx';

import google from '../../assets/icons/google.svg';

import styles from './SignUp.module.scss';
import { useNavigate } from 'react-router-dom';
import { fetchAuthData } from '../../services/network.js';
import { useState,useRef, useEffect } from 'react';
import { USER_REGEX,PWD_REGEX,EMAIL_REGEX,PHONE_REGEX } from '../../utils/regex.js';
import { Link } from 'react-router-dom';

import hide from '../../assets/icons/hide_icon_183794.svg';
import show from '../../assets/icons/show_eye_icon_183818.svg';
import useAuth from '../../hooks/useAuth.jsx';

import Loading from '../../components/Loading/Loading.jsx';


const SignUp = () => {

    const userRef = useRef();
    const errRef = useRef();

    const {setSignUpConfirm} = useAuth();
   

    const navigate = useNavigate();

    const [visiblePwd,setVisiblePwd] = useState(false);
    const [visibleMatch,setVisibleMatch] = useState(false);


    const [input,setInput] = useState({
        name: "",
        surName: "",
        telNumber: "",
        email: "",
        password: "",
        birthDate: ""
    });

    const [validInput,setValidInput] = useState({
        validName: false,
        validSurName: false,
        validTelNumber: false,
        validEmail: false,
        validPassword: false
    })

    const [focus,setFocus] = useState({
        nameFocus: false,
        surnameFocus: false,
        telnumberFocus: false,
        emailFocus: false,
        pwdFocus:false,  
    })

    const [matchPassword,setMatch] = useState('');
    const [validMatch,setValidMatch] = useState(false);
    const [matchFocus,setMatchFocus] = useState(false);


    const [errMsg,setErrorMsg] = useState('');

    const [isLoading,setLoading] = useState(false);
  
    
    
    useEffect(() =>{
        userRef.current.focus();
    },[])

    useEffect(() => {
        const result = USER_REGEX.test(input.name);
        setValidInput(prev => ({
            ...prev,
            validName: result
        }));        
    },[input.name])

    useEffect(() => {
        const result = USER_REGEX.test(input.surName);
        setValidInput(prev => ({
            ...prev,
            validSurName: result
        }));        
    },[input.surName])

    useEffect(() => {
        const result = EMAIL_REGEX.test(input.email);
        setValidInput(prev => ({
            ...prev,
            validEmail: result
        }));        
    },[input.email])


    useEffect(() => {
        const result = PHONE_REGEX.test(input.telNumber);
        setValidInput(prev => ({
            ...prev,
            validTelNumber: result
        }))
    },[input.telNumber])

    useEffect(() =>{
        const result = PWD_REGEX.test(input.password);
        setValidInput(prev => ({
            ...prev,
            validPassword: result
        }));   

        const match = input.password === matchPassword;
        setValidMatch(match);
    },[input.password,matchPassword])


    useEffect(() =>{
        setErrorMsg('')
    },[input.name,input.surName,input.password,matchPassword,input.telNumber,input.email])



    const handleInput = (e) => {

        const {name,value} = e.target;
        setInput((prev) => ({
            ...prev,
            [name]:value,
        }));


    }

    console.log(input)

    const handleSubmit = async (e) => {
        e.preventDefault();

       
        
        setLoading(true);
        const res = await fetchAuthData(input,'sign-up');


        console.log(res);

        if(res.ok == false || !res) {
            setErrorMsg(res.errText);

            setLoading(false);

            return;
        } else {
            console.log("confirm",res);

            setLoading(false);

            setSignUpConfirm({...res});


            setInput({
                name: "",
                surName: "",
                telNumber: "",
                email: "",
                password: "",
            })

            navigate('/signupconfirm');
            
        }
    };



    return (

        <div className = {styles.wrapper}>


            <form  onSubmit={handleSubmit} className= {styles.signUp}>

                <p 
                ref = {errRef} 
                aria-live = "assertive"
                className = {errMsg ? `${styles.errMsgPanel}`: ``}
                >
                    {errMsg}
                </p>

                <h1 className= {styles.header}>РЕГИСТРАЦИЯ</h1>

                <input 
                    className= {styles.input}  
                    type="text" 
                    placeholder="Имя"
                    ref = {userRef}
                    autoComplete = 'off'
                    name = 'name'
                    aria-invalid = {validInput.validName ? 'false' : 'true'}
                    aria-describedby = 'name'
                    onFocus={() => setFocus(prev => ({ ...prev, nameFocus:true }))}
                    onBlur={() => setFocus(prev => ({...prev,nameFocus: false}))}
                    onChange = {handleInput}
                    required
                    />
                    <p id='name' className= {`${focus.nameFocus && input.name && !validInput.validName ? styles.instructions :styles.offscreen}`}>
                        Имя может содержать только буквы. <br/>
                        Имя не должно начинаться с цифры. <br/>
                    </p>

                <input 
                    className= {styles.input}  
                    type="text" 
                    placeholder="Фамилия"     
                    autoComplete = 'off'
                    name = 'surName'
                    aria-invalid = {validInput.validSurName ? 'false' : 'true'}
                    aria-describedby = 'surName'
                    onFocus={() => setFocus(prev => ({ ...prev, surnameFocus:true }))}
                    onBlur={() => setFocus(prev => ({...prev,surnameFocus: false}))}
                    onChange = {handleInput}
                    required
                    />

                    <p id='surName' className= {`${focus.surnameFocus && input.surName && !validInput.validSurName ? styles.instructions :styles.offscreen}`}>
                        Фамилия может содержать только буквы. <br/>
                        Фамилия не должно начинаться с цифры. <br/>
                    </p>



                <input 
                    className= {styles.input}  
                    type="tel" 
                    placeholder="+996 (_ _ _) _ _ _ _ _ _"
                    name = "telNumber"
                    onChange = {handleInput}
                    aria-invalid = {validInput.validTelNumber ? 'false' : 'true'}
                    aria-describedby = 'tel'
                    onFocus={() => setFocus(prev => ({ ...prev, telnumberFocus:true }))}
                    onBlur={() => setFocus(prev => ({...prev,telnumberFocus: false}))}
                    required
                    />
                <p id='tel' className= {`${focus.telnumberFocus && input.telNumber && !validInput.validTelNumber ? styles.instructions :styles.offscreen}`}>
                    Номер телефона должен начинаться с +996, состоять из 13 символов и быть действительным!
                </p>

                <input 
                    className= {styles.input}  
                    type="email" 
                    placeholder="Email"
                    name = "email"
                    onChange = {handleInput}
                    aria-invalid = {validInput.validEmail ? 'false' : 'true'}
                    aria-describedby = 'email'
                    onFocus={() => setFocus(prev => ({ ...prev, emailFocus:true }))}
                    onBlur={() => setFocus(prev => ({...prev,emailFocus: false}))}
                    required
                    />
                    <p id='email' className= {`${focus.emailFocus && input.email && !validInput.validEmail ? styles.instructions :styles.offscreen}`}>
                        Адрес электронной почты должен иметь формат example@gmail.com.
                    </p>


                    <div className= {styles.inputWrapper}>
                        <input 
                            className= {styles.pwdInput}  
                            type = {visiblePwd ? 'text' : 'password'} 
                            placeholder="Введите пароль"
                            name = "password"
                            onChange = {handleInput}
                            aria-invalid = {validInput.validPassword ? 'false' : 'true'}
                            aria-describedby = 'password'
                            onFocus={() => setFocus(prev => ({ ...prev, pwdFocus:true }))}
                            onBlur={() => setFocus(prev => ({...prev,pwdFocus: false}))}
                            required
                            />
                        <label 
                            className = {styles.visiblePwdIcon}
                            onClick = {() => { setVisiblePwd(!visiblePwd) }}
                            ><img src = {visiblePwd ? hide : show}/></label>
                        
                    </div>

                    <p id='password' className= {`${focus.pwdFocus && input.password && !validInput.validPassword ? styles.instructions :styles.offscreen}`}>
                        Длина пароля должна быть не менее 8 символов <br/> 
                        Пароль должен содержать как минимум одну прописную букву и одну цифру<br/>
                    </p>


                <div className= {styles.inputWrapper}>
                    <input 
                        className= {styles.pwdInput}  
                        type = {visibleMatch ? 'text' : 'password'} 
                        placeholder="Повторите пароль"
                        name = "password"
                        onChange = {(e) => setMatch(e.target.value)}
                        aria-invalid = {validMatch ? 'false' : 'true'}
                        aria-describedby = 'confirm'
                        onFocus = {() => setMatchFocus(true)}
                        onBlur = {() => setMatchFocus(false)}
                        required
                        />
                    <label 
                        className = {styles.visiblePwdIcon}
                        onClick = {() => { setVisibleMatch(!visibleMatch) }}
                        ><img src = {visibleMatch ? hide : show}/></label>
                    
                </div>

                <input  
                    className= {styles.date} 
                    type='date' 
                    onChange={handleInput}
                    name = "birthDate"
                    />


                <p id = 'confirm' className = {`${matchFocus && matchPassword && !validMatch ? styles.instructions :styles.offscreen}`}>
                    Должно соответствовать первому поле ввода пароля.
                </p>
 
                {isLoading ? <Loading/>:  <Button text = "СОЗДАТЬ АККАУНТ" radius = 'small' disabled = {!validInput.validEmail || !validInput.validTelNumber || !validInput.validName || !validInput.validSurName || !validInput.validPassword || !validMatch ? true : false} />}
              


                <div className = {styles.lines}>или</div>

                <button  className = {styles.signinwithgoogle} ><img src={google} alt='google' />Зарегистрироваться с Google</button>

                <div className = {styles.signin}> У вас уже есть аккаунт? <Link to="/signin">Войти</Link></div>
               

                
            
            
            



            </form>
        </div>
    )
}






export default SignUp;