import Button from 'components/button/button.component';
import HeadingFragment from 'components/heading/headingFragment.component';
import { Container, Content, HealthPortraits, Wrapper } from 'components/healthplanBanner/healthplan.styles';

import { generateProps } from 'utils/componentGenerator';

const HealthPlanBanner = ({ component }) => {
  const { header, subheading, button: buttons, footnote, images } = component;

  return (
    <Container>
      <Wrapper>
        {images?.map(image => {
          const imageRoute = image?.fields?.image?.fields?.file;

          return <HealthPortraits className="healthPortraits" src={`https:${imageRoute?.url}`} key={image?.sys?.id} />;
        })}
        <Content>
          <HeadingFragment heading={header && <h2>{header}</h2>} subheading={subheading} />

          {buttons && (
            <div className="button-container">
              {buttons.map(button => {
                const props = generateProps(button);

                return <Button key={props._id} {...props} />;
              })}
            </div>
          )}
          {footnote && <p>{footnote}</p>}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default HealthPlanBanner;
