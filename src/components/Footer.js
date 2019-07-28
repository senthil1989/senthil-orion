
import React,{Component} from 'react';
import './componentcss.css';
import MyContext from './Mycontext';
import Paginator from './Paginator';


const Footer =(props)=>{

  return(
    <MyContext.Consumer>
    {(value)=><nav className="paginationstyle"aria-label="Page navigation example">
  <ul class="pagination">
  <Paginator value={props.pagicount} paginatorclick={props.onpageclick}/>
  </ul>
</nav>
  }
    </MyContext.Consumer>
  )
}
export default Footer;
