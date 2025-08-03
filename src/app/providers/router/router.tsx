import { createBrowserRouter } from 'react-router-dom';
import {
    PostsPage,
    PostDetailPage,
    UserAlbumsPage,
    AlbumPhotosPage,
    UserTodosPage,
    UserPostsPage,
    UserProfilePage,
    NotFoundPage
} from '@pages';
import { MainLayout } from '@/shared/layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <PostsPage />
            },
            {
                path: 'posts/:id',
                element: <PostDetailPage />
            },
            {
                path: ':userId',
                element: <UserProfilePage />,
                children: [
                    {
                        path: 'albums',
                        element: <UserAlbumsPage />
                    },
                    {
                        path: 'albums/:albumId/photos',
                        element: <AlbumPhotosPage />
                    },
                    {
                        path: 'todos',
                        element: <UserTodosPage />
                    },
                    {
                        path: 'posts',
                        element: <UserPostsPage />
                    }
                ]
            }
        ],
    },
    {

        path: '*',
        element: <NotFoundPage />
    }
  
]);