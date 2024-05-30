// import styles from './AddAdminSpecialist.module.scss'
// // import images from '../../assets/icons/savephoto.svg'
// import Button from '../../UI/Button/Button';
// import CancelButton from '../../UI/CancelButton/CancelButton';
// import SpecialistToggleButton from './SpecialistToggleButton.jsx'
// import { useState } from 'react';
// import axios from 'axios';
// const AddAdminSpecialist = () =>{
//
//     const [name, setName] = useState('');
//     const [surname, setSurname] = useState('');
//     const [service, setService] = useState('');
//     const [position, setPosition] = useState('');
//     const [description, setDescription] = useState('');
//     const [email, setEmail] = useState('');
//     const [imageDoctor, setImageDoctor] = useState('');
//     const handleClick = async () => {
//         try {
//             const response = await axios.post('https://medclinic-422605.uc.r.appspot.com/api/v1/doctor/add-doctor', {
//                 name: name,
//                 surname: surname,
//                 service: service,
//                 position: position,
//                 description:description,
//                 email:email,
//                 image:imageDoctor
//             }, {
//                 headers: {
//                     'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MTYxODE5MTksImV4cCI6MTcxNzYyMTkxOX0.frZL0Hahbk4qtdidzoZtRYejtMYccxTXYU5VW_DyckE`
//                 }
//             });
//
//             console.log('Заявка успешно отправлена');
//             console.log(response.data);
//             console.log(name, surname, service, position);
//         } catch (error) {
//
//             console.error('Конфигурация запроса:', error.message);
//         }
//     };
//     const [imageUrl, setImageUrl] = useState('');
//
//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImageDoctor(file);
//             setImageUrl(URL.createObjectURL(file));
//         }
//     };
//     return(
//         <div className={styles.globalAdding}>
//             <h3 className={styles.header}>Добавление специалиста</h3>
//             <div className={styles.addingDoctors}>
//                 <div className={styles.addImage}>
//                     <input
//                       type="file"
//                       accept="imageDoctor/*"
//                       onChange={handleImageChange}
//                       style={{ display: 'none' }}
//                       id="fileInput"
//                     />
//                     {imageUrl ? (
//                       <img src={imageUrl} alt="doctorImage" className={styles.image} />
//                     ) : (
//
//                       <p className={styles.title}>Нажмите для добавления фотографии</p>
//                     )}
//                     <label htmlFor="fileInput" className={styles.imageLabel}>
//                         {imageUrl ? 'Изменить фото' : 'Добавить фото'}
//                     </label>
//                 </div>
//
//
//                 <div className={styles.infoDoctors}>
//                     <h4 className={styles.infoDoctorsHeader}>Добавление специалиста</h4>
//
//                     <div className={styles.addSpecialistInput}>
//                         <input className={styles.inputAddSpecialist} placeholder="Напишите имя" type="text"
//                                onChange={(e) => {
//                                    setName(e.currentTarget.value);
//                                }} />
//                         <input className={styles.inputAddSpecialist} placeholder="Напишите фамилию" type="text"
//                                onChange={(e) => {
//                                    setSurname(e.currentTarget.value);
//                                }} />
//                         <input className={styles.inputAddSpecialist} placeholder="Выберите отделение" type="text"
//                                onChange={(e) => {
//                                    setService(e.currentTarget.value);
//                                }} />
//                         <input className={styles.inputAddSpecialist} placeholder="Напишите должность" type="text"
//                                onChange={(e) => {
//                                    setPosition(e.currentTarget.value);
//                                }} />
//                         <input className={styles.inputAddSpecialist} placeholder="Description" type="text"
//                                onChange={(e) => {
//                                    setDescription(e.currentTarget.value);
//                                }} />
//                         <input className={styles.inputAddSpecialist} placeholder="Email" type="text"
//                                onChange={(e) => {
//                                    setEmail(e.currentTarget.value);
//                                }} />
//
//                     </div>
//                     <div>
//                         <SpecialistToggleButton />
//                     </div>
//                     <div className={styles.addSpecialistButton}>
//
//                         <CancelButton radius="small" text="Отменить" />
//                         <Button text='Добавить' radius="small" handle={() => handleClick()} />
//                     </div>
//                 </div>
//
//
//             </div>
//         </div>
//     )
// }
// export default AddAdminSpecialist

import styles from './AddAdminSpecialist.module.scss';
import Button from '../../UI/Button/Button';
import CancelButton from '../../UI/CancelButton/CancelButton';
import SpecialistToggleButton from './SpecialistToggleButton';
import { useState } from 'react';
import axios from 'axios';

const AddAdminSpecialist = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [service, setService] = useState('');
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [imageDoctor, setImageDoctor] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleClick = async () => {
        try {
            const response = await axios.post('https://medclinic-422605.uc.r.appspot.com/api/v1/doctor/add-doctor', {
                name,
                surname,
                service,
                position,
                description,
                email,
                image: imageDoctor
            }, {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MTYxODE5MTksImV4cCI6MTcxNzYyMTkxOX0.frZL0Hahbk4qtdidzoZtRYejtMYccxTXYU5VW_DyckE`
                }
            });

            console.log('Заявка успешно отправлена');
            console.log(response.data);
        } catch (error) {
            console.error('Конфигурация запроса:', error.message);
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageDoctor(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };

    return (
      <div className={styles.globalAdding}>
          <h3 className={styles.header}>Добавление специалиста</h3>
          <div className={styles.addingDoctors}>
              <div className={styles.addImage}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                    id="fileInput"
                  />
                  {imageUrl ? (
                    <img src={imageUrl} alt="doctorImage" className={styles.image} />
                  ) : (
                    <p className={styles.title}>Нажмите для добавления фотографии</p>
                  )}
                  <label htmlFor="fileInput" className={styles.imageLabel}>
                      {imageUrl ? 'Изменить фото' : 'Добавить фото'}
                  </label>
              </div>

              <div className={styles.infoDoctors}>
                  <h4 className={styles.infoDoctorsHeader}>Добавление специалиста</h4>
                  <div className={styles.addSpecialistInput}>
                      <input className={styles.inputAddSpecialist} placeholder="Напишите имя" type="text" onChange={(e) => setName(e.currentTarget.value)} />
                      <input className={styles.inputAddSpecialist} placeholder="Напишите фамилию" type="text" onChange={(e) => setSurname(e.currentTarget.value)} />
                      <input className={styles.inputAddSpecialist} placeholder="Выберите отделение" type="text" onChange={(e) => setService(e.currentTarget.value)} />
                      <input className={styles.inputAddSpecialist} placeholder="Напишите должность" type="text" onChange={(e) => setPosition(e.currentTarget.value)} />
                      <input className={styles.inputAddSpecialist} placeholder="Description" type="text" onChange={(e) => setDescription(e.currentTarget.value)} />
                      <input className={styles.inputAddSpecialist} placeholder="Email" type="text" onChange={(e) => setEmail(e.currentTarget.value)} />
                  </div>
                  <div>
                      <SpecialistToggleButton />
                  </div>
                  <div className={styles.addSpecialistButton}>
                      <CancelButton radius="small" text="Отменить" />
                      <Button text="Добавить" radius="small" handle={handleClick} />
                  </div>
              </div>
          </div>
      </div>
    );
};

export default AddAdminSpecialist;
