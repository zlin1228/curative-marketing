import React from 'react';

import { BreadcrumbsStyles, MenuItem, Spacer } from 'components/breadcrumbs/breadcrumbs.styles';
import ComponentLink from 'components/link/link.component';

import useGenerateBreadcrumbs from 'utils/hooks/useGenerateBreadcrumbs';

const Breadcrumbs = ({ pages = [], generateCrumbs, ...props }) => {
  const routerCrumbs = useGenerateBreadcrumbs();

  if (pages.length === 0 && !generateCrumbs) {
    return null;
  }

  const crumbs = generateCrumbs
    ? routerCrumbs
    : pages
        .filter(page => page.fields.link !== undefined && page.fields.label !== undefined)
        .map(page => {
          const link = page.fields?.link !== '/' ? '/' + page.fields.link : page.fields.link;

          return { id: page.sys.id, label: page.fields.label, link };
        });

  return (
    <BreadcrumbsStyles className="breadcrumb-container" {...props}>
      <MenuItem>
        <ComponentLink href="/">Home</ComponentLink>
        <Spacer>/</Spacer>
      </MenuItem>
      {crumbs.length > 0 &&
        crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;

          return (
            <MenuItem key={crumb.id} className={isLast ? 'breadcrumb last-breadcrumb' : 'breadcrumb'}>
              <ComponentLink href={`${crumb?.link || ''}`}>{crumb.label}</ComponentLink>
              {!isLast && <Spacer>/</Spacer>}
            </MenuItem>
          );
        })}
    </BreadcrumbsStyles>
  );
};

export default Breadcrumbs;
