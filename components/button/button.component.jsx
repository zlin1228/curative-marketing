import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import PopupButton from 'components/button/PopupButton';
import { StyledButton } from 'components/button/button.styles';
import { ButtonFont } from 'components/button/button.utils';
import ButtonContent from 'components/button/buttonContent.component';
import ComponentLink from 'components/link/link.component';

import { getButtonColor } from 'utils/colorUtils';
import { scrollTo } from 'utils/scrollTo';
import { stringToKebabCase } from 'utils/textFunctions';

const Button = ({
  component,
  loading = false,
  loadingText = '... Loading',
  type = 'button',
  disabled = false,
  fitContent = false,
  ...props
}) => {
  const {
    color = 'primary-blue',
    style = 'solid',
    iconDirection,
    icon,
    size = 'md',
    link,
    label,
    scrollId,
    openInNewWindow,
    linkType,
    fileToDownload,
    popupForm,
    popupInfographic,
    additionalStyles,
  } = component;

  const isTablet = useMediaQuery(media.sm);

  const scrollLink = scrollId && !['#', '#!'].includes(link) ? `${link}#${scrollId}` : '';
  const downloadLink = fileToDownload && `https:${fileToDownload.fields.file.url}`;

  const buttonProps = {
    size: ButtonFont[size] ? size : 'md',
    variant: stringToKebabCase(color),
    colorMap: getButtonColor(color),
    buttonStyle: stringToKebabCase(style),
    type,
    disabled,
    style: additionalStyles,
  };

  const buttonContent = (
    <ButtonContent
      icon={icon}
      iconDirection={iconDirection}
      loading={loading}
      loadingText={loadingText}
      label={label}
    />
  );

  if (popupForm || popupInfographic) {
    return (
      <PopupButton popupForm={popupForm} popupInfographic={popupInfographic} {...buttonProps}>
        {buttonContent}
      </PopupButton>
    );
  }

  if (!link && scrollId) {
    return (
      <StyledButton tabIndex={0} onClick={() => scrollTo({ id: scrollId, space: 95 })} {...buttonProps}>
        {buttonContent}
      </StyledButton>
    );
  }

  return (
    <ComponentLink
      href={link || scrollLink || downloadLink || '#!'}
      target={openInNewWindow || linkType ? '_blank' : ''}
      download={linkType}
      textDecoration="none"
      colorMap={buttonProps.colorMap}
      width={isTablet || buttonProps.buttonStyle === 'text-only' || fitContent ? 'fit-content' : '100%'}
      {...props}
    >
      <StyledButton {...buttonProps}>{buttonContent}</StyledButton>
    </ComponentLink>
  );
};

export default Button;
