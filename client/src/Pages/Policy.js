import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 mmm">
          <p>Terms of Service of our company . Read it carefully</p>
          <p>
            2. Privacy policy Unlike a Terms of Service policy, a privacy policy
            is required by law
          </p>
          <p>
            3. Returns and exchanges policy : Return and exchanges period is max
            20days after this period NO Return and exchanges will possible
          </p>
          <p>
            Shipping policy : the shipping charges can be applicable on the
            orders based on distances{" "}
          </p>
          <p>
            Taxes implies on the products is based on the latest guidelines of
            the government
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
