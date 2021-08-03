import React from "react";
import VideosRow from "../../Main/VideosRow";
import "./HomeContent.css";
import dealing_image from "./images/dealing.webp";
import secret_image from "./images/secret.webp";
import rethinking_image from "./images/rethinking.webp";
import skills_image from "./images/skills.webp";
import tips_image from "./images/tips.webp";
import how_image from "./images/how.webp";
import anger_image from "./images/anger.webp";
import what_image from "./images/what.webp";
const HomeContent = () => {
  const recommendedVideos = [
    {
      thumbnail: dealing_image,
      title: "Dealing With Relationship Insecurity",
      length: 445,
      channel: {
        name: "alpha m.",
        link: "https://youtu.be/EOYbSDHTYv0",
        image: ""
      },
      viewCount: 1825954,
      uploadedAt: "2015-04-25"
    },
    {
      thumbnail: secret_image,
      title: "The secret to desire in a long-term relationship",
      length: 1150,
      channel: {
        name: "Esther Perel",
        link: "https://youtu.be/sa0RUmGTCYY",
        image: ``
      },
      viewCount: "5100000",
      uploadedAt: "2013-02-14"
    },
    {
      thumbnail: rethinking_image,
      title: "Rethinking infidelity",
      length: 1290,
      channel: {
        name: "Esther Perel",
        link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
        image: ``
      },
      viewCount: 9922410,
      uploadedAt: "2015-05-21"
    },
    {
      thumbnail: skills_image,
      title: "Skills for Healthy Romantic Relationships",
      length: 953,
      channel: {
        name: "Joanne Davila",
        link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
        image: ``
      },
      viewCount: 4923003,
      uploadedAt: "2015-11-17"
    },
    {
      thumbnail: tips_image,
      title: "Tips on Healing our most intimate connections",
      length: 208,
      channel: {
        name: "John Gray, PhD",
        link: "https://youtu.be/TN7P4Bd7U9I",
        image: ``
      },
      viewCount: 2926,
      uploadedAt: "2019-11-06"
    },
    {
      thumbnail: how_image,
      title: "איך יוצאים מהפלונטר - על מתחים בזוגיות",
      length: 208,
      channel: {
        name: "מיטל חדד-מסורי",
        link: "https://youtu.be/FgHWkJet6F8",
        image: ``
      },
      viewCount: 18050,
      uploadedAt: "2019-07-31"
    },
    {
      thumbnail: anger_image,
      title: "כעס ולחצים בזוגיות",
      length: 4384,
      channel: {
        name: "הרב יגאל כהן",
        link: "https://youtu.be/FgHWkJet6F8",
        image: ``
      },
      viewCount: 60416,
      uploadedAt: "2018-02-15"
    },
    {
      thumbnail: what_image,
      title: "מה עושים שכבר אין משיכה בזוגיות?",
      length: 4384,
      channel: {
        name: "מני רובינוב",
        link: "https://youtu.be/FgHWkJet6F8",
        image: ``
      },
      viewCount: 57,
      uploadedAt: "2021-01-07"
    }
  ];

  // const marqChan = {
  //   name: "Marques Brownlee",
  //   link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
  //   image: "https://picsum.photos/30/30"
  // };
  return (
    <div className="home-content">
      <VideosRow type="normal" label="Recommended" videos={recommendedVideos} />
      {/* <VideosRow type="channel" channel={marqChan} videos={channelVideos} /> */}
    </div>
  );
};

export default HomeContent;
