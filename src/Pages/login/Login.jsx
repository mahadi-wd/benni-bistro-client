import { useEffect, useRef, useState } from 'react';
import bgImg from '../../assets/others/authentication.png'
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const currentValue = useRef(null)
    const [disble, setDisable] = useState(true)
    
    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin = e => {
        e.preventDefault()

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }
    // console.log(validateCaptcha());
    const handleInputValue = () => {
        const user_captcha_value = currentValue.current.value;
        if(validateCaptcha(user_captcha_value)){
           setDisable(false)
        }
        else{
            setDisable(true)
        }
    }
    return (
        <div style={{backgroundImage: `url(${bgImg})`}} className="hero min-h-screen max-w-screen-lg mx-auto mt-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left ">
            <img src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm ">
        
            <form onSubmit={handleLogin} className="card-body">
            <div><h3 className='text-black font-bold text-xl text-center'>Login</h3></div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-black">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered  bg-white text-black" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered bg-white text-black" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
             

              <LoadCanvasTemplate/>
             
         
                <input  type="text" ref={currentValue} placeholder="Type the Captcha above" className="input input-bordered bg-white text-black mt-3" required />
                <button onClick={handleInputValue} className=' btn btn-sm btn-outline '>Confirm</button>
              </div>
              <div className="form-control mt-6">
                <button disabled={disble} className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;