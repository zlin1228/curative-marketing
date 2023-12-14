import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FiHelpCircle } from 'react-icons/fi';

import { TooltipIcon } from 'components/tooltip/tooltip.styles';

import OptimizedRichText from 'utils/OptimizedRichText';

const InlineTooltip = ({ content }) => {
  const overlayContent = <Tooltip>{OptimizedRichText(content)}</Tooltip>;

  return (
    <OverlayTrigger placement="top" overlay={overlayContent}>
      <TooltipIcon>
        <FiHelpCircle />
      </TooltipIcon>
    </OverlayTrigger>
  );
};

export default InlineTooltip;
