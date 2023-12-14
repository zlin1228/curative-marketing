import { Content, Dialog, Trigger } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import colorMap from 'atoms/colors/colors';

import Icon from 'molecules/icon/Icon';

import Modal from 'components/modal/Modal';
import { FloatingCloseModal, ModalWrapper, PopupImageStyles } from 'components/modal/modal.styles';

const PopupImage = ({ image }) =>
  image && (
    <Dialog>
      <Trigger asChild>
        <PopupImageStyles className="popup-image">{image}</PopupImageStyles>
      </Trigger>
      <Modal>
        <Content asChild>
          <ModalWrapper isPopupModal isLargeVariant style={{ width: '90%' }}>
            <FloatingCloseModal>
              <Icon icon="close" size="24px" iconColor={colorMap.black} />
              <VisuallyHidden>Close</VisuallyHidden>
            </FloatingCloseModal>
            {image}
          </ModalWrapper>
        </Content>
      </Modal>
    </Dialog>
  );

export default PopupImage;
