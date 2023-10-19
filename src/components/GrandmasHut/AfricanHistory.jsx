import React from 'react';
import Card from './Card';

const AfricanHistory = () => {
  return (
    <div>
      <h2 className='py-2'>African History</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3'>
        <Card />
      </div>
    </div>
  )
}

export default AfricanHistory
