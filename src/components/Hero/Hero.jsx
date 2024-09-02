import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1 >
             Live comfortably in style <br />
              affordable luxury 
              <br />living property
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Unlock the door to your dream home – schedule a viewing today</span>
            <span>Charming and cozy the ideal space for you!</span>
          </div>

          <SearchBar/>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
          >
            <img src="./hero image.webp" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
