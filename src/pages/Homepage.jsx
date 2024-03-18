import React from 'react';
import Card from './Card';
import data from './data';
import "./Payment.css";
const Services=()=> {
  return (<>
    <div className="my-5">
      <center>
        <h1 className="center">Our services</h1>
        <form>
            <input type="text"  placeholder='Explore Comfort Venue'style={{width:"30%"}} ></input>
            <button type="submit" className="submit-button" style={{width:"20%"}}>Search</button>
        </form>
        </center>
    </div>
    <div className='container-fluid mb-5'>
    <div className="row">
    <div className="col-10 mx-auto">
    <div className="row gy-4">
    {
       data.map((val,ind)=>{
        return <Card 
                imgsrc={val.imgsrc}
                title={val.title}/>
       })
    }
  </div>
  </div>
</div>
    </div>
    
    </>
  );
}

export default Services;

