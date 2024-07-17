import React from 'react'

const Signuppage = () => {
    return (
        <div className="flex items-center justify-center h-screen text-white bg-dark">
            <div className="bg-gray-800 p-4 rounded-lg w-96 max-w-120 mt-[40px]">
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
                    <h4 className=" mb-[10px] mt-0">Username</h4>
                    <input
                        type="text"
                        className="p-2 rounded-md outline-none border-none mb-[14px] bg-gray-200 text-base font-semibold text-black"
                        placeholder="Username"
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
                        Already have an Account then &nbsp;
                        <a
                            href=""
                            className="text-green-500 no-underline border-b-2 border-green-500 transition-all duration-300 ease-in-out hover:text-green-700 hover:border-green-700"
                        >
                            login click
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Signuppage
