import React from "react";
import twixLogo from "../../assets/images/heroSection/twix-logo.png";
import chocoBarBottom from "../../assets/images/heroSection/chocolateBar-bottom.png";
import chocoCharacterRight from "../../assets/images/heroSection/choco-character-right-02.png";
import chocoCharacterLeft from "../../assets/images/heroSection/choco-character-left-02.png";
import "./hero.css";

function Hero() {
  return (
    <div className="photoDiv">
      <div className="characterContainer">
        <img src={chocoCharacterLeft} alt="Choco" className="chocoCharacter" />
      </div>
      <div className="characterContainer">
        <img src={chocoCharacterRight} alt="Choco" className="chocoCharacter" />
      </div>
      <img src={chocoBarBottom} alt="Choco" className="chocoBarBottom" />
      <img src={twixLogo} alt="Choco" className="twixLogo" />
    </div>
  );
}

export default Hero;
