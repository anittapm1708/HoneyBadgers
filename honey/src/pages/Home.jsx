import Navbar from "../components/Navbar";
import Part from "./Part";
import "../css/Home.css";
const Home = () => {
  let imgs = [
    "https://honeybadgersco.com/static/media/img1.fabe6432c395e3996808.jpg",
    "https://honeybadgersco.com/static/media/img2.755b4968f855993e9311.jpg",
    "https://honeybadgersco.com/static/media/img3.27c9c27320f08dad4201.jpg",
  ];
  return (
    <div className="main">
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
      </div>

      <div className="particles-bg" style={{ position: "relative", zIndex: 1 }}>
        <Part />
        <div className="main-content">
          <h1>HONEYBADGERSCO</h1>
          <h3>PASSION.POSSIBILITIES.INNOVATIONS</h3>
        </div>
      </div>
      <div className="content2">
        <div className="content2-desc">
          <h4>PROJECT</h4>
          <p>
            Our company is constantly aiming on acquiring good projects and
            provide value to the customers, we have a brilliant team to assist
            in making it happen.
          </p>
        </div>
        <div className="content2-desc">
          <h4>QUALITY</h4>
          <p>
            HoneyBadgers believes in delivering quality in its work and be the
            best amoung the competitors. The company is focused on providing
            value to every customer.
          </p>
        </div>
        <div className="content2-desc">
          <h4>NETWORK</h4>
          <p>
            We believe in Networking more than on one time customers, Our
            company is always looking for networking opportunities and are
            always open for partnering with enthusiasts.
          </p>
        </div>
      </div>
      <div className="content3">
        <h1>The HoneyBadgers</h1>
        <div className="people">
          <div className="single-person">
            <img
              src={imgs[0]}
              alt=""
              className="image"
              width="100%"
              height="100%"
            ></img>
            <h3>Nikhil Memane</h3>
            <h4>CEO & Founder</h4>
          </div>
          <div className="single-person">
            <img
              src={imgs[1]}
              alt=""
              className="image"
              width="100%"
              height="100%"
            ></img>
            <h3>Aditya Harikumar</h3>
            <h4>CTO & Founder</h4>
          </div>
          <div className="single-person">
            <img
              src={imgs[2]}
              alt=""
              className="image"
              width="100%"
              height="100%"
            ></img>
            <h3>Nisha H. Shakya </h3>
            <h4>CDO & Creative Head</h4>
          </div>
        </div>
      </div>
      <div className="content4">
        <p>
          HONEYBADGERSCO is a technology and digital IT Consultation firm
          specializing in innovative software solutions. Which is Known for
          delivering high-quality and exceptional customer service. We believe
          that technology has the power to change the world, and we're driven to
          play a role in shaping its future. Whether it's making it easier for
          people to connect or improving how businesses operate, our goal is to
          use technology to positively impact people's lives.
        </p>
      </div>
      <div className="footer">Copyright © HoneyBadgersCo Pvt. Ltd.</div>
    </div>
  );
};
export default Home;
