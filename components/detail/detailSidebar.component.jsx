import { Col } from 'react-bootstrap';

import archiveIcon from 'assets/images/blue_arrow_right.svg';

import { SidebarWrapper } from 'components/detail/detailSidebar.styles';
import FollowIcons from 'components/followIcons/followIcons.component';
import WsHubSpotForm from 'components/form/hubspotForm/hubSpotForm.component';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';

const DetailSideBar = ({
  popularArticlesHeading,
  popularArticles,
  viewArchivesLink,
  newsletterForm,
  followUsHeading,
  followUsLinks,
  blogType: postType = 'Blog',
  ...props
}) => {
  const parentLink = postType?.toLowerCase();
  const isBlog = parentLink === 'blog';

  return (
    <Col {...props}>
      <SidebarWrapper>
        {popularArticlesHeading && <h2 className="popular-articles-heading">{popularArticlesHeading}</h2>}
        {popularArticlesHeading &&
          popularArticles?.map(({ sys: { id }, fields: articleData }) => {
            const articleDate = new Date(articleData.publishDate);
            const externalLink = articleData?.externalLink || '';

            return (
              <div className="popular-article-container" key={id}>
                <ComponentLink
                  href={
                    externalLink ||
                    (articleData.slug?.includes(`/${parentLink}`)
                      ? articleData.slug
                      : `/${parentLink}/${articleData.slug}`)
                  }
                  target={externalLink ? '_blank' : '_self'}
                  className="popular-article-link"
                >
                  <h3 className="popular-article-title">{articleData.title}</h3>
                  <p className="popular-article-date">
                    {articleDate.toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </ComponentLink>
              </div>
            );
          })}
        {viewArchivesLink && parentLink && isBlog && (
          <ComponentLink href={`/${parentLink}`} className="archive-link">
            <span className="archive-text">{viewArchivesLink}</span>
            <ComponentImage src={archiveIcon.src} alt="arrow" width={16} height={16} />
          </ComponentLink>
        )}
        {newsletterForm?.fields && (
          <div className="newsletter-container">
            {newsletterForm.fields.heading && (
              <h3 className="newsletter-form-heading">{newsletterForm.fields.heading}</h3>
            )}
            {newsletterForm.fields.formId && <WsHubSpotForm formId={newsletterForm.fields.formId} redirected={false} />}
          </div>
        )}
        {followUsLinks && <FollowIcons heading={followUsHeading} followLinks={followUsLinks} />}
      </SidebarWrapper>
    </Col>
  );
};

export default DetailSideBar;
