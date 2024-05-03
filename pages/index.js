import Layout from '../components/Layout';
import Button from '../components/Button';
import Maincard from '../components/Maincard';
import Promises from '../components/Promises';
import Video from '../components/Video';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Customers from '../components/Customers';
import Impact from '../components/Impact';

export default () => {
  return (
    <Layout>
      <div className="Top">
        <div className="Top-bg"></div>
        <div className="container">
          <h1 className="Top-title">
            Top notch service is our main auto motive
          </h1>
          <Button text="MAKE AN APPOINTMENT" />
        </div>
      </div>
      <Maincard
        subject="WHO WE ARE"
        title="Orcutt Auto Repair"
        text="Committed to Excellence in Auto Repair
            At Orcutt Auto Repair, we provide professional and reliable vehicle maintenance services. 
          Our team of certified technicians is dedicated to ensuring your vehicle performs at its best. 
          Trust us to handle everything from routine inspections to complex repairs with precision and care."
        img="/first-cover.png"
        offLinks={{ display: 'none' }}
        bg={{
          background: 'url(/maincard-bg.png) no-repeat center center / cover',
        }}
      />
      <Promises />
      <Video />
      <Services />
      <Appointment />
      <Maincard
        subject="GALLERY & LIVE STREAMS"
        title="Check out our hard workers"
        link1="Gallery"
        link2="Live stream: Bay 1"
        link3="Live stream: Bay 2"
        link4="Live stream: Bay 3"
        img="/gallery-pic.png"
        offText={{ display: 'none' }}
      />
      <Customers />
      <Impact />
    </Layout>
  );
};
