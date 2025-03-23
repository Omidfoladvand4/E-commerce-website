import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='description-box'>
      <div className="description-box-navigator">
        <div className="description-box-nav-box ">Description</div>
        <div className="description-box-nav-box fade">Reviwes(2025)</div>
      </div>
      <div className="description-box-description">
        <p>        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur dolorum officia necessitatibus. At eos quae, officia deserunt, ad, cumque cupiditate sint tenetur omnis aperiam ipsa neque reiciendis odit quo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellat non voluptas itaque laboriosam ipsum, ratione provident reiciendis ullam cupiditate totam eveniet maiores quis dolore.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox