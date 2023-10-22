import React from 'react'
import Card from './Card';
import { literature } from '../../TextData';

const ExploreAfrica = () => {
  return (
    <div>
      <h2>Explore Africa</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3'>
        <Card data={literature}/>
      </div>
    </div>
  )
}

export default ExploreAfrica
