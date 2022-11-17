import style from "./Footer.module.css";

import logo from "../../images/openSea.png";

import instagram from "../../icons/instagram.png";
import discord from "../../icons/discord.png";
import reddit from "../../icons/reddit.png";
import twitter from "../../icons/twitter.png";

export default function Footer() {
  return (
    <>
      <div className={style.nav_footer}>
        <b>coinbase</b>
        <b>coinbase</b>
        <b>coinbase</b>
        <b>coinbase</b>
        <b>coinbase</b>
        <b>coinbase</b>
      </div>
      <div className={style.content}>
        <div className={style.footer}>
          <div className={style.input}>
            <h3>Stay in the loop</h3>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </p>
            <div className={style.email}>
              <div>
                <input placeholder="Your email address" />
                <button>Sign Up</button>
              </div>
            </div>
          </div>
          <div className={style.icons}>
            <h3>Join the community</h3>
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={discord} alt="discord" />
            <img src={reddit} alt="reddit" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <hr />

        <div className={style.footer_links}>
          <div className={style.open_sea}>
            <img src={logo} alt="logo" />
            <h2>OpenSea</h2>
            <article>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital assets.
            </article>
          </div>
          <div>
            <b>Marketplace</b>
            <p>All NFTs</p>
            <p>New</p>
            <p>Art</p>
            <p>Music</p>
            <p>Domain Names</p>
            <p>Virtual Worlds</p>
            <p>Trading Cards</p>
            <p>Collectibles</p>
            <p>Sports</p>
            <p>Utility</p>
          </div>
          <div>
            <b>My Account</b>
            <p>My Profile</p>
            <p>My Collections</p>
            <p>My Favorites</p>
            <p>My Account Settings</p>
            <p>&nbsp;</p>
            <b>Stats</b>
            <p>Rankings</p>
            <p>Activity</p>
          </div>
          <div>
            <b>Resources</b>
            <p>Help Center</p>
            <p>Partners</p>
            <p>Suggestions</p>
            <p>Discord Community</p>
            <p>Blog</p>
            <p>Docs</p>
            <p>Newsletter</p>
          </div>
          <div>
            <b>Company</b>
            <p>About</p>
            <p>Careers</p>
          </div>
        </div>
        <hr />
        <div className={style.terms}>
          <p>© 2018 - 2021 Ozone Networks, Inc</p>
          <p>Privacy PolicyTerms of Service</p>
        </div>
      </div>
    </>
  );
}
