import { nanoid } from 'nanoid';
import type { Post } from '../model/types'; 

export const mockPosts: Post[] = [
    {
        id: nanoid(),
        title: 'one title',
        postText: 'Это первый пост для теста',
        comments:  [{
            id: nanoid(),
            author: "Иван Иванов",
            text: "Это тестовый комментарий",
            date: "2023-05-15"
        },
        {
            id: nanoid(),
            author: "Петр Петров",
            text: "Это тестовый комментарий",
            date: "2024-06-12"
        }
        ]
    },
    { 
        id: nanoid(), 
        title: 'two title for Aston', 
        postText: 'Это второй пост для теста' 
    },
    { 
        id: nanoid(), 
        title: 'three', 
        postText: 'Это третий пост для теста',
           comments:  [{
            id: nanoid(),
            author: "Дмитрий Дмитрович",
            text: "Это новый тестовый комментарий",
            date: "2024-02-11"
        },
        ]
    }
];
