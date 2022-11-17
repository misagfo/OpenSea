import style from "./ViewPost.module.css";

import open from "../../images/chains.jpg";
import data from "../../api/data.json";
import Cards from "../Cards/Cards";

export default function ViewPost() {
  return (
    <main>
      <div className={style.card}>
        <div className={style.cardItem}>
          <img src={open} alt="opensea" />
        </div>
        <div className={style.cardRow}>
          <div className={style.content}>
            <p className={style.title}>Announcement</p>
            <p className={style.detail}>
              Expanding the Global NFT Ecosystem: A Preview of Chain Expansion
              and Language Support
            </p>
            <p className={style.descript}>
              At OpenSea, we believe that NFTs are foundational technology that
              will eventually underpin thousands of use cases and industries.
              But
            </p>
            <button className={style.button}>View Post</button>
          </div>
        </div>
      </div>
      <div className={style.conteiner}>
        {data.cards &&
          data.cards.map((data, i) => <Cards key={i} cards={data} />)}
      </div>
    </main>
  );
}
