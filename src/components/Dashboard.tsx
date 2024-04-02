
import React from 'react';
import Column1 from './MainContent/Columns/Column1';
import Column2 from './MainContent/Columns/Column2';
import Navbar from './MainContent/Navbar';
import {mockAccounts} from './mockdata'
import {financialData} from './mockdata'

const Dashboard: React.FC = () => {
    return (
        <div className='flex flex-col w-full overflow-hidden bg-gray-200'>
        <Navbar/>
        
        <h1 className='w-full text-3xl font-semibold p-2 mx-2 mt-4'>Headups</h1>
            <div className='mt-2 flex flex-row w-full'>
                <div className='w-[18rem] overflow-hidden mx-2'>
                <Column1 mainAccounts={mockAccounts} />
                </div>

                <div className='w-4/5 ml-2 overflow-hidden flex flex-row shadow-xl border-1'>
                    
                    <Column2 financialData={financialData}/>
                    
                    
                    <Column2 financialData={financialData}/>
                   
                    <Column2 financialData={financialData}/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
