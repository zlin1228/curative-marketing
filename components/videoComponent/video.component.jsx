import { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import colorMap from 'atoms/colors/colors';

import AccentCorner from 'components/accentCorner/accentCorner.component';
import HeadingFragment from 'components/heading/headingFragment.component';
import useParallaxScroll from 'components/parallax/useParallaxScroll';
import { VideoStyles } from 'components/videoComponent/video.styles';

import { getColor, isLight } from 'utils/colorUtils';
import { getYoutubeId } from 'utils/getYoutubeId';
import ReverseChildren from 'utils/reverseChildren';

const VideoPlayerComponent = ({ video, label }) => (
  <iframe
    className="embed-responsive-item"
    src={`https://www.youtube.com/embed/${getYoutubeId(video)}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen={true}
    aria-label={label}
  />
);

const Video = ({ component }) => {
  const { label, heading, subheading, videoUrl, cornerAccents, variant, backgroundColor, animate, reverse } = component;
  const bgColor = getColor(backgroundColor);
  const isDarkMode = !isLight(bgColor);
  const isFullWidth = variant === 'Full Width';
  const isIframe = variant === 'iframe';

  const parallaxRef = useRef(null);
  const transformDirection = 'Y';
  const delta = 30;

  useParallaxScroll(parallaxRef, transformDirection, delta, animate);

  const videoIFrame = videoUrl && <VideoPlayerComponent video={videoUrl} label={label} />;

  return isIframe ? (
    <VideoStyles>{videoIFrame}</VideoStyles>
  ) : (
    <VideoStyles isDarkMode={isDarkMode} backgroundColor={bgColor} isFullWidth={isFullWidth} reverse={reverse}>
      <Container>
        <Row className="align-items-center">
          <ReverseChildren reversed={reverse}>
            <Col lg={isFullWidth ? 12 : 6} md={12}>
              <div className="heading-content" ref={parallaxRef}>
                <HeadingFragment
                  heading={heading && <ReactMarkdown className="heading">{heading}</ReactMarkdown>}
                  subheading={subheading}
                />
              </div>
            </Col>

            <Col lg={isFullWidth ? 12 : 6} md={12}>
              {videoIFrame}
            </Col>
          </ReverseChildren>
        </Row>
      </Container>
      {cornerAccents &&
        cornerAccents.length > 0 &&
        cornerAccents.map((accent, index) => (
          <AccentCorner
            key={index}
            component={accent.fields}
            accentColor={isDarkMode ? colorMap.skyBlue[500] : colorMap.signalOrange[400]}
          />
        ))}
    </VideoStyles>
  );
};

export default Video;
