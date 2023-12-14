import React from 'react';

import Footer from 'components/footer/footer.component';

const FooterStatic = () => {
  const dummyData = {
    logo: {
      title: 'curative small logo',
      url: '/curative_small_logo.png',
      width: '46px',
      height: '47px',
    },
    menuCollection: {
      items: [
        {
          column: {
            label: 'Services',
            contents: [
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
            ],
          },
        },
        {
          column: {
            label: 'Services',
            contents: [
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
            ],
          },
        },
        {
          column: {
            label: 'Services',
            contents: [
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
            ],
          },
        },
        {
          column: {
            label: 'Services',
            contents: [
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
              {
                type: 'Link',
                label: 'Products',
                slug: 'products',
              },
            ],
          },
        },
      ],
    },
    privacyBar: {
      copywrite: '© Curative, Inc. 2021',
      links: [
        {
          type: 'Link',
          label: 'Terms & Conditions',
          slug: '/products',
        },
        {
          type: 'Link',
          label: 'Terms & Conditions',
          slug: '/products',
        },
        {
          type: 'Link',
          label: 'Terms & Conditions',
          slug: '/products',
        },
      ],
    },
  };

  return <Footer component={dummyData} />;
};

export default FooterStatic;
