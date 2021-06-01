import React from "react";
import campImg from "./../assets/images/camp.jpeg";
import phone from "./../assets/images/phone.jpeg";

const CampPage = () => {
  return (
    <React.Fragment>
      <p className="camp-page-tagline">
        Excursion remembers places you like, and recommends new points of
        interest around you.
      </p>
      <section id="camp-page">
        <figure>
          <img src={campImg} alt="camp"></img>
        </figure>
      </section>
      <section id="phone-icon">
        <figure>
          <img src={phone} alt="phone"></img>
        </figure>
      </section>
      <aside id="phone-caption">
        <p>Coming Soon for iPhone and Android</p>
      </aside>
    </React.Fragment>
  );
};

export default CampPage;
