import React,{Component} from 'react';
import './componentcss.css';
import MyContext from './Mycontext';

class Productcard extends Component{
  constructor(props){
    super(props);
  }

  selectItems=()=>{
    this.props.selectItems(this.props.index);
  }
  static MyContext =MyContext;
  render(){
  return(
<MyContext.Consumer>

  {(value) =>  <div className="col-sm mobres">
      <figure className="figure">
        <img className="productsize" src={value.items[this.props.record]["Poster"]} />
        <figcaption className="figure-caption">Name:{value.items[this.props.record]["Title"]}</figcaption>
        <figcaption className="figure-caption">Year:{value.items[this.props.record]["Year"]}</figcaption>
        <figcaption className="figure-caption">imdbID:{value.items[this.props.record]["imdbID"]}</figcaption>
        <figcaption className="figure-caption">Type:{value.items[this.props.record]["Type"]}</figcaption>
      </figure>
    </div>

}
  </MyContext.Consumer>
  )
}
}
export default Productcard;
