import React from 'react';
import styles from './MainLayout.module.css';
import PostList from '../../widgets/PostList/PostList';
import PostCard from '../../entities/post/ui/PostCard';
import Header from '../../widgets/LayoutHeader/Header';
import Footer from '../../widgets/LayoutFooter/Footer';
import LogoAston from '../../assets/logo__aston.svg';


const dataList: string[] = [
    'one',
    'two',
    'three'
]

interface MainLayoutProps {
    
}

const MainLayout: React.FC<MainLayoutProps> = ({}) => {
    return ( 
        <>
            <Header 
                title='Сайт для Aston' 
                logo={LogoAston} 
                altLogo='Логотип компании Астон'
            />
            <main className={styles.main}>
                <PostList>
                    {dataList.map((postTitle, index) => (
                        <PostCard key={index} title={postTitle} />
                    ))}
                </PostList>
            </main>
            <Footer  
                logo={LogoAston} 
                altLogo='Логотип компании Астон'
            />
        </>
    );
}

export default MainLayout;