import { Content } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import colorMap from 'atoms/colors/colors';

import Icon from 'molecules/icon/Icon';

import CountdownClock from 'components/countdownClock/CountdownClock';
import WsHubSpotForm from 'components/form/hubspotForm/hubSpotForm.component';
import { JustifiedCloseModal, ModalFormWrapper, ModalWrapper } from 'components/modal/modal.styles';
import { HeadingWrapper, PopupHeadingStyles } from 'components/popup/popup.styles';

import type { Sys } from 'contentful';
import type { FC } from 'react';

interface PopupForm {
  sys?: Sys;
  fields?: {
    countdownHeading?: string;
    countdown?: string;
    formId?: string;
    heading?: string;
  };
}

interface PopupProps {
  popupForm: PopupForm;
  isLargeVariant?: boolean;
}
const Popup: FC<PopupProps> = ({ popupForm, isLargeVariant }) => {
  const { heading, formId, countdown, countdownHeading } = popupForm?.fields || {};
  const isPopupModal = popupForm?.sys?.contentType?.sys?.id === 'metaEventRegistration';

  return (
    <Content asChild>
      <ModalWrapper isLargeVariant={isLargeVariant} isPopupModal={isPopupModal}>
        <HeadingWrapper>
          {heading && <PopupHeadingStyles>{heading}</PopupHeadingStyles>}
          <JustifiedCloseModal>
            <Icon icon="close" size="24px" iconColor={colorMap.black} />
            <VisuallyHidden>Close</VisuallyHidden>
          </JustifiedCloseModal>
        </HeadingWrapper>
        {formId && (
          <ModalFormWrapper>
            <WsHubSpotForm formId={formId} redirected={false} isPopupForm />
          </ModalFormWrapper>
        )}
        {countdown && <CountdownClock countdown={countdown} countdownHeading={countdownHeading} />}
      </ModalWrapper>
    </Content>
  );
};

export default Popup;
