import { NavLink, useParams } from 'react-router-dom';
import styles from './UserTabs.module.css';

const UserTabs = () => {
  const { userId } = useParams<{ userId: string }>();

  if (!userId) return null; // Защита от отсутствия userId


  const tabs = [
    { path: 'albums', label: 'Альбомы' },
    { path: 'todos', label: 'Задачи' },
    { path: 'posts', label: 'Посты' }
  ];

  return (
    <nav className={styles.tabs}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={`/users/${userId}/${tab.path}`}
          className={({ isActive }) => 
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          end
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default  UserTabs;