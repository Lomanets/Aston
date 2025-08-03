import React from 'react';
import styles from './App.module.css';
import MainLayout from '@shared/layouts/MainLayout'
import { ThemeProvider } from '@shared/lib/theme/ThemeProvider';
import { useState } from 'react';
import { mockPosts } from '@entities/post/mocks/mockPosts';


const App: React.FC = () => {
    const [posts, setPosts] = useState(mockPosts);

    return ( 
        <ThemeProvider>
            <MainLayout posts={posts} />
        </ThemeProvider>
    );
}

export default App;
