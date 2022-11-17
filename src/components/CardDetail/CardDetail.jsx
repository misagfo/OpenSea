import React from "react";
import { Link } from "react-router-dom";

import styleCard from "../Cards/Cards.module.css";

import style from "../CardDetail/CardDetail.module.css";
import logo from "../../images/chains.jpg";
import seo from "../../images/seo.png";

export default function CardDetail() {
  return (
    <main className={style.main}>
      <div className={style.card}>
        <div className={style.content}>
          <h1>On Creator Fees</h1>
          <p>November 6, 2022By Devin Finzer . Announcement</p>
          <img src={logo} alt="logo" />
          <p>
            Update as of November 9, 2022: OpenSea will continue enforcing
            creator fees for all existing collections. For more information,
            please see our Twitter thread. Update as of November 7, 2022:
            OpenSea will continue enforcing creator fees for collections created
            using OpenSea’s shared storefront smart contract (i.e. created via
            the “Create” button on OpenSea) until at least December 8, 2022.
            When the NFT standard was created in 2018, creator fees (sometimes
            referred to as ‘royalties’) did not exist. OpenSea supported them
            early to invite more creators into the space, and we hoped at the
            time that they would be durable. But the last few months have proven
            that off-chain enforcement is too brittle. Notably, on marketplaces
            where these fees are optional, we’ve watched the voluntary creator
            fee payment rate dwindle to less than 20%. And on other
            marketplaces, creator fees are simply not paid at all. An
            unfortunate consequence of this ecosystem shift is that the business
            model used by the vast majority of creators in this industry is now
            subject to enforcement discretion of marketplaces rather than code.
            And for new creators entering the space, it can come as a surprise
            that the fees they set aren’t always enforceable. With many
            marketplaces choosing to stop enforcing creator fees, to put it
            bluntly, the last few months haven’t felt WAGMI. Given our role in
            the ecosystem, we know it’s critical for us to take a thoughtful,
            principled approach to solving this problem, and to lead with
            solutions. It’s clear that many creators want the ability to enforce
            fees on-chain; and fundamentally, we believe that the choice should
            be theirs to make – it shouldn’t be a decision made for them by
            marketplaces. So we’re looking to balance the scales by putting more
            power in creators’ hands, equipping them with tools to control their
            business model. What we’re doing To that end, today, we’re launching
            a tool for on-chain enforcement of creator fees for new collections.
            This tool is our first version of on-chain enforcement. Starting at
            12pm ET on Tuesday, November 8, OpenSea will enforce creator fees
            only for new collections that use an on-chain enforcement tool such
            as this one. In the coming months we’ll launch additional tools and
            improvements for on-chain enforcement, and we will engage with the
            community to get feedback on them along the way. We recognize this
            is a first step, so we’re committed to engaging with our communities
            about solutions for existing collections. In deference to how
            difficult it is to enforce fees on chain for existing collections,
            we won’t make any changes for existing collections through at least
            December 8, 2022. To be transparent, the consideration set for what
            happens after December 8 is wide open – and we’re considering
            options ranging from continuing to enforce off-chain fees for some
            subsets of collections, to allowing optional creator fees, to
            collaborating on other on-chain enforcement options for creators. We
            recognize not all creators, collections, and communities are the
            same and we are looking to create a long-term policy that reflects
            that. Our On-Chain Enforcement Tool for New Collections Our initial
            on-chain tool is a simple code snippet that creators can add to
            future NFT contracts, as well as existing upgradeable contracts.
            This code restricts NFT sales to marketplaces that enforce creator
            fees. Starting at 12pm ET on Tuesday, November 8, OpenSea will check
            new collections to see if their items are able to be sold on
            marketplaces that do not enforce creator fees. OpenSea will enforce
            creator fees for new collections that use an on-chain enforcement
            tool. OpenSea will not enforce creator fees for new collections that
            do not implement on-chain enforcement. To add this code to a new
            contract or to an upgradeable contract, follow the instructions
            here. Make no mistake, technical decisions like this involve
            tradeoffs: enforcing creator fees on-chain requires sacrificing some
            of the censorship-resistance and permissionless nature of NFTs.
            Nevertheless, we believe creators should have the power to build the
            collections and communities that they desire, and buyers and sellers
            should continue to have the freedom to choose which collections they
            do and don’t engage with. What should existing collections do? Our
            belief, informed by the last few months of observation, is that
            creator fees without on-chain enforcement methods are not viable.
            Unfortunately, the bitter pill is that, to the best of our
            knowledge, the only way to achieve on-chain creator fee enforcement
            for existing collections with non-upgradeable smart contracts is to
            take drastic measures with their communities, like shifting the
            canonical collection to a new smart contract. In our opinion, by far
            the better option is for existing creators to explore new forms of
            monetization and alternative ways of incentivizing buyers and
            sellers to pay creator fees, and to ensure that future collections
            enforce creator fees on-chain. Why are we doing this? It’s become
            clear that the current mechanics of creator fee enforcement are not
            sustainable—not for the marketplaces who enforce them, and, more
            importantly, not for creators themselves. While we believe creator
            fees without on-chain enforcement are going away, we strongly
            believe that creator fees as a broad concept are not. Creator fees
            are an important innovation of web3 that help creators monetize
            their work in a more effective way. But marketplaces should not
            enforce business models for creators, creators should have
            independent control. We hope that this is a first step in that
            direction. We don’t expect that we can drive this ecosystem shift
            alone, nor do we think that all creators will want to use creator
            fees as a form of monetization. But by providing on-chain
            enforcement tools, we hope to lend creators our support so they can
            choose. We hope this also inspires others looking for solutions to
            keep creator fees a part of our ecosystem to join us and work
            collaboratively on even more solutions. What’s next? We wanted to
            share this thinking as soon as possible to give our communities time
            to process, prepare and ask questions. Over the coming days, we’ll
            be reaching out to many more creators and collections. If you want
            to talk about this, we’re here to listen. We’re holding a Twitter
            Space this evening so you can ask your initial questions, and we
            will schedule more throughout the week. We’re committed to building
            the best destination for NFT creators and collectors. Over the
            coming months we plan to iterate both on creator fee enforcement and
            support for new business models. We will share updates as we have
            them. We appreciate all the feedback shared to-date, and look
            forward to hearing more. Note Regarding Our Shared Storefront New
            collections created using OpenSea’s shared storefront smart contract
            (the “Create” button) on or after 12 ET on November 8, 2022 won’t be
            able to set creator fees. We’re actively working on alternative
            solutions and will provide more information as it becomes available.
          </p>
          <hr />
          <div className={style.fonder}>
            <img src={seo} alt="seo" />
            <div>
              <h4>Devin Finzer</h4>
              <p>Devin Finzer is the co-founder and CEO of OpenSea.</p>
            </div>
          </div>
          <span>Prevoius Post</span>
          <h4>Our Efforts to Prevent NFT Theft</h4>
        </div>
      </div>
      <h1>Other similar posts</h1>

      <div className={style.conteiner}>
        <Link className={styleCard.url} to="/">
          <div className={styleCard.conteiner}>
            <div className={styleCard.card}>
              <div className={styleCard.header_image}>
                <img src={logo} alt="logo" />
              </div>
              <div className={styleCard.card_body}>
                <p className={styleCard.title}>Announcement</p>
                <h2>Our Efforts to Prevent NFT Theft</h2>
                <span>November 2, 2022</span>
                <p>Trust and safety issues – specifically scams and theft – are some of the biggest barriers to broader NFT adoption today. At...</p>
              </div>
            </div>
          </div>
        </Link>
        <Link className={styleCard.url} to="/">
          <div className={styleCard.conteiner}>
            <div className={styleCard.card}>
              <div className={styleCard.header_image}>
                <img src={logo} alt="logo" />
              </div>
              <div className={styleCard.card_body}>
                <p className={styleCard.title}>Announcement</p>
                <h2>On Creator Fees</h2>
                <span>November 6, 2022</span>
                <p>Update as of November 9, 2022: OpenSea will continue enforcing creator fees for all existing collections. For more information, please see our Twitter thread....</p>
              </div>
            </div>
          </div>
        </Link>
        <Link className={styleCard.url} to="/">
          <div className={styleCard.conteiner}>
            <div className={styleCard.card}>
              <div className={styleCard.header_image}>
                <img src={logo} alt="logo" />
              </div>
              <div className={styleCard.card_body}>
                <p className={styleCard.title}>Announcement</p>
                <h2>Introducing The New OpenSea Homepage</h2>
                <span>September 21, 2022</span>
                <p>At OpenSea, we believe that NFTs are foundational technology that will eventually underpin thousands of use cases and industries. But today, their...</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
