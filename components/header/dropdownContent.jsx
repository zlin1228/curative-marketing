import React from 'react';

import { DropdownStyles } from 'components/header/dropdown.styles';
import ComponentLink from 'components/link/link.component';

const DropdownContent = ({ item }) => (
  <DropdownStyles>
    {item.fields.menu.map(
      subitem =>
        subitem?.fields && (
          <ComponentLink key={subitem.fields.internalName} href={subitem.fields.link || '#!'}>
            <div className="nav-section">
              <div className="nav-item">{subitem.fields.label && <h6>{subitem.fields.label}</h6>}</div>
            </div>
          </ComponentLink>
        ),
    )}
  </DropdownStyles>
);

export default DropdownContent;
