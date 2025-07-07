import React from 'react';
import styles from './App.module.css';
import MainLayout from '../shared/layouts/MainLayout'


interface AppProps {

}

const App: React.FC<AppProps> = () => {
    return ( 
        <>
            <MainLayout />
        </>
    );
}

export default App;