import React from 'react';
import styles from './MainLayout.module.css';
import PostList from '../../widgets/PostList/PostList';
import PostCard from '../../entities/post/ui/PostCard';
import Header from '../../widgets/LayoutHeader/Header';
import Footer from '../../widgets/LayoutFooter/Footer';
import LogoAston from '../../assets/logo__aston.svg';
import LogoAstonWhite from '../../assets/logo__aston__white.svg';
import { useTheme } from '../../shared/lib/theme/ThemeProvider';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { nanoid } from 'nanoid';

interface Post {
    id: string;
    title: string;
}

const dataList: Post[] = [
  { id: nanoid(), title: 'one' },
  { id: nanoid(), title: 'two' },
  { id: nanoid(), title: 'three' }
];

const logos = {
  light: LogoAston,
  dark: LogoAstonWhite
};




const MainLayout: React.FC = ({}) => {
    const { theme, toggleTheme } = useTheme();

    return ( 
        <>
            <Header 
                title='Сайт для Aston' 
                logo={logos[theme]} 
                altLogo='Логотип компании Астон'
                extraContent={<ThemeSwitcher />}
            />
            <main className={styles.main}>
                <PostList>
                    {dataList.map((post) => (
                        <PostCard key={post.id} title={post.title} />
                        
                    ))}
                </PostList>
            </main>
            <Footer  
                logo={logos[theme]} 
                altLogo='Логотип компании Астон'
            />
        </>
    );
}

export default MainLayout;