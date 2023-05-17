/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './AppFooter.css';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

const AppFooter = () => {
  return (
    <>
      <section id='footer'>
        <div class='main-footer'>
          <div class='logoinfo' data-aos='fade-up'>
            <h2>Rentit</h2>
            <p>By Akash</p>*
            <div class='contact-details'>
              <h1>Contact Us</h1>
              <li>
                <div class='fa fa-phone'></div>
                <a href='tel:+919326048690'>+91 9140853009</a>
              </li>
              <li>
                <div class='fa fa-envelope'></div>
                <a href='mailto:yourmail@gmail.com'>ak45hhere@gmail.com</a>
              </li>
            </div>
          </div>

          <div class='com ' data-aos='fade-up'>
            <h1>About</h1>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Projects</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div class='socialinfo' data-aos='fade-up'>
            <h1>Social Media</h1>
            <div class='sociallogos'>
              <div class='logobox'>
                <a
                  href='https://www.linkedin.com/in/akash-singh-171227255/'
                  target='_blank'
                >
                  <AiOutlineLinkedin className='icon in' size={25} />
                </a>
                <a href='https://github.com/a5h101' target='_blank'>
                  <AiOutlineGithub className='icon git' size={25} />
                </a>
                <a href='https://www.instagram.com/aka5hhere/' target='_blank'>
                  <AiOutlineInstagram className='icon insta' size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer>© Rentit Copyright 2021 All Rights Reserved</footer>
      </section>
    </>
  );
};
export default AppFooter;
