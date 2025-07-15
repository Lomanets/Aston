import React from 'react';
import styles from './App.module.css';
import MainLayout from '@shared/layouts/MainLayout'
import { ThemeProvider } from '@shared/lib/theme/ThemeProvider';



const App: React.FC = () => {
    return ( 
        <ThemeProvider>
            <MainLayout />
        </ThemeProvider>
    );
}

export default App;