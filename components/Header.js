import Button from './Button';
import Navigation from './Navigation';

export default () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header-left">
          <div className="Header-left-logo">
            <a href="">
              <img src="/website-logo.svg" class="logo" />
            </a>
          </div>
        </div>
        <div className="Header-right">
          <div className="Header-right-section">
            <img className="icon" src="/time.svg" alt="" />
            <div className="text">
              SERVICE HOURS
              <br />
              Mon - Sat: 7:00 am - 6:00 pm
            </div>
          </div>
          <div className="Header-right-section">
            <img className="icon" src="/phone.svg" alt="" />
            <div className="text">
              CALL US
              <br />
              (555) Car-Repair
            </div>
          </div>
          <div className="Header-right-button">
            <Button text="MAKE AN APPOINTMENT" />
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};
