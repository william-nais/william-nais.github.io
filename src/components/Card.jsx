import React from 'react'

const Card = ({ heading, content, footer }) => {
  return (
    <div>
        <h2 className='card-heading'>{heading}</h2>
        <div>
            {content}
        </div>
        <footer>{footer}</footer>
    </div>
  )
}

export default Card