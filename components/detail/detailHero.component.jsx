import React from 'react';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';

import { BreadcrumbsStyles, MenuItem, Spacer } from 'components/breadcrumbs/breadcrumbs.styles';
import PageContainer from 'components/container/container.component';
import { CategoryTag, CategoryWrapper, DetailHeroStyles, UnderPhoto } from 'components/detail/detailHero.styles';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';

import ReverseChildren from 'utils/reverseChildren';

const DetailHero = ({ slug, title, category, featuredImage, type = 'Blog' }) => {
  const parentLink = type?.toLowerCase();
  const isPress = parentLink === 'press';
  const isMobile = useMediaQuery(media.md);
  const pressKicker = isPress && category?.[0]?.fields?.title && (
    <div className="kicker">{category[0].fields.title}</div>
  );

  const blogCategories = !isPress && category && (
    <CategoryWrapper className="justify-content-center align-items-center">
      {category?.map((cat, index) => (
        <CategoryTag index={index} key={`category-${cat?.fields?.title}`}>
          {cat?.fields?.title}
        </CategoryTag>
      ))}
    </CategoryWrapper>
  );

  return (
    <>
      <PageContainer backgroundColor={colorMap.gray[100]} paddingBottom={isPress && '0px'} paddingTop="24px">
        <DetailHeroStyles type={parentLink}>
          <BreadcrumbsStyles
            className="breadcrumb-container px-0"
            marginBottom="40px"
            marginTabletBottom="24px"
            marginMobileBottom="0px"
          >
            <MenuItem>
              <ComponentLink href="/">Home</ComponentLink>
              <Spacer>/</Spacer>
            </MenuItem>
            <MenuItem className="breadcrumb">
              {parentLink && <ComponentLink href={`/${parentLink}`}>{type}</ComponentLink>}
              {category?.[0] && <Spacer>/</Spacer>}
            </MenuItem>
            {category?.[0] && (
              <MenuItem key="crumb-category" className="breadcrumb last-breadcrumb">
                {parentLink && title && <ComponentLink href={`/${parentLink}/${slug}`}>{title}</ComponentLink>}
              </MenuItem>
            )}
          </BreadcrumbsStyles>
          <ReverseChildren reversed={!isMobile}>
            {blogCategories}
            <div>
              {pressKicker}
              {title && <h1 className="detail-heading">{title}</h1>}
            </div>
          </ReverseChildren>
        </DetailHeroStyles>
      </PageContainer>

      {!isPress && featuredImage && (
        <UnderPhoto>
          <ComponentImage
            src={`https://${featuredImage?.fields?.file?.url}`}
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
          />
        </UnderPhoto>
      )}
    </>
  );
};

export default DetailHero;
