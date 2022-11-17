import React from "react";
import { Link } from "react-router-dom";

import style from "./Cards.module.css";

export default function Cards({ cards }) {
  return (
    <>
      <Link className={style.url} to="detail">
        <div className={style.conteiner}>
          <div className={style.card}>
            <div className={style.header_image}>
              <img src={cards.img} alt="logo" />
            </div>
            <div className={style.card_body}>
              <p className={style.title}>{cards.announce}</p>
              <h2>{cards.title}</h2>
              <span>{cards.date}</span>
              <p>{cards.text}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
