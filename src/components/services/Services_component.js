import React, { useEffect } from "react";
import BaseComponent from "../base/Base_component";
import "./Service_component.scss";

function ServicesComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <BaseComponent>
        <div className="serviceContainer">
          <h3>Services</h3>
          <h5>a</h5>
          <div className="serviceImg">
            <div className="detail">
              <img src="service1.png" alt="img" />
              <h4>STARTED BY</h4>
              <p>
                Co-founded by Suresh & Prasanth Ragupathy with the motto of
                ‘Survival of the Freshest’.
              </p>
            </div>
            <div className="detail">
              <img src="service2.png" alt="img" />
              <h4>IMPACT</h4>
              <p>
                We spread our passion towards world and acquired some national
                level accounts.
              </p>
            </div>
            <div className="detail">
              <img src="service3.png" alt="img" />
              <h4>AWARD WINNING WORK</h4>
              <p>
                We moved mountains and executed some earthshattering campaigns!
              </p>
            </div>
            <div className="detail">
              <img src="service4.png" alt="img" />
              <h4>RULE THE WORLD</h4>
              <p>
                We wish to conquer the world and create awe-inspiring digital
                footprints all across.
              </p>
            </div>
          </div>
          <div className="doContainer">
            <h3>What we do?</h3>
            <div className="serviceList">
              <h4>1)Search Engine Optimization Service</h4>
              <p>
                We create SEO campaigns that drive organic search traffic
                through the creation of high quality content and off-page
                strategies that boost your site’s visibility in the search
                results.
              </p>
            </div>
            <div className="serviceList">
              <h4>2)Search Engine Marketing Services</h4>
              <p>
                As a Google Partnered agency, we’re accredited for the
                management of paid campaigns through Google AdWords, placing ads
                in the search results and across the display network.
              </p>
            </div>
            <div className="serviceList">
              <h4>3)Social Media Marketing Services</h4>
              <p>
                Our social media marketing services includes strategic
                consultancy and implementation, across Facebook, Instagram,
                LinkedIn, Twitter, Pinterest, and more with More than 50Million
                Follower base panel!
              </p>
            </div>
            <div className="serviceList">
              <h4>4)Online Reputation Management Services</h4>
              <p>
                Be it an Enterprise, Corporate or SME; Bad Reputation gives
                Negative Impact on Revenue & Brand. We have helped clients of
                all sizes defend their reputation and respond to allegations.
              </p>
            </div>
            <div className="serviceList">
              <h4>5)Video Production & Marketing Services</h4>
              <p>
                Video Marketing is about promoting video content which is used
                to increase awareness, understanding and value in products and
                services that a business offer. We take a strategic approach to
                video marketing.
              </p>
            </div>
            <div className="serviceList">
              <h4>6)Website Designing Services</h4>
              <p style={{marginBottom:"60px"}}>
                A website is often one of the most important digital channels
                for your business, so it’s important that it works well, looks
                good and importantly, is indexable. Your website needs a design
                that is on brand and tailored to enable and enhance the user
                journey.
              </p>
            </div>
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}

export default ServicesComponent;
