import { Button } from "@mui/material";
import "./Home.css";
import homeImage from "../../assets/Divine-mother-22.08.2023-OK.jpg";
import homeCarouselImage from "../../assets/BHAJAGOVINDAM-OK.png";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";
import isTokenExpired  from "../middlewares/isTokenExpired"
import {useEffect,useState} from 'react';
import {Link} from "react-router-dom";


const Home = () => {


  const [trendCourses, setTrendCourses] = useState([]);
  const tokenKey = "prasthan_yatna_jwt"

  var bl = isTokenExpired(tokenKey)

	

  const navigate = useNavigate();


 useEffect( () => {
	
	 fetch('http://localhost:3001/api/trend_course', {
		method:'GET',
		 headers: {
			Accept: `application/json`,
		 },
	 }).then(response=> response.json())
	 .then(data => {

		console.log(data)
		 setTrendCourses(data)
		 console.log(data[0].ImgPath);
	 }).catch((error)=> {
		
		 console.log('Error in getting trend courses',error);
	 });

 },[])
	

  return (
    <div className="home">
      <div className="home_image">
        <Button variant="contained" sx={{ width: "13rem" }} onClick={()=>{navigate("/login")}}>
          LOGIN
        </Button>
        <Button variant="contained" sx={{ width: "13rem" }} color="success" onClick={()=>{navigate("/register")}}>
          Become a member
        </Button>
      </div>
      <div className="home_grid">
        <div className="home_grid_carousel">
          <Carousel interval={3000}>
        {
		trendCourses.map(trendCourse => (
			<Link to={`/discourses/${trendCourse.courseId}`}  state={{course: trendCourse}}>
	  		<img src={`http://localhost:3001/${trendCourse.ImgPath}`} alt="" width={"100%"} />
		</Link>
		))
	} 

          </Carousel>
        </div>
        <div>
          <h2>
            Upcoming Discourse: <br />
          </h2>
          <Button variant="contained" sx={{ width: "80%" }} onClick={()=>{navigate("/register")}}>
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
	{
		trendCourses.map( trendCourse =>(
					
	<Link to= {`/discourses/${trendCourse.courseId}` } state={{course: trendCourse}}>
        <img src={`http://localhost:3001/${trendCourse.ImgPath}`} alt="" className="home_carousel_image" />	
	</Link>

		))
	}
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
