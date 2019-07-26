import React,{Component} from 'react';
import './componentcss.css';
import MyContext from './Mycontext';

const Productdescr =({record})=>{
  return(
    <MyContext.Consumer>
    {(value)=><div>
      <img className="productsize" src={value.items['Poster']} />
      <h3>{value.items["imdbID"]}</h3>
      <h4>{value.items['Type']}</h4>
    </div>
  }
    </MyContext.Consumer>
  )
}
export default Productdescr;
