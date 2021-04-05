import React from 'react';
import classes from './AuthentificationCSS.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pathLogo from "../../assets/pp.jpg";
import { Link} from 'react-router-dom';

const AuthentificationDesign = () => {
    return (
        <body className={classes.body}>
            <div className={classes.container}>
               <form className={classes.formsignin + ' ' + "rounded - sm shadow"} >
                   <div className="mx-auto" style={{ width: "200px" }}><img className={"mb-4" + ' ' + classes.logo} src={pathLogo} alt="Logo" /></div>
            <div className="tab-content">
                <div id="login" className="container tab-pane active">
                                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                           <input type="email" id="inputEmail" className="form-control mb-4" placeholder="Email address" required />
                         
                                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                                    <input type="password" id="inputPassword" className="form-control mb-4" placeholder="Password" required/>
                            <div className={classes.oneline + ' '+"mb-2"}>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" value="remember-me"/> Remember me </label>
                                             </div>
                               <a className={classes.forgot} href="#">Forgot password?</a>
                                           </div>

                            <Link to={'/acceuil'}> <button className={"btn btn-lg btn-dark btn-block"}>Login</button></Link>
                                                <p className="mt-4 mb-0 text-muted small">IA Creator works best with Google Chrome, Mozilla Firefox and Safari</p>
                                            </div>

                                      
                                       </div>
            
               </form>
            </div>
               
  
</body>
                         );
   
}

export default AuthentificationDesign;                