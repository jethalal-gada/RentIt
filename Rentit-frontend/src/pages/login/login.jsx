import './login.css';
import logo from '../../images/Logo.svg';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import { SiFacebook } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Animation from '../../components/cssAnimation/animation';
import { LoginSocialGoogle } from 'reactjs-social-login';
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDetails from '../userDetails/userDetails';
import { useGlobalContext } from '../../Context';

const Login = () => {
  // const { logIn, setLogIn } = useGlobalContext();
  const { setLoginObj } = useGlobalContext();
  const navigate = useNavigate();
  // const [loginData, setLoginData] = useState(null);

  // const url = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_LOCALHOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_ADDRESS}/user`;
  // console.log(url);

  // useEffect(() => {
  //   console.log(loginData);
  //   const saveUser = async () => {
  //     console.log('storing details');
  //     try {
  //       await fetch(url, {
  //         method: 'POST',
  //         body: JSON.stringify(loginData),
  //         headers: {
  //           'Content-type': 'application/json; charset=UTF-8',
  //         },
  //       });
  //       navigate('/');
  //     } catch (err) {
  //       console.log(err, 'Fail');
  //     }
  //   };
  //   if (loginData) saveUser();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loginData]);

  if (sessionStorage.getItem('userDetails')) {
    const data = JSON.parse(sessionStorage.getItem('userDetails'));
    return <UserDetails {...data} />;
  }

  return (
    <>
      <div className='loginBox'>
        <div className='signInTop signIn'>
          <div className='logoBox'>
            <Link to='/'>
              <img className='signInLogo ' src={logo} alt='logo' />
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
            client_id={`${process.env.REACT_APP_CLIENT_ID}`}
            scope='openid profile email'
            discoveryDocs='claims_supported'
            access_type='offline'
            onResolve={({ provider, data }) => {
              // setLogIn(true);
              setLoginObj(data);
              // setLoginData(data);
              sessionStorage.setItem(
                'userDetails',
                JSON.stringify({
                  email: data.email,
                  name: data.name,
                  family_name: data.family_name,
                  given_name: data.given_name,
                  picture: data.picture,
                })
              );
              navigate('/');
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
