import React,{Component} from 'react';
import './componentcss.css';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      items:'',
      name:'senthil',
      password:'tony'
    }
  }
  loginValidate(e){
  //  if(this.username.value ===this.state.name && this.password.value ===this.state.password){
  //   this.props.updatescreen('productPage',this.username.value );
    this.props.updatescreen({screenVal: 'productPage', Username: this.username.value});

  //}
}

  render(){
    return(
      <div className="loginlayout">
        <div className="logincenter">
          <form className="form-3">
            <p className="clearfix">
              <label for="login">Username</label>
              <input type="text" name="login" id="login" placeholder="Username"ref={(input) => {this.username = input}}/>
            </p>
            <p className="clearfix">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Password"ref={(input) => {this.password = input}} />
            </p>
            <p className="clearfix">
              <input type="checkbox" name="remember" id="remember" />
              <label for="remember">Remember me</label>
            </p>
            <p class="clearfix">
              <input type="submit" name="submit" value="Sign in" onClick={()=>this.loginValidate()} />
            </p>
        </form>
        </div>
      </div>
    )
  }
}
export default Login;
