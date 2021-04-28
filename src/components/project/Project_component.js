import React, { useEffect } from "react";
import BaseComponent from "../base/Base_component";
import "./Project_component.scss";
function ProjectComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <BaseComponent>
        <div className="aboutContainer">
          <div className="titleContainer">
            <h3>Our Projects</h3>
          </div>
          <div className="ContentAbout">
            <p style={{ fontWeight: "bold" }}>FIRST COLLABORATION.</p>
            <p>
              We believe the concept of more the hands, better the impact. And
              so we joined with @nikitanushka_ to initiate a wonderful start in
              our important venture. We have planted saplings in recognition of
              the words of Dr. APJ Abdul Kalam on vision of 2020.
              <br />
              <br /> This is the first but definitely not the last. Special
              credits: Head constable Ms. Meera and her daughter Lepakshi. PS:
              please don't mind that chart. We couldn't find someone to write
              things down.
            </p>
            <img src="proj1.jpeg" alt="project" />
            <p>
              அனைவருக்கும் வணக்கம் VM Trust-ன் நோக்கம் சாலையோரம் உள்ள மக்கள்
              அனைவருக்கும் உணவு, உடை மற்றும் அவர்களுக்கு தேவையுள்ள அனைத்து
              பொருட்களையும் எங்களால் முடிந்த உதவியை நாங்கள் செய்து கொண்டு
              வருகின்றோம் மேலும் உதவிகளை நாங்கள் செய்ய உள்ளோம் ஆதலால் உங்களால்
              முடிந்த உதவியை எங்களுக்கு செய்யுமாறு மிகத் தாழ்மையுடன்
              கேட்டுக்கொள்கிறோம்.
            </p>
            <p>இப்படிக்கு, VM Trust.</p><br/><br/>
            <p>
              We, VM FOUNDATION have been contributing our full power to provide
              food for around 150 to 200 people in coimbatore each and every
              week. We mainly focus on the homeless, handicapped and elderly
              people and deliver food straight to them. This work has been going
              on from pre-covid times and we managed to gather big team to
              support during this pandemic. Our first Project has been
              successfully completed. Thank you all for your support.
            </p>
            <p>Regards, VM Trust.</p>
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}
export default ProjectComponent;
