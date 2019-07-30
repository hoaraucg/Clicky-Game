import React from 'react';

const style = {
  logoIcon: {
    width: 1040,
    height: 300,
    justifyContent: "center"
  }
}

const Banner = () => (
  <section className="banner">
    <img style={style.logoIcon} className='logoIcon' src="https://i.ytimg.com/vi/8PV_snTD-Jw/maxresdefault.jpg" alt="banner"/>
  </section>
);

export default Banner;