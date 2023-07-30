import React from 'react'
import { Button, Form } from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {

    const onSubmit = (values) => {
        console.log("success", values);
    }
  return (
    <div className='grid grid-rows-2 h-screen'>
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
                 Login To Your Account
               </h1>
               <hr />
               <Form layout='vertical' className='flex flex-col gap-5 mt-3 pt-5' onFinish={onSubmit}>
                <Form.Item label="Email" name="email">
                    <input />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <input />
                </Form.Item>
                <div className='flex flex-col gap-5'>
                <Button type='primary' htmlType='submit' block>
                    Login
                </Button>
                <Link to="/register">
                    Don't have an account? Sign up here
                </Link>
                </div>
            </Form>
            </div>
        </div>
    </div>
  )
}

export default Login