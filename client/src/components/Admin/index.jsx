import React from 'react';
import Movies from './Movies';
import Artists from './Artists';
import Users from './Users';
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';


const Admin = () => {
    const {user} = useSelector((state) => state.users);
    return (
      <div>
        {user?.isAdmin ? (
          <Tabs>
             <Tabs.TabPane tab="Movies" key="1">
              <Movies />
             </Tabs.TabPane>
             <Tabs.TabPane tab="Artists" key="2">
              <Artists />
             </Tabs.TabPane>
             <Tabs.TabPane tab="Users" key="3"> 
              <Users />
             </Tabs.TabPane>
          </Tabs>
        ) : (
            <div className='text-gray-600 text-sm text-center mt-20'>
                Access Denied
             </div>
        )}
      </div>
    )
  }
  
  export default Admin;