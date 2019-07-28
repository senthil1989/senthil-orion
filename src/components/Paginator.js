import React,{Component} from 'react';
import './componentcss.css';
import MyContext from './Mycontext';


const Paginator =(props)=>{

  const paginator=(val)=>{
    console.log(val)
    return props.paginatorclick(val);
  }
  return props.value.map((key,index)=><li class="page-item"key={index} onClick={()=>paginator(key)}><a class="page-link" href="#">{key}</a></li>)
}
export default Paginator;
