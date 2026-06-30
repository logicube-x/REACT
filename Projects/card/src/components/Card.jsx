import React from 'react'
import {Bookmark} from "lucide-react" 
function Card(props) {

  // console.log(props.company)
  return (
    <div className="card">
      <div className="top">
        <img src={props.img} alt="" />
        <button>
          Save <Bookmark size={10} />
        </button>
      </div>

      <div className="cen">
        <h3>
          {props.company} <span>{props.day}</span>
        </h3>
        <h2>{props.post}</h2>

        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.loc}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default Card