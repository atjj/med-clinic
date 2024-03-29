import Button from '../../UI/Button/Button.jsx';

import google from '../../assets/icons/google.svg';

import styles from './SignUp.module.scss';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../services/network.js';
import AuthContext from '../../context/AuthProvider.jsx';
import { useState,useContext } from 'react';

const SignUp = () => {

    const {setAuth} = useContext(AuthContext);
   

    const navigate = useNavigate();
    
    const [input,setInput] = useState({
        name: "",
        surName: "",
        telNumber: "",
        email: "",
        password: "",
    })



    const handleInput = (e) => {

        const {name,value} = e.target;
        setInput((prev) => ({
            ...prev,
            [name]:value,
        }));


    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        console.log('Отправка данных на сервер:', { input });
        console.log(input)

        const res = await signUp(input);
        if (res) {
            console.log('success',res);
            const email = res.email;
            localStorage.setItem('site',res.token);
            const token = res.token;
            const roles = res.roles;
            setAuth((prev) => ({
                ...prev,
                email,
                roles,
                token
            }));
            setInput({
                name: "",
                surName: "",
                telNumber: "",
                email: "",
                password: "",
            })
            navigate('/dashboard');

        } else {
            console.log(res);
           
        }


   
    }



    return (

        <div className = {styles.wrapper}>
            <form  onSubmit={handleSubmit} className= {styles.signUp}>

                <h1 className= {styles.header}>РЕГИСТРАЦИЯ</h1>

                <input 
                    className= {styles.input}  
                    type="text" 
                    placeholder="Имя"
                    name = 'name'
                    onChange = {handleInput}
                    required
                    />

                <input 
                    className= {styles.input}  
                    type="text" 
                    placeholder="Фамилия"
                    name = "surName"
                    onChange = {handleInput}
                    required
                    />

                <input 
                    className= {styles.input}  
                    type="tel" 
                    placeholder="+996 (_ _ _) _ _ _ _ _ _"
                    name = "telNumber"
                    onChange = {handleInput}
                    required
                    />
                <input 
                    className= {styles.input}  
                    type="email" 
                    placeholder="Email"
                    name = "email"
                    onChange = {handleInput}
                    required
                    />

                <input 
                    className= {styles.input}  
                    type="password" 
                    placeholder="Введите пароль"
                    name = "password"
                    onChange = {handleInput}
                    required/>
                <input 
                    className= {styles.input}  
                    type="password" 
                    placeholder="Повторите пароль"
                    required
                    />


                <Button text = "СОЗДАТЬ АККАУНТ" radius = 'small'/>


                <div className = {styles.lines}>или</div>

                <button  className = {styles.signinwithgoogle}><img src={google} alt='google' />Зарегистрироваться с Google</button>

                <div className = {styles.signin}> У вас уже есть аккаунт? <a href="#">Войти</a></div>
               




            </form>
        </div>
    )
}



export default SignUp;