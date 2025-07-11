import React from 'react';
import styles from './App.module.css';
import MainLayout from '../shared/layouts/MainLayout'
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';


interface AppProps {

}

const App: React.FC<AppProps> = () => {
    return ( 
        <ThemeProvider>
            <MainLayout />
        </ThemeProvider>
    );
}

export default App;