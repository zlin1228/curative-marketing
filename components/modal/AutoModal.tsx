import { Dialog } from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

import Modal from 'components/modal/Modal';
import Popup from 'components/popup/Popup';

const AutoModal = ({ trigger = 'Time Bound', triggerValue = 1000, content }) => {
  const [open, setOpen] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  const { y: scrollDepth } = useWindowScroll();

  const getModalContent = (contentType: 'metaEventRegistration') => {
    switch (contentType) {
      case 'metaEventRegistration':
        return <Popup popupForm={content} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const callback = () => {
      setOpen(true);
      setHasClosed(true);
    };

    switch (trigger) {
      case 'Time Bound':
        setTimeout(() => {
          !hasClosed && callback();
        }, triggerValue);
        break;
      case 'Scroll Depth':
        !hasClosed && scrollDepth > triggerValue && callback();
        break;
      default:
        break;
    }
  }, [scrollDepth]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Modal>{getModalContent(content?.sys?.contentType?.sys?.id)}</Modal>
    </Dialog>
  );
};

export default AutoModal;
