import { forwardRef } from 'react';

import { ContainerStyle, SectionAccent } from 'components/container/container.styles';

const PageContainer = (
  { id, children, backgroundColor, accentImage = null, footer = false, cornerAccent, ...props },
  ref,
) => (
  <ContainerStyle ref={ref} id={id} bg={backgroundColor} footer={footer} {...props}>
    {cornerAccent && <SectionAccent {...cornerAccent} />}
    <div className="container-wrapper">{children}</div>
    {accentImage && (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={`https:${accentImage?.fields?.file?.url}`} alt="" layout="fill" />
    )}
  </ContainerStyle>
);

export default forwardRef(PageContainer);
