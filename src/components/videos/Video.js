import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import { vidoeArray } from "../../data/videoData";
import "./Video.css";

export default function Video() {
  let navigate = useNavigate();
  function handleClick(video) {
    navigate("/videopage", {
      state: { category: video.category, url: video.url },
    });
  }
  return (
    <Container>
      <Row>
        {vidoeArray.map((video) => {
          return (
            <Col xs={6}>
              <ReactPlayer url={video.url} />
              <Button
                onClick={() => handleClick(video)}
                variant="info"
                size="lg"
                className="mb-2 mt-2"
              >
                Preview
              </Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
