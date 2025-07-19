import React, { useState } from 'react';
import styles from './MainLayout.module.css';
import PostCard from '@entities/post/ui/PostCard';
import { Header, Footer, PostList } from '../../widgets';
import LogoAston from '@assets/logo__aston.svg';
import LogoAstonWhite from '@assets/logo__aston__white.svg';
import { useTheme } from '@shared/lib/theme/ThemeProvider';
import { ThemeSwitcher } from '@features/ThemeSwitcher/ui/ThemeSwitcher';
import CommentList from '@widgets/CommentList/ui/CommentList';
import type { Post } from '@entities/post/model/types';
import { mockPosts } from '@entities/post/mocks/mockPosts';

const logos = {
    light: LogoAston,
    dark: LogoAstonWhite
};

interface MainLayoutProps {
  posts: Post[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ posts }) => {
    const { theme } = useTheme();
    const [filteredPosts, setFilteredPosts] = useState(mockPosts)

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
                    {filteredPosts.map((post) => (
                        <PostCard key={post.id} title={post.title}  postText={post.postText}>
                            {post.comments && (
                                <CommentList
                                    comments={post.comments}
                                    initialExpanded={false}
                                />
                            )}
                        </PostCard>
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