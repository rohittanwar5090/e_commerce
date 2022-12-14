import React from 'react';

import CollectionItem from '../collection-item/Collection-item';

import './Collection-preview.css';

const CollectionPreview = ({ title, items }) => {
  console.log('from collection preview',items);
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
};

export default CollectionPreview;
