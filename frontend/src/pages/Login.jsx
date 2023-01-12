import { React, useState } from 'react'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import Logo from '../images/techno_space_logo.png'
const Login = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { status }] = useMutation(async (inputs) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        login({ email, password });
    };
    return (
        <div>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-16">
                    <div className="home_reference_section my-5">
                        <Link to="/" className='cursor-pointer'>
                            <figure className='flex justify-center items-center'>
                                <img src={Logo} alt="Logo" className='w-20' />
                            </figure>
                            <span className='flex justify-center cursor-pointer font-bold text-xl text-[#07174D] hover:opacity-90'>Technospace</span>
                        </Link>

                    </div>
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Log in to Technospace Blogs!</h1>

                        <p className="mt-4 text-gray-500">
                            This is the techo space for modern tech world. Stay uptodate with your interests and hobby as well as important events around you.
                        </p>
                    </div>

                    <form action="" onSubmit={handleSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                        <div>
                            <label for="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    onChange={(event) => { setemail(event.target.value) }}
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email" />
                            </div>
                        </div>

                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    onChange={(event) => { setPassword(event.target.value) }}
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter password" />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                No account?&nbsp;
                                <Link to="/register" className="underline hover:font-semibold">Sign up</Link>
                            </p>

                            <button
                                type="submit"
                                className="ml-3 inline-block rounded-md bg-[#07174D] hover:opacity-90 px-5 py-3 text-sm font-medium text-white">
                                Login
                            </button>
                        </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>

        </div>
    )
}

export default Login