import React from 'react';
import PageHeader from '../../components/PageHeader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../redux/services/loginSlice'; 

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(setLogout());
    navigate('/login'); 
  };

  return (
    <>
      <PageHeader title="Profile" />

      <div className="border border-[#636363] p-4 w-[95%] mx-auto my-6">
        <div className="flex flex-col items-center text-center">
          <div className="text-2xl font-semibold">{user?.username || 'Guest'}</div>
          <div className="text-xl text-gray-500">{user?.email || 'No email provided'}</div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white shadow-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
