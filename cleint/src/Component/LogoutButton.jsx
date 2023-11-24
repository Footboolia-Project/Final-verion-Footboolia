// في ملف LogoutButton.js
import React from 'react';
import { useAuth } from './AuthContext'; // تأكد من تعديل المسار حسب مكان الملف

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    console.log('Logging out');
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    logout();
    // إعادة توجيه إلى صفحة تسجيل الخروج أو أي صفحة أخرى تحددها
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
