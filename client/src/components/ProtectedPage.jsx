import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../apis/users'

const ProtectedPage = ({renderedpage}) => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
        const response = await getCurrentUser();
        setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    // only authenticated users can see hey username

  return (
    <div>
        {user && <h1>Hey {user.username}</h1>}  
        {renderedpage}
    </div>
  )
}

export default ProtectedPage