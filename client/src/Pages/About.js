import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2 p-5 mmm">
            LocalBazzar is a full ecommerce company which provides support to
            seller for selling their products easily in minimun charges we are
            avialable for him 24X7 . we provides best quality products for the
            customer . customers are enjoying to purchase from our company. We
            are making a bond with our customer by provides best services and
            facilitates on afforadable prices which is best in India.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
