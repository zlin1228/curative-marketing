import WsHubSpotForm from 'components/form/hubspotForm/hubSpotForm.component';
import Modal from 'components/modal/Modal';
import { ModalFormWrapper, ModalWrapper } from 'components/modal/modal.styles';

const PopupForm = ({ isLargeVariant, isOpen, setIsOpen, formId, children }) => (
  <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
    <ModalWrapper isLargeVariant={isLargeVariant}>
      {formId && (
        <ModalFormWrapper>
          {children}
          <WsHubSpotForm formId={formId} redirected={false} isPopupForm />
        </ModalFormWrapper>
      )}
    </ModalWrapper>
  </Modal>
);

export default PopupForm;
