import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import {
  PageButton,
  PageButtonWrapper,
  PageMobileButtonWrapper,
  PaginationContainer,
  TextButtonWrapper,
} from 'components/detail/detailPagination.styles';

import { getPaginationSpread, listingLimit } from 'utils/detailUtils';

const DetailPagination = ({ currentPage, pageCount, totalPosts, setCurrentPage, ...props }) => {
  const isMobile = useMediaQuery(media.max('md'));
  const count = totalPosts ? Math.ceil(totalPosts / listingLimit) : pageCount;
  const pageArray = [...new Array(count + 1).keys()];
  pageArray.shift();

  const pagination = count > 8 ? getPaginationSpread(pageArray, currentPage, count) : pageArray;

  const updatePage = newPage => {
    const el = document.getElementById('listing-section');
    if (newPage >= 1 || newPage <= count) {
      el.scrollIntoView({ behavior: 'smooth' });
      setCurrentPage(newPage);
    }
  };

  return (
    <PaginationContainer {...props}>
      <TextButtonWrapper className={currentPage === 1 ? 'disabled' : ''} onClick={() => updatePage(currentPage - 1)}>
        <FiChevronLeft />
        {!isMobile && <span>Previous</span>}
      </TextButtonWrapper>
      {isMobile ? (
        <PageMobileButtonWrapper>{`Page ${currentPage} of ${count}`}</PageMobileButtonWrapper>
      ) : (
        <PageButtonWrapper>
          {pagination.map((pageNum, idx) =>
            !isNaN(pageNum) ? (
              <PageButton
                key={idx}
                className={currentPage === pageNum ? 'active' : ''}
                onClick={() => updatePage(pageNum)}
              >
                {pageNum}
              </PageButton>
            ) : (
              <PageButton key={idx}>{pageNum}</PageButton>
            ),
          )}
        </PageButtonWrapper>
      )}

      <TextButtonWrapper
        className={currentPage === count ? 'disabled' : ''}
        onClick={() => updatePage(currentPage + 1)}
      >
        {!isMobile && <span>Next</span>}
        <FiChevronRight />
      </TextButtonWrapper>
    </PaginationContainer>
  );
};

export default DetailPagination;
