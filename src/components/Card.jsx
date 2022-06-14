import React, { useState } from "react";
import { css } from "@emotion/css";
import { FaHeart, FaRegHeart, FaRegMoon, FaSun } from "react-icons/fa";

const Card = ({ titulo_card, titulo_card_dark }) => {
  const [font, setFont] = useState("#000");
  const [backgrondColor, setbackgroundColor] = useState("#fff");
  const [fontdc, setFontdc] = useState("#000");
  const [backgrondColordc, setbackgroundColordc] = useState("#fff");

  const styleCard = (font, backgrondColor) => {
    setFont(font);
    setbackgroundColor(backgrondColor);
  };
  const styleDarkCard = (fontdc, backgrondColordc) => {
    setFontdc(fontdc);
    setbackgroundColordc(backgrondColordc);
  };

  const card = css`
    width: 150px;
    height: 150px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    background-color: ${backgrondColor};
    :hover {
      transform: translateY(-5px);
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
    }
    h1 {
      color: ${font};
    }
    button {
      background: none;
      border: none;
    }
  `;
  const card_dark = css`
    width: 150px;
    height: 150px;
    background-color: ${backgrondColordc};
    border-radius: 20px;
    box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    :hover {
      transform: translateY(-5px);
      box-shadow: inset 0px 5px 20px 0px rgba(0, 0, 0, 0, 0.25);
    }
    h1 {
      color: ${fontdc};
    }
    button {
      background: none;
      border: none;
    }
  `;
  const container = css`
    display: flex;
    justify-content: space-around;
  `;
  return (
    <>
      <div className={container}>
        <div className={card}>
          <h1>{titulo_card}</h1>
          <button onClick={() => styleCard("#EF9F9F", "#F47C7C")}>
            <FaRegHeart size={30} color="#F55353" />
          </button>
          <button onClick={() => styleCard("#F47C7C", "#EF9F9F")}>
            <FaHeart size={30} color="#F55353" />
          </button>
        </div>
        <div className={card_dark}>
          <h1>{titulo_card_dark}</h1>
          <button onClick={() => styleDarkCard("#FFE277", "#FFA931 ")}>
            <FaSun size={30} color="#FFE61B" />
          </button>
          <button onClick={() => styleDarkCard("#D6D5A8", "#413F42 ")}>
            <FaRegMoon size={30} color="#1B2430" />
          </button>
        </div>
      </div>
      {/* OSMPNMF*/}
    </>
  );
};
export default Card;
