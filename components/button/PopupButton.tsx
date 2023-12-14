import { Dialog, Trigger } from '@radix-ui/react-dialog';

import { StyledButton } from 'components/button/button.styles';
import Modal from 'components/modal/Modal';
import PopupInfographic from 'components/modal/PopupInfographic';
import Popup from 'components/popup/Popup';

const PopupButton = ({ popupForm, popupInfographic, children, ...props }) => (
  <Dialog>
    <Trigger asChild>
      <StyledButton {...props}>{children}</StyledButton>
    </Trigger>
    <Modal>
      {popupForm && <Popup popupForm={popupForm} {...props} />}
      {popupInfographic && <PopupInfographic popupInfographic={popupInfographic} />}
    </Modal>
  </Dialog>
);

export default PopupButton;
