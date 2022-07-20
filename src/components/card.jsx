import React from "react";
import Avatar from "./avatar";
import Details from "./detail";

function cards(props) {
    return <div className="card">
        <div className="top">
            <h2 className="name">{props.name}</h2>
           <Avatar img ={props.img} />
        </div>
        <div className="bottom">
       <Details detailInfo={props.tel}  />
       <Details detailInfo={props.email} />
       </div>
    </div>
};

export default cards;