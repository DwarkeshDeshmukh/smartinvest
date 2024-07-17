import React from 'react'
import Navbar from './Reuse/Navbar'
import StockSearch from './Reuse/Stocksearch'

const Forcast = () => {
    return (
        <>
            <Navbar />
            <div className="flex  justify-center h-screen text-white bg-dark">
                <StockSearch />
                
            </div>
            
        </>
    )
}

export default Forcast
