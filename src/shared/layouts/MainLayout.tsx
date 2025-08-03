import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainLayout.module.css';
import PostCard from '@entities/post/ui/PostCard';
import { Header, Footer, PostList } from '@widgets';
import LogoAston from '@assets/logo__aston.svg';
import LogoAstonWhite from '@assets/logo__aston__white.svg';
import { useTheme } from '@shared/lib/theme/ThemeProvider';
import { ThemeSwitcher } from '@features/ThemeSwitcher/ui/ThemeSwitcher';
import type { User } from '@entities/post/model/types';
import { mockPosts } from '@entities/post/mocks/mockPosts';
import { Button } from '../ui';

const logos = {
    light: LogoAston,
    dark: LogoAstonWhite
};

interface MainLayoutProps {
  user: User[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ user }) => {
    const { theme } = useTheme();
    const [filteredPosts, setFilteredPosts] = useState(mockPosts)
    console.log(mockPosts)
    return (
        <>
            <Header
                title='Сайт для Aston'
                logo={logos[theme]}
                altLogo='Логотип компании Астон'
                extraContent={<ThemeSwitcher />}
                posts={mockPosts}
                onFilter={setFilteredPosts} 
            />
            <main className={styles.main}>  
                <PostList isLoading={false} loadingText='Посты загружаются...'>
                    {mockPosts.map((user) => (
                        
                        <PostCard 
                            key={user.idUser} 
                            firstName={user.firstName}  
                            lastName={user.lastName}
                        >
                            <Link to={user.idUser}>Жми</Link>
                        
                        </PostCard>
                    ))}
                    {/* {mockPosts.map((user) => (
                        <UserProfilePage 
                            key={user.idUser} 
                            firstName={user.firstName} 
                            lastName={user.lastName} 
                        />
                    ))} */}
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