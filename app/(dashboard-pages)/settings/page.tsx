'use client';
import BouncingLoader from '@/finDash/app/components/Loaders/BouncingLoader';
import React, { useEffect, useState } from 'react';

const SettingsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const [accountSettings, setAccountSettings] = useState({
    username: 'johndoe',
    email: 'johndoe@example.com',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountSettings((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotificationSettings((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSecuritySettings((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <BouncingLoader />
      </div>
    );
  }
  return (
    <div className='w-full flex flex-row justify-center items-center mb-6'>
      <div className='px-6 py-8 w-[800px] bg-gray-200 min-h-screen '>
        <h1 className='text-center text-4xl font-bold mb-8 text-green-700'>
          Settings
        </h1>

        {/* Account Settings */}
        <div className='bg-white p-6 shadow-lg rounded-lg mb-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Account</h2>
          <div className='space-y-4'>
            <div className='flex flex-col'>
              <label className='text-gray-700 font-semibold'>Username</label>
              <input
                type='text'
                name='username'
                value={accountSettings.username}
                onChange={handleInputChange}
                className='border rounded-lg p-2 mt-1 text-gray-700'
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-gray-700 font-semibold'>Email</label>
              <input
                type='email'
                name='email'
                value={accountSettings.email}
                onChange={handleInputChange}
                className='border rounded-lg p-2 mt-1 text-gray-700'
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className='bg-white p-6 shadow-lg rounded-lg mb-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>
            Notifications
          </h2>
          <div className='space-y-4'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                name='emailNotifications'
                checked={notificationSettings.emailNotifications}
                onChange={handleNotificationChange}
                className='h-4 w-4 text-green-600'
              />
              <label className='ml-2 text-gray-700 font-semibold'>
                Email Notifications
              </label>
            </div>

            <div className='flex items-center'>
              <input
                type='checkbox'
                name='smsNotifications'
                checked={notificationSettings.smsNotifications}
                onChange={handleNotificationChange}
                className='h-4 w-4 text-green-600'
              />
              <label className='ml-2 text-gray-700 font-semibold'>
                SMS Notifications
              </label>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className='bg-white p-6 shadow-lg rounded-lg'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Security</h2>
          <div className='space-y-4'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                name='twoFactorAuth'
                checked={securitySettings.twoFactorAuth}
                onChange={handleSecurityChange}
                className='h-4 w-4 text-green-600'
              />
              <label className='ml-2 text-gray-700 font-semibold'>
                Two-Factor Authentication
              </label>
            </div>

            {/* Additional security options can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
