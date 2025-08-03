import { UserTabs } from '@/widgets';

interface UserProfile {
    firstName: string,
    lastName: string
}

const UserProfilePage: React.FC<UserProfile> = ({ firstName, lastName }) => {
  return (
    <div>
      <h1>Профиль пользователя</h1>
      <h2>{firstName} {lastName}</h2>
      <UserTabs/>
      
    </div>
  );
};

export default UserProfilePage;