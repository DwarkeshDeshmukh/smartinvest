import React from 'react'
import Navbar from './Reuse/Navbar'

const Loginpage = () => {
    return (
        <>
        <div><Navbar/>
        <div className="flex items-center justify-center h-screen text-white bg-dark">
            <div className="bg-gray-800 p-4 rounded-lg w-96 max-w-120 mb-[80px]">
                <img
                    className="h-20 mb-[20px]"
                    src="/code-sync.png"
                    alt="code-synclogo"
                />
                <div className="flex flex-col">
                    <h4 className=" mb-[10px] mt-0">E-mail ID</h4>
                    <input
                        type="text"
                        className="p-2 rounded-md outline-none border-none mb-[14px] bg-gray-200 text-base font-semibold text-black"
                        placeholder="Email"
                    />
                    <h4 className=" mb-[10px] mt-0">Password</h4>
                    <input
                        type="text"
                        className="p-2 rounded-md outline-none border-none mb-[14px] bg-gray-200 text-base font-semibold text-black"
                        placeholder="Password"
                    />
                    <button className="border-none px-2 py-[10px] rounded-md text-base font-semibold cursor-pointer bg-green-500 hover:bg-green-700 w-44 mx-auto">
                        Join
                    </button>
                    <span className="mx-auto mt-5">
                        don't have an Account then create &nbsp;
                        <a
                            href=""
                            className="text-green-500 no-underline border-b-2 border-green-500 transition-all duration-300 ease-in-out hover:text-green-700 hover:border-green-700"
                        >
                            One in 1 click
                        </a>
                    </span>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Loginpage
