import React from 'react';
import styles from './mainLayout.module.css';
import PostList from '../../widgets/PostList/PostList'


const dataList: string[] = [
    'one',
    'two',
    'three'
]

interface MainLayoutProps {
    
}

const MainLayout: React.FC<MainLayoutProps> = ({}) => {
    return ( 
        <main className={styles.main}>
            <PostList data={dataList} />
        </main>
    );
}

export default MainLayout;