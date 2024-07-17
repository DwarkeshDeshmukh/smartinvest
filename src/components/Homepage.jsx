    import React from 'react'

    const Homepage = () => {
        return (
            <div className="flex items-center justify-center h-screen text-white bg-dark">
                <div className="bg-gray-800 p-5 rounded-lg w-96 max-w-120">
                    <img
                        className="h-20 mb-[30px]"
                        src="/code-sync.png"
                        alt="code-synclogo"
                    />
                    <h4 className=" mb-[20px] mt-0">Paste invitation ROOM ID</h4>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            className="p-2 rounded-md outline-none border-none mb-[14px] bg-gray-200 text-base font-semibold text-black"
                            placeholder="ROOM ID"
                        />
                        <input
                            type="text"
                            className="p-2 rounded-md outline-none border-none mb-[14px] bg-gray-200 text-base font-semibold text-black"
                            placeholder="USERNAME"
                        />
                        <button className="border-none px-2 py-[10px] rounded-md text-base font-semibold cursor-pointer bg-green-500 hover:bg-green-700 w-44 mx-auto">
                            Join
                        </button>
                        <span className="mx-auto mt-5">
                            don't have an invite then create &nbsp;
                            <a
                                href=""
                                className="text-green-500 no-underline border-b-2 border-green-500 transition-all duration-300 ease-in-out hover:text-green-700 hover:border-green-700"
                            >
                                new room
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    export default Homepage
