import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../apis/users'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from '../redux/usersSlice';


const ProtectedPage = ({children}) => {
    
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users);
    const navigate = useNavigate();

    const getUser = async () => {
        try {
        const response = await getCurrentUser();
        dispatch(SetUser(response.data));
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            navigate("/login");
        } else {
            getUser();
        }
       
        }, []);

    // only authenticated users can see hey username

  return (
    <div >
        <div className='flex justify-between items-center bg-primary p-5'>
          <span className='font-semibold text-red-500 text-2xl'>
            Movie App
          </span>

        <div className='bg-white rounded px-5 py-2 flex gap-2 items-center'>
          <i className="ri-shield-user-line"></i>
            <span className='text-primary text-sm cursor-pointer underline'
            onClick={() => {
                navigate("/profile");
             }}>Hey {user?.username}</span>
            <i className="ri-logout-box-line ml-8"
             onClick={() => {
                localStorage.removeItem("accessToken");
                navigate("/login");
             }}
            ></i>
         </div>
         </div>
         {user && <div className='p-5'>{children}</div>}
    </div>
  );
}

export default ProtectedPage