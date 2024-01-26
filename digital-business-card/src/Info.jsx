import andrewImage from './assets/andrew.jpg';
import mail from './assets/Mail.svg';
import linkedin from './assets/linkedin.svg';

export default function Info() {
  return (
    <>
      <div className='info-image-container'>
        <img src={andrewImage} alt='andrew image' className='info-photo' />;
      </div>
      <div className='info-container'>
        <h1 className='info-name'>Tan Wee Kiat</h1>
        <p className='info-career'>Frontend Developer</p>
        <a href='www.google.com' className='info-website'>
          anderutan.com.my
        </a>
      </div>
      <div className='info-buttons'>
        <a href='www.google.com' className='info-email'>
          <img src={mail} alt='email icon' />
          Email
        </a>
        <a href='www.google.com' className='info-linkedin'>
          <img src={linkedin} alt='linkedin icon' />
          Linkedin
        </a>
      </div>
    </>
  );
}
