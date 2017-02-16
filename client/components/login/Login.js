import React from 'react';
import axios from 'axios';

class Login extends React.Component {
 constructor(props) {
   super(props)


 }

 // componentDidMount() {
 //   axios.get('auth');
 // }

 render() {


   return (
     <div >


       <a href='/auth'><h4>Login</h4></a>


     </div>
   )
 }
}

export default Login;
