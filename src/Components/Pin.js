import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons'

function Pin({pinSize,imgSrc,name,link}){
    return <div className={`pin ${pinSize}`}>

        <img className="mainPic" src= {imgSrc} alt=""/>

        <div className="content">
            <h3>{name}</h3>

            <div className='search'>
            <a href= {link}>
            <FontAwesomeIcon icon={faShare} />
            </a>
          </div>
        </div>
    </div>;
}

export default Pin;