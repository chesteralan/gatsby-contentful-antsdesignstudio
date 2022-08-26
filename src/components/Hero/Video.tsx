import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import VideoModal from "./VideoModal";

type Props = {};

const Video = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      youtubeId: contentfulSettings(key: { eq: "HERO_VIDEO_YOUTUBEID" }) {
        textValue
      }
    }
  `);

  const [active, setActive] = useState(false);
  const youtubeId = data.youtubeId.textValue;

  return (
    <>
      {youtubeId && (
        <a
          onClick={() => setActive(true)}
          href="#"
          className="btn-watch-video"
          data-vbtype="video"
          data-autoplay="true"
        >
          Watch Video <i className="icofont-play-alt-2"></i>
        </a>
      )}
      {active && <VideoModal close={setActive} youtubeId={youtubeId} />}
    </>
  );
};

export default Video;
