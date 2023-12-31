import React from 'react'
import { FaCodePullRequest } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-orange'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <div style={{width : "100%", height : "100%",  borderRadius : "50%" }}  />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
           <FaRegCircle size={15} /><p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-orange"> <FaCodePullRequest size={20} /> </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-orange"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;
