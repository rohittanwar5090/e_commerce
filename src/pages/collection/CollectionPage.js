import React from 'react'
import './CollectionPage.css'
import CollectionItem from '../../components/collection-item/Collection-item'
import {selectCollection} from '../../redux/shop/shopSelector'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CollectionPage() {
  const data = useSelector(state => state)  
  const { categoryId } = useParams()  
  const collection = selectCollection(categoryId)(data)
  const {title , items } = collection
  
  return (
    <div className='collection-page'>
        <h2 className="title">{title}</h2>
        <div className="items">
          {
            items.map(item =>(
              <CollectionItem key={item.id} item ={item} />
            ))
          }
        </div>
    </div>
  )
}


export default CollectionPage
