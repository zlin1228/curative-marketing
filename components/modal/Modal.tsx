import { Portal } from '@radix-ui/react-dialog';

import { ModalOverlay } from 'components/modal/modal.styles';

import type { FC, ReactNode } from 'react';

interface ModalProps {
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) =>
  children && (
    <Portal>
      <ModalOverlay />
      {children}
    </Portal>
  );

export default Modal;
