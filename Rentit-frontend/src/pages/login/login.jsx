import './login.css';
import logo from '../../images/Logo.svg';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import { SiFacebook } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Animation from '../../components/cssAnimation/animation';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Loading from '../../images/loading.svg';
// import { useGlobalContext } from '../../authContext';

const Login = () => {
  // const { logIn, setLogIn } = useGlobalContext();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(null);
  const url = 'http://127.0.0.1:2000/api-rentit/v1/login';

  const handleLogOut = () => {
    sessionStorage.removeItem('userDetails');
    // setLogIn(false);
    // console.log(logIn);
    navigate('/');
  };

  useEffect(() => {
    console.log(loginData);
    const saveUser = async () => {
      console.log('storing details');
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(loginData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        console.log(response, 'Sucess');
        // setLogIn(true);
        // console.log(logIn);
        navigate('/');
      } catch (err) {
        console.log(err, 'Fail');
      }
    };
    if (loginData) saveUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData]);

  if (sessionStorage.getItem('userDetails')) {
    const data = JSON.parse(sessionStorage.getItem('userDetails'));
    return (
      <>
        You are logged in
        <div>Hi {data.given_name}</div>
        <button onClick={handleLogOut}>Log Out</button>
      </>
    );
  }

  return (
    <>
      <div className='loginBox'>
        <div className='signInTop signIn'>
          <div className='logoBox'>
            <Link to='/'>
              <img className='signInLogo logo' src={logo} alt='logo' />
            </Link>
          </div>
          <div className='line lineLogin'></div>
        </div>
        <div className='wlcmTxt'>
          <h3> Choose any Login method</h3>
        </div>
        <Animation />
        <div className='signIn'>
          <LoginSocialGoogle
            client_id={
              '980638331446-9io0sa1et63bgfsqu2n0282dbag0062g.apps.googleusercontent.com'
            }
            scope='openid profile email'
            discoveryDocs='claims_supported'
            access_type='offline'
            onResolve={({ provider, data }) => {
              // setLoader(true);
              setLoginData({ ...data });
              sessionStorage.setItem('userDetails', JSON.stringify(data));
              console.log(loginData);
            }}
            onReject={(err) => {
              console.log(err, 'Failed');
            }}
          >
            <button className='loginBtn'>
              <FcGoogle className='g signInIcons' size={25} />
              Login with Google
            </button>
          </LoginSocialGoogle>

          <button className='loginBtn'>
            <GoMarkGithub className='gh signInIcons' size={25} />
            Login with GitHub
          </button>
          <button className='loginBtn'>
            <SiFacebook className='fb signInIcons' size={25} />
            Login with Facebook
          </button>
        </div>
        <div className='signInTxt signIn'>
          All you personl detials are safe with us.
        </div>
      </div>
    </>
  );
};
export default Login;
