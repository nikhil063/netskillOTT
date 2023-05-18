import React from 'react'
import { Link } from 'react-router-dom'

const Categorycard = ({image, category}) => {
  return (
    <>

    <Link>
        <div style={{ position: 'relative'}}>
          <div  style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              height: '330px',
              width:"300px",
              position: 'relative',
              borderRadius:"12px"
            }}
          >
            <div
              className="overlay"
              style={{
                position: 'absolute',
                width: '300px',
                height: '330px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderRadius:"12px"
              }} ></div>
           <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#FFFFFF', textAlign: 'center', fontSize:"32px", fontFamily:"Overpass", fontWeight:"600"}}>{category}</p>
          </div>
        </div>
    </Link>

    
    </>
  )
}

export default Categorycard
