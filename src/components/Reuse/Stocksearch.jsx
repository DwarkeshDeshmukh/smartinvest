import React, { useState } from 'react';

const StockSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredStocks, setFilteredStocks] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedStock, setSelectedStock] = useState('');

    const stocks = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB']; 

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (term.length > 0) {
            const filtered = stocks.filter(stock =>
                stock.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredStocks(filtered);
        } else {
            setFilteredStocks([]);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleSelectStock = (stock) => {
        setSelectedStock(stock);
        setSearchTerm(stock);
        setDropdownOpen(false);
    };

    const handleSearchButton = () => {
        // Add your search logic here
        console.log(`Searching for ${selectedStock}`);
        // You can make an API call or perform any other action here
    };

    return (
        <>
            <div className="flex justify-center w-full mt-20">
                <div className="relative w-1/2">
                    <button
                        onClick={toggleDropdown}
                        className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        {selectedStock || 'Select Stock'}
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute mt-2 w-full bg-dark dark:bg-dark shadow-lg rounded-md py-1 z-10">
                            <input
                                type="text"
                                placeholder="Search stock"
                                className="block w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={searchTerm}
                                onChange={handleSearch}
                            /> 
                            <ul>
                                {filteredStocks.length > 0 ? (
                                    filteredStocks.map(stock => (
                                        <li key={stock}>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => handleSelectStock(stock)}>{stock}</a>
                                        </li>
                                    ))
                                ) : (
                                    <li className="px-4 py-2 text-sm text-gray-700 dark:text-white">No results</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
                <button 
                    style={{ marginLeft: 20 }} 
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded h-10"
                    onClick={handleSearchButton}
                >
                    Search
                </button>
            </div>
        </>
    );
};

export default StockSearch;