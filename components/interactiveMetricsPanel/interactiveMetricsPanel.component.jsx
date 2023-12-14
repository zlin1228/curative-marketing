import { useState } from 'react';

import Button from 'components/button/button.component';
import {
  ButtonContainer,
  Content,
  ContentContainer,
  Heading,
  Metric,
  MetricDescription,
  MetricFigure,
  MetricsContainer,
  ScrollWrapper,
  Section,
  Wrapper,
} from 'components/interactiveMetricsPanel/interactiveMetricsPanel.styles';

import OptimizedRichText from 'utils/OptimizedRichText';
import onKeyDown from 'utils/onKeyDown';

const InteractiveMetricsPanel = ({ metricsPanels, heading, description }) => {
  const [activePanel, setActivePanel] = useState(0);

  const handleSetActivePanel = (e, index) => {
    e.preventDefault();
    setActivePanel(index);
  };

  return (
    <Section>
      <Wrapper>
        <ContentContainer>
          {heading && <Heading>{heading}</Heading>}
          {description && <Content>{OptimizedRichText(description)}</Content>}
          <ScrollWrapper>
            <ButtonContainer>
              {metricsPanels &&
                metricsPanels.length > 0 &&
                metricsPanels.map(({ fields, sys }, index) => {
                  const isActive = index === activePanel;

                  return (
                    <Button
                      key={sys.id}
                      component={{
                        color: 'primary-blue',
                        style: isActive ? 'solid' : 'outline',
                        label: fields.title,
                        size: 'sm',
                        additionalStyles: {
                          pointerEvents: isActive ? 'none' : undefined,
                          width: 'fit-content',
                          whiteSpace: 'nowrap',
                        },
                      }}
                      fitContent
                      onClick={e => handleSetActivePanel(e, index)}
                      onKeyDown={e => onKeyDown(e, handleSetActivePanel(e, index))}
                    />
                  );
                })}
            </ButtonContainer>
          </ScrollWrapper>
        </ContentContainer>
        <MetricsContainer>
          {metricsPanels &&
            metricsPanels.length > 0 &&
            metricsPanels[activePanel]?.fields?.metrics?.map(({ fields, sys }) => (
              <Metric key={sys.id} wide={fields.description.length > 30}>
                <MetricFigure>{fields.metric}</MetricFigure>
                <MetricDescription>{fields.description}</MetricDescription>
              </Metric>
            ))}
        </MetricsContainer>
      </Wrapper>
    </Section>
  );
};

export default InteractiveMetricsPanel;
