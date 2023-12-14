import React from 'react';

import Accordion from 'components/accordion/Accordion';
import AnnouncementBanner from 'components/announcementBanner/announcementBanner.component';
import Banner from 'components/banner/banner.component';
import Button from 'components/button/button.component';
import Carddeck from 'components/carddeck/carddeck.component';
import Column from 'components/column/column.component';
import CompanyLocation from 'components/companyLocation/companyLocation.component';
import ContentBlock from 'components/contentblock/contentblock.component';
import ConversionPanel from 'components/conversionpanel/conversionpanel.component';
import FAQ from 'components/faq/Faq';
import Feature from 'components/feature/feature.component';
import Footer from 'components/footer/footer.component';
import Form from 'components/form/form.component';
import FullFeature from 'components/fullfeature/fullfeature.component';
import Header from 'components/header/header.component';
import Heading from 'components/heading/heading.component';
import HealthPlanBanner from 'components/healthplanBanner/healthplan.component';
import Hero from 'components/hero/hero.component';
import InteractiveMetricsPanel from 'components/interactiveMetricsPanel/interactiveMetricsPanel.component';
import LinkedList from 'components/linkedList/LinkedList';
import OffsetGrid from 'components/offsetGrid/offsetGrid.component';
import PricingTable from 'components/pricingTable/pricingTable.component';
import RichText from 'components/richtext/richtext.component';
import Section from 'components/section/section.component';
import SingleImage from 'components/singleImage/singleImage.component';
import SingleInstance from 'components/singleinstance/singleinstance.component';
import SupportContactForm from 'components/supportContactForm/form.component';
import Switchback from 'components/switchback/switchback.component';
import Switcher from 'components/switcher/switcher.component';
import TableComponent from 'components/tableComponent/tableComponent.component';
import TrustBar from 'components/trustbar/trustbar.component';
import VideoComponent from 'components/videoComponent/video.component';

export const generateProps = component => ({
  _id: component?.sys.id,
  _contentTypeId: component?.sys?.contentType?.sys?.id,
  internalTitle: component?.fields?.internalName,
  component: component?.fields,
});

const getComponent = (seo, props) => {
  switch (props._contentTypeId) {
    case 'componentAnnouncementBanner':
      return <AnnouncementBanner key={props.internalTitle} {...props} />;
    case 'banner':
      return <Banner key={props.internalTitle} {...props} />;
    case 'button':
      return <Button key={props.internalTitle} {...props} />;
    case 'componentColumn':
      return <Column key={props.internalTitle} {...props} />;
    case 'feature':
      return <Feature key={props.internalTitle} {...props} />;
    case 'heading':
      return <Heading key={props.internalTitle} {...props} />;
    case 'footer':
      return <Footer key={props.internalTitle} {...props} />;
    case 'offsetGrid':
      return <OffsetGrid key={props.internalTitle} {...props} />;
    case 'hero':
      return <Hero key={props.internalTitle} {...props} breadcrumbs={seo?.fields?.breadcrumbs || []} />;
    case 'switchback':
      return <Switchback key={props.internalTitle} {...props} breadcrumbs={seo?.fields?.breadcrumbs || []} />;
    case 'CurativeHealthBanner':
      return <HealthPlanBanner key={props.internalTitle} {...props} />;
    case 'CompanyLocations':
      return <CompanyLocation key={props.internalTitle} {...props} />;
    case 'componentHeader':
      return <Header key={props.internalTitle} {...props} />;
    case 'componentSwitcher':
      return <Switcher key={props.internalTitle} {...props} />;
    case 'form':
      return <Form key={props.internalTitle} {...props} />;
    case 'ComponentCardDeck':
      return <Carddeck key={props.internalTitle} {...props} />;
    case 'websiteImage':
      return <SingleImage key={props.internalTitle} {...props} />;
    case 'ConversionPanel':
      return <ConversionPanel key={props.internalTitle} {...props} />;
    case 'contentBlock':
      return <ContentBlock key={props.internalTitle} {...props} />;
    case 'FullFeature':
      return <FullFeature key={props.internalTitle} {...props} />;
    case 'Table':
      return <TableComponent key={props.internalTitle} {...props} />;
    case 'componentVideo':
      return <VideoComponent key={props.internalTitle} {...props} />;
    case 'componentTrustBar':
      return <TrustBar key={props.internalTitle} {...props} />;
    case 'componentRichText':
      return <RichText key={props.internalTitle} {...props} />;
    case 'componentSingleInstance':
      return <SingleInstance key={props.internalTitle} {...props} />;
    case 'sunsetSupportContactForm':
      return <SupportContactForm key={props.internalTitle} {...props} />;
    case 'componentAccordion':
      return <Accordion key={props.internalTitle} {...props} />;
    case 'componentFaq':
      return <FAQ key={props.internalTitle} {...props.component} />;
    case 'componentPricingTable':
      return <PricingTable key={props.internalTitle} {...props} />;
    case 'componentInteractiveMetricsPanel':
      return <InteractiveMetricsPanel key={props.internalTitle} {...props.component} />;
    case 'componentLinkList':
      return <LinkedList key={props.internalTitle} {...props.component} />;
    default:
      return;
  }
};
const componentGenerator = (components, seo) => {
  const isAnnouncementBarFirst = components[0]?.sys?.contentType?.sys?.id === 'componentAnnouncementBanner';
  if (isAnnouncementBarFirst) {
    components[0].fields.isAnnouncementBarFirst = isAnnouncementBarFirst;
  }

  return (
    <>
      {components?.map(component => {
        if (component?.sys?.contentType?.sys?.id === 'section') {
          const { component: reference, ...sectionProps } = component.fields;
          if (!reference) {
            return null;
          }

          const props = generateProps(reference);

          return (
            <Section className={props._contentTypeId} key={props._id} {...sectionProps}>
              {getComponent(seo, props)}
            </Section>
          );
        }

        const props = generateProps(component);

        return getComponent(seo, props);
      })}
    </>
  );
};

export default componentGenerator;
