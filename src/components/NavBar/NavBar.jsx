import React from "react";
import style from "./NavBar.module.css";

import logo from "../../images/openSea.png";
import instagram from '../../icons/instagram.png'
import discord from '../../icons/discord.png'
import reddit from '../../icons/reddit.png'
import search from '../../icons/search.png'
import twitter from '../../icons/twitter.png'

export default function NavBar() {
    return (
        <div className={style.navBar}>
            <div className={style.logoText}>
                <img className={style.logo} src={logo} alt="logo" />
                <b>OpenSea</b>
                <span className={style.lateralBar}>|</span>
                <p>Blog</p>
            </div>
            <div className={style.list}>
                <ul>
                    <li>Guides</li>
                    <li>Guest posts</li>
                    <li>Spotlights</li>
                    <li>Safety & Security</li>
                    <li>Announcements</li>
                </ul>
            </div>
            <div className={style.icons}>
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
                <img src={discord} alt="discord" />
                <img src={reddit} alt="reddit" />
                <img src={search} alt="search" />
            </div>
        </div>
    );
}
