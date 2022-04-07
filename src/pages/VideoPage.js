import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Comments from "../components/comments/Comments";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { vidoeArray } from "../data/videoData";
import Switch from "react-switch";

export default function VideoPage() {
  const [toggle, setToggle] = useState(true);

  const handleToggleChange = (checked) => {
    setToggle(checked);
  };

  const location = useLocation();
  return (
    <Container>
      <ReactPlayer
        url={location?.state?.url}
        width="1300px"
        height="600px"
        controls={true}
      />
      <div>
        <h3>Related Videos</h3>
      </div>
      <div style={{ display: "inline-flex" }}>
        {vidoeArray.map((video) => {
          if (
            video.category === location?.state?.category &&
            video.url !== location?.state?.url
          ) {
            return (
              <div className="relatedvideo">
                <ReactPlayer
                  url={video.url}
                  width="400px"
                  height="200px"
                  controls={true}
                />
              </div>
            );
          }
        })}
      </div>
      <div>
        <label style={{ textAlign: "center" }}>
          <span>
            <h4>Do you wana hide comments</h4>
          </span>
          <Switch onChange={handleToggleChange} checked={toggle} />
        </label>
      </div>

      {toggle && <Comments currentUserId="1" />}
    </Container>
  );
}
