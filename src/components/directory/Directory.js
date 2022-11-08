import React from 'react'
import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directorySelector'
import Menuitem from '../../components/menu-item/Menuitem'
import './Directory.css'


const File = () => {
  const data = useSelector(state => state)
  // console.log(data);
  const sections = selectDirectorySections(data)
  // console.log(sections);
  return (
    <div className='directory-menu'>
      {sections.map(({ id,title, imageUrl, size,  linkUrl }) => {                
        return (
          <Menuitem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        )
      }

      )}
    </div>

  )
}

export default File



