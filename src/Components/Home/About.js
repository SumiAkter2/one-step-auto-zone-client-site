import React from "react";
import img1 from "../../assets/images/about_us/person.jpg";
import img2 from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div>
      <div className="hero bg-gray-100 mb-24">
        <div className="hero-content flex-col lg:flex-row">
          <div
            className="lg:w-2/5 relative p-6 h-96"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-out-cubic"
          >
            <img
              alt="banner-img"
              src={img1}
              className="rounded-lg shadow-2xl h-full "
            />
            <img
              alt="banner-img"
              src={img2}
              className="absolute top-1/2 lg:right-[-40px] right-[60px] rounded-lg shadow-2xl h-2/3 w-2/3  border-8  border-primary"
            />
          </div>
          <div
            className="lg:w-3/5 px-12 h-96 lg:py-6 py-12 "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out-cubic"
          >
            <p className="text-secondary text-xl font-bold mt-6">About Us</p>
            <h1 className="lg:text-5xl text-3xl font-bold my-2">
              We are qualified <br />& of experience <br /> in this field
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ea accusantium cumque, voluptatum ab nostrum voluptas,
              suscipit illo corrupti maiores, nihil incidunt debitis? Quos totam
              quasi commodi asperiores officia dolore vel. Lorem ipsum dolor sit
            </p>
            <button className="btn btn-secondary  mb-12">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
