import React,{Component} from 'react';
import './componentcss.css';
import MyContext from './Mycontext';

class Productcard extends Component{
  constructor(props){
    super(props);
  }
  loginValidates =()=>{
    this.props.changeprod({screenVal: 'Productdescr', unIndex:this.props.index});
  }
  selectItems=()=>{
    this.props.selectItems(this.props.index);
  }
  static MyContext =MyContext;
  render(){
  return(
<MyContext.Consumer>

  {(value) =>  <div className="col-sm">
      <figure className="figure" onClick={this.loginValidates}>
        <img className="productsize" src={value.items["Poster"]} />
        <figcaption className="figure-caption">Name:{value.items["Title"]}</figcaption>
        <figcaption className="figure-caption">Year:{value.items["Year"]}</figcaption>
        <figcaption className="figure-caption">imdbID:{value.items["imdbID"]}</figcaption>
        <figcaption className="figure-caption">Type:{value.items["Type"]}</figcaption>
      </figure>
    </div>

}
  </MyContext.Consumer>
  )
}
}
export default Productcard;
