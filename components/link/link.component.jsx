import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { StyledA } from 'components/link/link.styles';

import parseUrl from 'utils/parseUrl';

const Link = ({ children, as, ...props }) =>
  as === 'div' ? <as>{children}</as> : <NextLink {...props}>{children}</NextLink>;

const ComponentLink = ({ children, href, locale: localeProp, textDecoration, ...props }) => {
  const { as, href: url, rel, target } = parseUrl(href);
  const locale = useRouter()?.locale || 'en-US';

  return (
    <Link as={as} href={url || ''} locale={localeProp ? localeProp : locale} passHref>
      <StyledA
        rel={locale !== 'en-US' ? 'alternative' : rel}
        target={target}
        hrefLang={localeProp ? localeProp : locale}
        textDecoration={textDecoration || 'underlined'}
        {...props}
      >
        {children}
      </StyledA>
    </Link>
  );
};

export default ComponentLink;
