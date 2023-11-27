import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userId, setUserId] = useState(1);
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formbookingData, setFormBookingData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);

  const [userData, setUserData] = useState({
    image: '',
  });
  const [newUserData, setNewUserData] = useState({
    full_name: '',
    email: '',
    phone: ''
  });
  const [userImage, setUserImage] = useState('');
  const [activeTab, setActiveTab] = useState('EditProfile');
  

  const fetchUserData = () => {
    axios.get(`http://localhost:2000/user-profile/${userId}`)
      .then(response => {
        setUserData(response.data);
        setFullName(response.data.full_name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setNewUserData({
          full_name: response.data.full_name,
          email: response.data.email,
          phone: response.data.phone
        });
        setUserImage(`http://localhost:3010/users/${response.data.image}`);
      })
      .catch(error => {
        console.error('Error fetching user data: ', error);
      });
  };

  const handleSaveDataChanges = () => {
    console.log('New User Data:', newUserData);
  
    axios.put(`http://localhost:2000/user-profile/${userId}`, newUserData)
      .then(response => {
        alert('Data changes saved successfully');
        console.log('Response data:', response.data);
      })
      .catch(error => {
        console.error('Error saving data changes: ', error);
      });
  };

  const handleSaveImageChanges = () => {
    console.log('New User Image:', newUserData.image);
  
    const formData = new FormData();
    formData.append('image', newUserData.image);
  
    axios.put(`http://localhost:3010/users/${userId}/upload-image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log('Image changes saved successfully', response.data);
      })
      .catch((error) => {
        console.error('Error saving image changes: ', error);
      });
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const selectedImage = e.target.files[0];
      setNewUserData({
        ...newUserData,
        image: selectedImage,
      });
      setUserImage(URL.createObjectURL(selectedImage));
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  useEffect(() => {
    // جلب البيانات وتحديث formbookingData
    axios.get('http://localhost:3010/formbooking')
      .then(response => {
        setFormBookingData(response.data);
      })
      .catch(error => {
        console.error('Error fetching form booking data: ', error);
      });
  }, []);

  useEffect(() => {
    // جلب البيانات وتحديث wishlistData
    axios.get('http://example.com/api/wishlist')
      .then(response => {
        setWishlistData(response.data);
      })
      .catch(error => {
        console.error('Error fetching wishlist data: ', error);
      });
  }, []); 

  return (
    <div>
      <div className="sm mt-20">
      <div className="text-center p-4">
  <img
    src={userImage || "https://i.pinimg.com/280x280_RS/39/d4/77/39d47758fc973887b276f5464df10d53.jpg"}
    className="h-32 w-32 rounded-full mx-auto"
  />
  <div className="mt-4">
    <span className="font-medium text-gray-900">{full_name}</span><br />
    <span className="text-gray-500">{email}</span><br />
    <span className="text-gray-500">{phone}</span>
  </div>
</div>
</div>


      <ul className="text-sm font-medium text-center text-emerald-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-emerald-700 dark:text-emerald-400">
        <li className="w-full">
          <a
            href="#"
            onClick={() => setActiveTab('EditProfile')}
            className={`inline-block w-full p-4 ${
              activeTab === 'EditProfile'
                ? 'text-emerald-900 bg-gray-100'
                : 'bg-white hover:text-emerald-700 hover:bg-gray-50'
            } rounded-l-lg focus:ring-4 focus:ring-emerald-300 active focus:outline-none dark:bg-emerald-700 dark:text-white`}
            aria-current={activeTab === 'EditProfile' ? 'page' : null}
          >
            Edit Profile
          </a>
        </li>

        <li className="w-full">
          <a
            href="#"
            onClick={() => setActiveTab('formbooking')}
            className={`inline-block w-full p-4 ${
              activeTab === 'formbooking'
                ? 'bg-white hover:text-emerald-700 hover:bg-gray-50'
                : 'dark-bg-gray-800 dark-hover-text-white dark-hover-bg-gray-700'
            } focus-ring-4 focus-ring-blue-300 focus-outline-none`}
            aria-current={activeTab === 'formbooking' ? 'page' : null}
          >
            Your Booking
          </a>
        </li>

        <li className="w-full">
          <a
            href="#"
            onClick={() => setActiveTab('WishList')}
            className={`inline-block w-full p-4 ${
              activeTab === 'WishList'
                ? 'bg-white hover:text-emerald-700 hover:bg-gray-50'
                : 'dark-bg-gray-800 dark-hover-text-white dark-hover-bg-gray-700'
            } rounded-r-lg focus-ring-4 focus-outline-none focus-ring-blue-300`}
            aria-current={activeTab === 'WishList' ? 'page' : null}
          >
            Wish List
          </a>
        </li>
      </ul>

      {activeTab === 'EditProfile' && (
        <div className="flex justify-center mt-20 px-8">
          <form className="max-w-2xl" encType="multipart/form-data" action="/update-profile" method="post">
            <div className="border shadow rounded-lg p-6 bg-white dark:bg-emerald-600">
              <h2 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-300 mb-4">Account Settings</h2>

              <div className="mb-4">
                <label className="text-emerald-600 dark:text-emerald-400 block">User Name</label>
                <input
                  className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
                  type="text"
                  value={newUserData.full_name}
                  onChange={(e) => setNewUserData({ ...newUserData, full_name: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="text-emerald-600 dark:text-emerald-400 block">Password</label>
                <input
                  className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
                  type="password"
                />
              </div>

              <div className="mb-4">
                <label className="text-emerald-600 dark:text-emerald-400 block">Phone</label>
                <input
                  className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
                  type="phone"
                  value={newUserData.phone}
                  onChange={(e) => setNewUserData({ ...newUserData, phone: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="text-emerald-600 dark:text-gray-400 block ">Email</label>
                <input
                  className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
                  type="email"
                  value={newUserData.email}
                  onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="text-emerald-600 dark:text-gray-400 block">Profile Picture</label>
                <input
                  className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSaveDataChanges}
                  className="py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring focus:border-emerald-300"
                  type="button"
                >
                  Save Data Changes
                </button>
                <button
                  onClick={handleSaveImageChanges}
                  className="ml-2 py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring focus:border-emerald-300"
                  type="button"
                >
                  Save Image Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {activeTab === 'formbooking' && (
        <div>
          <h2>Your Booking:</h2>
          {formbookingData && formbookingData.map((order) => (
            <div key={order.id}>
              <p>{order.orderNumber}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'WishList' && (
        <div>
          <h2>Wishlist:</h2>
          {wishlistData && wishlistData.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Profile;
