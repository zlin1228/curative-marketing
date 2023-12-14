import { Content } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Document, Page, pdfjs } from 'react-pdf';

import colorMap from 'atoms/colors/colors';

import Icon from 'molecules/icon/Icon';

import Modal from 'components/modal/Modal';
import { FloatingCloseModal, ModalWrapper } from 'components/modal/modal.styles';

const PopupInfographic = ({ popupInfographic }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
    <Modal>
      <Content asChild>
        <ModalWrapper isPopupModal isLargeVariant>
          <FloatingCloseModal>
            <Icon icon="close" size="24px" iconColor={colorMap.black} />
            <VisuallyHidden>Close</VisuallyHidden>
          </FloatingCloseModal>
          <Document file={`https:${popupInfographic?.fields?.file?.url}`}>
            <Page pageIndex={0} />
          </Document>
        </ModalWrapper>
      </Content>
    </Modal>
  );
};

export default PopupInfographic;
