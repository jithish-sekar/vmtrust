import React, { useEffect } from "react";
import BaseComponent from "../base/Base_component";
import "./About_component.scss";

function AboutComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <BaseComponent>
        <div className="aboutContainer">
          <div className="titleContainer">
            <h3>Our Story</h3>
          </div>
          <div className="ContentAbout">
            <h2>Our  Model</h2>
            <p>
              Warm welcome to VM TRUST. I know that this is a critical situation
              for all of us, either directly or indirectly. But achieving
              gratitude can never get a better time. We have realised that this
              is the moment to unite together and help those who need just an
              extra push to move their day. Regarding our future initiatives,
              our first step is to distribute food for the needy people; people
              who struggle to get their meal sorted. Based on the funds you
              provide and we generate, we can do our part. This will be the
              smallest step that we are about to take, of what is going to be a
              long running event. I ask for your support and your contribution
              in any way possible, physically or financially, you are most
              welcome.
              <br />
              <br />
              VM Trust is on the field for more than a year. We were doing the
              food distribution for the helpless people even before lockdown due
              to COVID19. This was not started to gain media attention and fame
              during a pandemic situation.
              <br />
              <br />
              This is not a temporary group of people formed to do this work. We
              are determined to continue this work after the pandemic as well
              because that is what our mission is.
              <br />
              <br />
              Everyweek we managed to distribute food to people of range 100 to
              200. VM TRUST understands that it is a tough situation for many
              people around the city to continue social work and get funds. But
              we are determined to continue our work no matter what.
              <br />
              <br />
              With that, VM TRUST is growing every single week and we are
              determined to keep moving forward with the small team that we own.
              <br />
              <br />
              Thank you for those who extended support all these months and we
              are grateful for the souls who are ready to stand by us.
              <br />
              <br />
              These days, people need encouragement. The reward system is messed
              up that people do not excel in many fields. If you find people who
              are struggling to survive and are in need or jobs and are working
              hard to make a living, don't just walk away. A few words of
              encouragement costs zero rupees so feel free to lend it to them.
            </p><br/>
            <p style={{fontWeight:"bold"}}>வணக்கம் தோழர்களே</p>
            <p> (VM TRUST) அப்படி என்றால் என்ன? </p>
            <p>
              இவ்வுலகத்தில் மக்கள் தொகை மிக அதிகமாக உள்ளது இதில் சில மக்கள் மிக
              நன்றாக உள்ளனர் .ஆனால் சில மக்களோ கை ,கால், கண்,காது உடம்பாலும்,
              மனதாலும் மிகவும் கவலைக்கிடமாக உள்ளனர் உட்கார முடியாமல் ,நிற்க
              முடியாமல் ,பேச முடியாமல் மக்கள் உள்ளனர் குழந்தைகள் மற்றும்
              முதியவர்கள் ஆகட்டும் யாராக இருந்தாலும் ஒன்றுதான் இவர்களை
              பொருத்தவரை இவ்வுலகத்தில் படைத்த ஆண்டவன் அப்படியே விட்டுவிட்டான் .
              அதுமட்டுமில்லாமல் இந்த அவசர உலகத்தில் மக்களோ அவர்களை சரியாக
              கவனிப்பதில்லை கண்டு கொள்வதும் இல்லை .ஆதலால் நமது டிரஸ்ட் அவர்களை
              கவனிப்பதற்காக வந்துள்ளது இது தொடக்கம் அல்ல சாலையோரம் இருக்கும்
              மக்களுக்கும் தாய் ,தந்தை இல்லாத குழந்தைகளுக்கும் எங்களால் இயன்ற
              முயற்சியை விஎம் டிரஸ்ட் செய்து கொடுப்போம் நமது பவுண்டேஷன் இதன் ஒரு
              பகுதியாக அமைந்துள்ளது . ஏபிஜே அப்துல் கலாம் ஐயா சொன்னது போல
              2020ஆம் ஆண்டு இளைஞர்கள் கையில் ஆதலால் நாங்கள் இந்த நற்பணியை
              நாங்கள் செய்து கொண்டிருக்கிறோம் உங்களால் இயன்ற முயற்சியை
              எங்களுக்கு செய்து தருமாறு மிகவும் தாழ்மையுடன் கேட்டுக்கொள்கிறோம்
            </p>
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}

export default AboutComponent;
