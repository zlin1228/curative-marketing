import { Spinner } from 'react-bootstrap';

import ComponentImage from 'components/image/image.component';

const ButtonContent = ({ icon, iconDirection, loading, loadingText, label }) => {
  const componentIcon = icon && (
    <ComponentImage src={`https:${icon?.fields?.file?.url}`} alt={icon?.fields?.title} width={20} height={20} />
  );

  return (
    <>
      {iconDirection && componentIcon}
      {!loading ? (
        label
      ) : (
        <>
          <Spinner animation="border" size="sm" />
          <span>{loadingText}</span>
        </>
      )}
      {!iconDirection && componentIcon}
    </>
  );
};

export default ButtonContent;
