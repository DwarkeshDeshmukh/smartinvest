import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Table = ({ parentID }) => {
    // Sample data for demonstration
    const sampleData = [
        {
            id: 10001,
            name: "quick_sort_algorithm",
            type: "file",
            lastModified: "12-5-2023 3:15 PM",
            createdAt: "16/10/2021 3:15 PM",
            price: "$200.00",
            folder:"second",
        },
        {
            id: 10001,
            name: "Kring New Fit office chair, mesh + PU, black",
            type: "file",
            lastModified: "12-5-2023 3:15 PM",
            createdAt: "16/10/2021",
            price: "$200.00",
            folder:"second",
        },
        {
            id: 10001,
            name: "Kring New Fit office chair, mesh + PU, black",
            type: "folder",
            lastModified: "12-5-2023 3:15 PM",
            createdAt: "16/10/2021",
            price: "$200.00"
        },
        {
            id: 10001,
            name: "file1",
            type: "file",
            lastModified: "12-5-2023 3:15 PM",
            createdAt: "16/10/2021",
            price: "$200.00"
        },
        {
            id: 10001,
            name: "Kring New Fit office chair, mesh + PU, black",
            type: "file",
            lastModified: "12-5-2023 3:15 PM",
            createdAt: "16/10/2021",
            price: "$200.00"
        },
        {
            id: 10001,
            name: "Kring New Fit office chair, mesh + PU, black",
            type: "file",
            lastModified: "12-5-2023 3:15 PM",
            createdAt: "16/10/2021 3:15 PM ",
            price: "$200.00"
        },
    ];

    const handleclickfolder = () => {
        console.log("this is folder opening")
    }

    const handleclickfile = () => {
        console.log("this is file opening")
    }

    const handlefilter = () => {
    
    }

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5); // Number of rows per page
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = sampleData.slice(indexOfFirstRow, indexOfLastRow);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <Navbar />
            <div className="px-24 h-screen bg-dark overflow-hidden no-scrollbar">
                
                <div className="overflow-auto rounded-lg shadow hidden md:block w-full">

                    <div className="relative flex mt-6 items-center">
                        <div>
                            <button
                            class=" ml-12 align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-5 rounded-md bg-gray-800 text-white shadow-md shadow-green-100/10 hover:shadow-lg hover:shadow-green-100/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button"
                            >New File</button>

                            <button
                                class="ml-3 align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-5 rounded-md bg-gray-800 text-white shadow-md shadow-green-100/10 hover:shadow-lg hover:shadow-green-100/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button"
                            >New Folder</button>
                        </div>
                        <div className="ml-auto">
                            <span className="whitespace-nowrap px-3 py-[0.25rem] mr-1 text-surface dark:border-neutral-400 dark:text-white"> {/* Added mr-1 class */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <input
                            type="search"
                            className="relative flex ml-2 w-72 mr-16 rounded-md border-solid dark:bg-gray-800 dark:border-gray-700 px-4 py-1.5 font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                            placeholder="Search"
                            aria-label="Search"
                            id="exampleFormControlInput2"
                            aria-describedby="button-addon2"
                            onChange={handlefilter}
                        />
                    </div>



                    <table className="w-11/12 ml-12 mt-4">
                        <thead className="bg-gray-50 border-b-2 border-gray-700 text-center">
                            <tr>
                                <th className="w-20 p-3 text-pretty ">id</th>
                                <th className="w-20 p-3 text-pretty ">Code-Sync</th>
                                <th className="w-20 p-3 text-pretty ">Type</th>
                                <th className="w-20 p-3 text-pretty ">Last Modified</th>
                                <th className="w-20 p-3 text-pretty ">Created At</th>
                                <th className="w-20 p-3 text-pretty ">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y  divide-gray-500 text-center">
                            {currentRows.map((row, index) => (
                                <tr key={index} className="bg-white">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-bold">{row.id}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <a href="#" onClick={row.type == "folder" ? handleclickfolder : handleclickfile} className="font-bold text--500 hover:underline">{row.name}</a>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-bold">{row.type}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-bold">{row.lastModified}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-bold">{row.createdAt}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-bold"><button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Red</button>
                                        <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mt-2  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Red</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Pagination */}
                    <div className="mt-4 flex justify-end mr-16">
                        {Array.from({ length: Math.ceil(sampleData.length / rowsPerPage) }, (_, i) => (
                            <button
                                key={i}
                                className={`px-3 py-1 mx-1 rounded-full ${i + 1 === currentPage ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                                onClick={() => paginate(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;
