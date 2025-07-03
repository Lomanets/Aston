import React from 'react';
import styles from './app.module.css';
import Header from '../widgets/LayoutHeader/Header';
import Footer from '../widgets/LayoutFooter/Footer';
import LogoAston from '../assets/logo__aston.svg';
import MainLayout from '../shared/layouts/MainLayout'


interface AppProps {

}

const App: React.FC<AppProps> = () => {
    return ( 
        <>
            <Header title='Сайт для Aston' logo={LogoAston} altLogo='Логотип компании Астон'/>
            <MainLayout />
            <Footer  logo={LogoAston} altLogo='Логотип компании Астон'/>
        </>
    );
}

export default App;