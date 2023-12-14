import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useWindowSize } from 'react-use';

import closeIcon from 'assets/images/close.svg';
import closeIconWhite from 'assets/images/closeWhite.svg';

import {
  AnnouncementBannerContent,
  AnnouncementBannerStyles,
} from 'components/announcementBanner/announcementBanner.styles';
import Button from 'components/button/button.component';
import ComponentImage from 'components/image/image.component';

import OptimizedRichText from 'utils/OptimizedRichText';
import { generateProps } from 'utils/componentGenerator';
import { getHeaderHeight } from 'utils/getTopOffset';

const AnnouncementBanner = ({ component }) => {
  const { content, buttons, backgroundColor, isAnnouncementBarFirst } = component;

  const [open, setIsOpen] = useState(true);
  const bannerRef = useRef(null);
  const { width } = useWindowSize(1440);

  const close = () => {
    setIsOpen(false);
    const pricingCards = document.querySelector('.sticky');
    pricingCards?.style?.setProperty('top', `${getHeaderHeight(document)}px`);
  };

  useEffect(() => {
    const getBannerHeight = () => bannerRef?.current?.getBoundingClientRect()?.height || 0;

    const setTop = (selector, height) => {
      const element = document.querySelector(selector);
      element?.style?.setProperty('top', `${open ? height : 0}px`);
    };

    if (isAnnouncementBarFirst) {
      setTop('.navigation-header', getBannerHeight());
    } else {
      setTop('.announcement-bar', getHeaderHeight(document));
    }
  }, [open, width, isAnnouncementBarFirst]);

  return (
    open && (
      <AnnouncementBannerStyles
        className="announcement-bar"
        backgroundColor={backgroundColor}
        isAnnouncementBarFirst={isAnnouncementBarFirst}
        ref={bannerRef}
      >
        <Container>
          <div className="announcement-bar-row">
            {content && (
              <AnnouncementBannerContent backgroundColor={backgroundColor}>
                {OptimizedRichText(content)}
              </AnnouncementBannerContent>
            )}
            <div className="cta-wrapper">
              {buttons && (
                <div className="button-container">
                  {buttons.map(button => {
                    const props = generateProps(button);

                    return <Button key={props.internalTitle} {...props} />;
                  })}
                </div>
              )}
              <div className="close-button-wrapper" onClick={close}>
                <ComponentImage
                  src={backgroundColor === 'ClearBlue800' ? closeIconWhite.src : closeIcon.src}
                  alt="Close Announcement Banner"
                  width={12}
                  height={12}
                />
              </div>
            </div>
          </div>
        </Container>
      </AnnouncementBannerStyles>
    )
  );
};

export default AnnouncementBanner;
