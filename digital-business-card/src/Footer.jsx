import Twitter from './assets/Twitter Icon.svg';
import Facebook from './assets/Facebook Icon.svg';
import Instagram from './assets/Instagram Icon.svg';
import GitHub from './assets/GitHub Icon.svg';

export default function Footer() {
  return (
    <div className='icon-container'>
      <a href='www.google.com'>
        <img src={Twitter} alt='Twitter icon' />
      </a>
      <a href='www.google.com'>
        <img src={Facebook} alt='Facebook icon' />
      </a>
      <a href='www.google.com'>
        <img src={Instagram} alt='Instagram icon' />
      </a>
      <a href='www.google.com'>
        <img src={GitHub} alt='GitHub icon' />
      </a>
    </div>
  );
}
