import React from 'react'
import './banner.css'
import { Carousel } from 'react-bootstrap'

const Banner = () => {
  return (
      <Carousel fade interval={3000} className='banner'>
          <Carousel.Item>
              <div className='img-1 w-100'></div>
          </Carousel.Item>
          <Carousel.Item>
              <div className='img-2 w-100'></div>
          </Carousel.Item>
          <Carousel.Item>
              <div className='img-3 w-100'></div>
          </Carousel.Item>
      </Carousel>
  )
}

export default Banner