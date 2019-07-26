import React,{Component} from 'react';
import MyContext from './Mycontext';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      title:'',
    }
    this.handleChange=this.handleChange.bind(this);
    this.onSearchchild=this.onSearchchild.bind(this);
  }
handleChange=(e)=>{
  this.setState({title: e.target.value})

}
  onSearchchild(){
    var moviename=this.state.title
    return this.props.onSearch(moviename)
  }
render(){
    console.log(this.state.title);
      return(
<MyContext.Consumer>
      {(value) =>  <div>
        <header className="section-header">
<section className="header-main">
	<div className="container">
<div className="row align-items-center">
	<div className="col-lg-3">
	<div className="brand-wrap">
		<img className="logo" src="images/logo-dark.png" />
		<h2 className="logo-text">LOGO</h2>
	</div>
	</div>
	<div className="col-lg-6 col-sm-6">
		<form action="#" className="search-wrap">
			<div className="input-group">
			    <input type="text" className="form-control" id="unique" value={value.title} placeholder="Search" onChange={this.handleChange}/>
			    <div className="input-group-append">
			      <button className="btn btn-primary" type="submit">
			        <i className="fa fa-search" onClick={()=>this.onSearchchild()}></i>
			      </button>
			    </div>
		    </div>
		</form>
	</div>
	<div className="col-lg-3 col-sm-6">
		<div className="widgets-wrap d-flex justify-content-end">
			<div className="widget-header">
				<a href="#" className="icontext">
					<div className="icon-wrap icon-xs bg2 round text-secondary"><i className="fa fa-shopping-cart"></i></div>
					<div className="text-wrap">
						<div>hello{value.orderss}</div>
					</div>
				</a>
			</div>
			<div className="widget-header dropdown">
				<a href="#" className="ml-3 icontext" data-toggle="dropdown" data-offset="20,10">
					<div className="icon-wrap icon-xs bg2 round text-secondary"><i className="fa fa-user"></i></div>
					<div className="text-wrap">
						<small>{value.username}</small>
						<span>Login <i className="fa fa-caret-down"></i></span>
					</div>
				</a>
				<div className="dropdown-menu dropdown-menu-right">
					<form className="px-4 py-3">
						<div className="form-group">
						  <label>Email address</label>
						  <input type="email" className="form-control" placeholder="email@example.com"/>
						</div>
						<div className="form-group">
						  <label>Password</label>
						  <input type="password" className="form-control" placeholder="Password"/>
						</div>
						<button type="submit" className="btn btn-primary">Sign in</button>
						</form>
						<hr className="dropdown-divider" />
						<a className="dropdown-item" href="#">Have account? Sign up</a>
						<a className="dropdown-item" href="#">Forgot password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
	</div>
</section>




</header>
        </div>}
</MyContext.Consumer>
      )
}
}
export default Header;
