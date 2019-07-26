import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Products from './components/Products.js';
import Login from './components/Login.js';
import Productdescr from './components/Productdescr.js';
import MyContext from './components/Mycontext';

class App extends Component {
  constructor(){
    super();
    this.state={
      screenState:'loginPage',
      Username:'',
      unIndex:null,
      orders:null,
      data:null,
      movietitle:null,

    }
    let cusstate=this.state
    this.updateScreenstate=this.updateScreenstate.bind(this);
  }
  componentDidMount(){
    this.fetchdata();
  }
    fetchdata=()=>{

      if(this.state.movietitle == null){
        console.log(this.state.movietitle)
      fetch('http://www.omdbapi.com/?i=tt3896198&apikey=fa281222')
    .then(res=>res.json())
    .then(data=>this.setState({data:data}))
    }
    else{
      console.log(this.state.movietitle)
      fetch('http://www.omdbapi.com/?i=tt3896198&apikey=fa281222/ '+'&s='+this.state.movietitle)
    .then(res=>res.json())
    .then(data=>this.setState({data:data}))
    }
    }

  // updateScreenstate (screenVal,Username){
  //   this.setState({screenState:screenVal,Username:Username});
  // }

updateScreenstate(obj) {
    this.setState({screenState:obj.screenVal,Username:obj.Username,unIndex:obj.unIndex});
  }
selectItemslength=(itemlen)=>{
  this.setState({orders:itemlen});
  console.log(this.state.orders)
}
seachUpdate=(titlename)=>{
  this.setState({movietitle:titlename});
  this.fetchdata();
}

  // renderproductdes =()=>{
  // var result = data.arrayOfProducts.map( contents => <Productdescr className="col-sm" key={contents.name} record ={contents} /> )
  // return result
  // }
  render() {
  console.log(this.state.movietitle)
    return (
      <MyContext.Provider value={{username:this.state.Username,orders:this.state.orders,items:this.state.data}}>
        <div>
        {this.state.screenState === 'loginPage'? <Login updatescreen={this.updateScreenstate}/> : ""}
        {this.state.screenState !=='loginPage'?<Header onSearch={this.seachUpdate}/>:null}
        {this.state.screenState === 'productPage'? <Products name ={this.state.Username} selecteditems={this.selectItemslength}updatescreen={this.updateScreenstate}/> : ""}
        {this.state.screenState === 'Productdescr'? <Productdescr /> : ""}
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
