import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Products from './components/Products.js';
import Login from './components/Login.js';
import Footer from './components/Footer.js';
import Message from './components/Message.js';
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
      pagenum:null,
      pcount:[1,2,3,4,5]

    }
    let cusstate=this.state
    this.updateScreenstate=this.updateScreenstate.bind(this);
      this.pagehandle=this.pagehandle.bind(this);
  }
  componentWillMount(){
    this.fetchdata();
  }
    fetchdata=()=>{

      if(this.state.movietitle == null){
        console.log(this.state.movietitle)
      fetch('http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s=Batman')
    .then(res=>res.json())
    .then(data=>this.setState({data:data.Search}))
    }
    else{
      console.log(this.state.movietitle)
      fetch('http://www.omdbapi.com/?i=tt3896198&apikey=fa281222'+'&s='+this.state.movietitle+'&page='+this.state.pagenum)
    .then(res=>res.json())
    .then(data=>{
      console.log(data.Response)
      if(data.Response ==='True'){
      return this.setState({data:data.Search})
      }
      else{
        console.log(data)

      return this.setState({data:data.Error},()=>{
        this.updateScreenstate({screenVal:'messageresult',Username:this.state.Username})
      });
      }
    }
    )
    }
    }


updateScreenstate(obj) {
    this.setState({screenState:obj.screenVal,Username:obj.Username,unIndex:obj.unIndex});
  }
selectItemslength=(itemlen)=>{
  this.setState({orders:itemlen});
  console.log(this.state.orders)
}
seachUpdate=(titlename)=>{
  this.setState({movietitle:titlename},() => {
  console.log(this.state.movietitle);
  this.fetchdata();
this.updateScreenstate({screenVal:'productPage',Username:this.state.Username})})




}
pagehandle=(num)=>{
  this.setState({pagenum:num},() => {
  console.log(this.state.pagenum);
  this.fetchdata();})
}


  render() {
    return (
      <MyContext.Provider value={{username:this.state.Username,orders:this.state.orders,items:this.state.data,}}>
        <div>
        {this.state.screenState === 'loginPage'? <Login updatescreen={this.updateScreenstate}/> : ""}
        {this.state.screenState !=='loginPage'?<Header onSearch={this.seachUpdate}/>:null}
        {this.state.screenState === 'productPage'?<Products name ={this.state.Username} selecteditems={this.selectItemslength}updatescreen={this.updateScreenstate}/> : ""}
        {this.state.screenState === 'productPage'?<Footer pagicount={this.state.pcount} onpageclick={this.pagehandle}/> :""}
        {this.state.screenState === 'messageresult'?<Message result={this.state.data}/> :""}
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
