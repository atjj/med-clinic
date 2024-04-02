
import React, { useEffect, useState, useRef } from 'react';
import styles from './Cart.module.scss';
import container from '../../styles/ContainerStyles.module.scss';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Line from '../../UI/Line/Line.jsx';
import { Trash2 } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Cart = () => {
    const [analyzeData, setAnalyzeData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const cartRef = useRef(null);

    useEffect(() => {
        const analyzeDataFromStorage = localStorage.getItem('analyze');
        if (analyzeDataFromStorage) {
            const analyzeObject = JSON.parse(analyzeDataFromStorage);
            setAnalyzeData(analyzeObject);
            calculateTotalPrice(analyzeObject);
        }
    }, []);

    const calculateTotalPrice = (data) => {
        const totalPrice = data.reduce((total, item) => total + parseFloat(item.price), 0);
        setTotalPrice(totalPrice);
    };

    const handleDeleteItem = (index) => {
        const updatedData = [...analyzeData];
        updatedData.splice(index, 1);
        setAnalyzeData(updatedData);
        calculateTotalPrice(updatedData);
        localStorage.setItem('analyze', JSON.stringify(updatedData));
    };

    const handlePrintCart = () => {
        if (cartRef.current) {
            html2canvas(cartRef.current)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    const imgWidth = 210;
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;
                    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                    pdf.save('cart.pdf');
                });
        }
    };

    return (
        <div className={container.container}>
            <div className={styles.cartBlock}>
                <Line />
                <Breadcrumbs style={{ marginTop: '30px' }} aria-label="breadcrumb">
                    <Link underline="hover" color="#346EFB" href="/">
                        Главная
                    </Link>
                    <Typography color="text.primary">Корзина</Typography>
                </Breadcrumbs>
                <div ref={cartRef}>
                    <div className={styles.globalCart}>
                        <div className={styles.carts}>
                            <div className={styles.items}>
                                {analyzeData.map((item, index) => (
                                    <div className={styles.leftCart} key={index}>
                                        <div>
                                            <h4 className={styles.name}>{item.name}</h4>
                                            <p className={styles.result}>{item.mainTime}</p>
                                            <div className={styles.footerCartItem}>
                                                <p className={styles.price}>{item.price} сом</p>
                                                <div onClick={() => handleDeleteItem(index)} className={styles.delete}>
                                                    <p className={styles.deleteItem}>Удалить</p>
                                                    <Trash2 />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.rightCart}>
                            <h4>Сумма заказа: {totalPrice} сом</h4>
                            <button className={styles.print} onClick={handlePrintCart}>Распечатать корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

