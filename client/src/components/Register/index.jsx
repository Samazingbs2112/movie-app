import React, { useEffect } from 'react'
import { Button, Form} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterUser } from '../../apis/users'

const Register = () => {
    const navigate = useNavigate();
   const onSubmit = async (values) => {
        try {
            const response = await RegisterUser(values);
            console.log(response);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            navigate("/");
        }
    }, []);
    

  return (
    <div className='grid grid-cols-2 h-screen'>
        <div className='bg-primary flex flex-col items-center justify-center'>
            <div>
            <h1 className='text-7xl text-red-700 font-semibold'>
                    Movie App
                </h1>
                <span className='text-md text-white mt-2'>
                    Review And Rate Movies!
                </span>
            </div>


        </div>
        <div className='flex items-center justify-center mt-0'>
            <div className='w-[400px]'>

               <h1 className='text-2xl mb-2'>
                 Register Your Account
               </h1>
               <hr />
               <Form layout='vertical' className='flex flex-col gap-5 mt-5 pt-5' onFinish={onSubmit}>
               <Form.Item label="Username" name="username">
                    <input required/>
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <input required/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <input type='password' required/>
                </Form.Item>
                <Form.Item label='Confirm Password'
                name='confirmPassword' >
                    <input type='password' required/>
                 </Form.Item>   
                <div className='flex flex-col gap-5'>
                <Button type='primary' htmlType='submit' block>
                    Register
                </Button>
                <Link to="/login">
                    Already a user? Sign in here
                </Link>
                </div>
            </Form>
            </div>
        </div>
    </div>
  )
}

export default Register