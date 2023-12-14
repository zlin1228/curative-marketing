import { useEffect, useMemo, useState } from 'react';

import { MinimalHeaderStyles } from 'components/header/header.styles';
import { getLogo, setListeners } from 'components/header/header.utils';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';

import { HEADER_ID } from 'utils/constants';

const MinimalHeader = ({ component }) => {
  const { curative } = component;

  const [stickyState, setStickyState] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => setListeners(window, setStickyState, setWindowSize), []);

  const determineLogo = useMemo(() => getLogo(stickyState, curative, windowSize), [stickyState, curative, windowSize]);

  return (
    <MinimalHeaderStyles id={HEADER_ID} className="navigation-header" sticky={stickyState}>
      <ComponentLink href="/" target="_self" rel="noreferrer">
        {determineLogo && (
          <ComponentImage
            className="company-logo"
            src={`https:${determineLogo?.logo}`}
            alt="Curative Logo"
            width={125}
            height={25}
          />
        )}
      </ComponentLink>
    </MinimalHeaderStyles>
  );
};

export default MinimalHeader;
