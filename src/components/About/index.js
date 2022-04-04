
import profile from '../../assets/images/profile.jpg';

function About(props) {
  return (
    <div className ="row d-flex justify-content-center m-3">
    <div className="about col-sm-3">
      <h2>About Me</h2>
      <p className="paragraphdesc">
        I am an aspiring web developer who loves to work on exciting and
        challenging projects. I have worked in several fields, with my current
        focus on contract processing and system improvement.
      </p>
      <img className="figure-img img-fluid" id="profile" src= {profile} alt = "Zachary Clark; Web Developer" />
    </div>
    </div>
  );
}

export default About;
