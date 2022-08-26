import React from "react";
import { useStaticQuery, graphql } from "gatsby";

type Props = {};

const Video = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      youtubeId: contentfulSettings(key: { eq: "HERO_VIDEO_YOUTUBEID" }) {
        textValue
      }
    }
  `);

  const youtubeId = data.youtubeId.textValue;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${youtubeId}`}
      className="venobox btn-watch-video"
      data-vbtype="video"
      data-autoplay="true"
    >
      {" "}
      Watch Video <i className="icofont-play-alt-2"></i>
    </a>
  );
};

export default Video;
