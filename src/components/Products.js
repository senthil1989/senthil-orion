import React,{Component} from 'react';
import Productcard from './Productcard.js';
import Login from './Login.js';
import MyContext from './Mycontext';

class Products extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
    }
  }
  selectItems =(index)=>{
  console.log(this.props.datas)
  // this.state.items.push(data.arrayOfProducts[index]);
  //
  // this.state.orderrs=this.state.items.length
  // console.log(this.state.orderrs)
  // this.props.selecteditems(this.state.orderrs)
  }
  getKeys=(itemskey)=>{
    return Object.keys(itemskey)
  }

  rendercomp =(item)=>{

    console.log(item);
    var Objkeys=this.getKeys(item);


     var result = Objkeys.map( (contents,index) => <Productcard index={index}  selectItems={this.selectItems} changeprod={this.props.updatescreen} key={index} record ={contents} items={item}/> )
    return result
  }

    render(){
      return(
        <MyContext.Consumer>
        {(value) =>
          <div className="container-fluid">
            <div class="row">
               {this.rendercomp(value.items)}
            </div>
          </div>
        }
        </MyContext.Consumer>
      )
    }
}
export default Products;
