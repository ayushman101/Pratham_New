import { Button } from "@mui/material";
import "./Home.css";
import homeImage from "../../assets/Divine-mother-22.08.2023-OK.jpg";
import homeCarouselImage from "../../assets/BHAJAGOVINDAM-OK.png";
import Carousel from "react-material-ui-carousel";
const Home = () => {
  return (
    <div className="home">
      <div className="home_image">
        <Button variant="contained" sx={{ width: "13rem" }}>
          LOGIN
        </Button>
        <Button variant="contained" sx={{ width: "13rem" }} color="success">
          Become a member
        </Button>
      </div>
      <div className="home_grid">
        <div className="home_grid_carousel">
          <Carousel interval={3000}>
            <img src={homeImage} alt="" width={"100%"} />
            <img src={homeCarouselImage} alt="" width={"100%"} />
          </Carousel>
        </div>
        <div>
          <h2>
            Upcoming Discourse: <br />
            Divine Mother
          </h2>
          <Button variant="contained" sx={{ width: "80%" }}>
            Register Now
          </Button>
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ width: "80%" }}
          >
            Attend Class
          </Button>
        </div>
        <img src={homeCarouselImage} alt="" className="home_carousel_image" />
        <img src={homeCarouselImage} alt="" className="home_carousel_image" />
        <img src={homeCarouselImage} alt="" className="home_carousel_image" />
      </div>
      <div className="home_para">
        <h2>Founder cum Director&apos;s message</h2>
        <p>
          I realized the need for a platform as an aftercare for a lot Of people
          and also for family/ friends/ associates and anyone else who needs it
          for developing meaning and purpose in life. Being spiritually
          inclined, I often go for many camps/ discourses/ workshops on positive
          living etc. conducted by all kinds of institutions to pick up the gems
          for myself and my loved ones. Therein I realized that generally every
          institution barring a limited few, try to thrust down their ideologies
          on the buffet era people!! Thus the, idea of Prasthan Yatnam was born
          within me, influenced greatly by the all embracing Sanatan Dharma.
          What is Prasthan Yatnam: It is a humble endeavor to develop a movement
          wherein every Thursday members gather to sit in group meditation with
          the music of different sects. Thereafter a brief input is given about
          the sect whose music is being used, followed by sharing of experiences
          by the participants. (Prasthan Yatnam has now been registered as a
          society on 21/10/2022).
        </p>
      </div>
    </div>
  );
};

export default Home;
