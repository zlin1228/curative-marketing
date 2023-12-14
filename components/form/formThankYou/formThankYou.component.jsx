import { SocialIconWrapper, Wrapper } from 'components/form/formThankYou/formThankYou.styles';
import { socialIcons, thankYouFallback } from 'components/form/formThankYou/formThankYou.utils';
import HeadingFragment from 'components/heading/headingFragment.component';
import IconLink from 'components/link/iconLink.component';

const FormThankYou = ({ kicker, heading, subheading, thankYouLinks }) => (
  <Wrapper>
    <HeadingFragment
      kicker={kicker ? kicker : thankYouFallback.kicker}
      heading={heading ? heading : thankYouFallback.heading}
      subheading={subheading}
    />
    {!subheading && thankYouFallback.subheading}
    <SocialIconWrapper>
      {thankYouLinks?.length
        ? thankYouLinks.map(({ sys: { id }, fields: { slug, icon, label } }) => (
            <IconLink href={slug} icon={`https://${icon?.fields?.file?.url}`} alt={label} width={32} key={id} />
          ))
        : socialIcons.map(({ link, name, src }) => (
            <IconLink href={link} icon={src} alt={name} width={32} key={name} />
          ))}
    </SocialIconWrapper>
  </Wrapper>
);

export default FormThankYou;
