import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collection from '../collection/CollectionPage'
import CollectionOverview from '../../components/collectionoverview/CollectionOverview'

const Shop = () => {
  return (
    <div className='shop-page'>
       <Routes>
        <Route path="/" element={<CollectionOverview />} />
        <Route path='/:categoryId' element={<Collection/>}/>
      </Routes>
    </div>
  )
}

export default Shop