import React from 'react'
import CollectionPreview from '../collection-preview/CollectionPreview';

import { useSelector } from 'react-redux';
import { selectCollections } from '../../redux/shop/shopSelector';

function CollectionOverview() {
    const data = useSelector(state => state);
    // console.log(data);
    const collections = selectCollections(data)
    console.log('from co', collections);
    return (
        <div className='collection-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

export default CollectionOverview