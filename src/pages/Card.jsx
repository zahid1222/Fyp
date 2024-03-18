import React from "react";
const Card=(props)=> {
    return (<>
         <div className="col-md-4 col-10 mx-auto">
        <div class="card" >
      <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <  div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
  </div>
  </div>
      </>
    );
  }
  
  export default Card;