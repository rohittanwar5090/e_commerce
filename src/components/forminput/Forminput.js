import React from 'react'
 import './Forminput.css'

function Forminput({handleChange , label , ...otherprops}) {
  // console.log(otherprops);
  return (
    <div className='gropu'>
        <input className='form-input' onChange={handleChange} {...otherprops} />
        {
            label ?
            (
                <label className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ):
            null
        }
    </div>
  )
}

export default Forminput