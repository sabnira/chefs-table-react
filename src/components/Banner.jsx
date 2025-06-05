import React from 'react';

const Banner = () => {
    return (
        <div>
           
<div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://hottouchkitchen.com/wp-content/uploads/2024/01/side-view-female-chef-kitchen-slicing-vegetables-compressed-scaled.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-3xl">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking
class tailored for you!</h1>
      <p className="mb-5">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding
problems to become an exceptionally well world-class Programmer.
      </p>
      <button className="btn btn-success">Explore Now</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;
