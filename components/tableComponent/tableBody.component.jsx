import { getMaxRows } from 'components/tableComponent/table.utils';
import InlineTooltip from 'components/tooltip/tooltip.component';

import OptimizedRichText from 'utils/OptimizedRichText';

const TableBody = ({ columns }) => (
  <tbody>
    {Array(getMaxRows(columns))
      .fill(0)
      .map((_, i) => (
        <tr key={i}>
          {columns.map(item => {
            const { label, content } = item?.fields || {};
            const { heading, toolTip, subheading } = content?.[i]?.fields || {};

            const tooltipElement = toolTip?.fields?.body && (
              <span className="tooltip-mark">
                <InlineTooltip content={toolTip?.fields?.body} />
              </span>
            );
            const columnBody = content?.[i]?.sys?.id ? (
              <td key={content[i].sys.id} className="body">
                {tooltipElement}
                {subheading && <div className="tbody-subhead">{OptimizedRichText(subheading)}</div>}
              </td>
            ) : (
              <td className="body-spacer" />
            );
            if (!label) {
              const rowLabel = content?.[i]?.fields ? (
                <td key={`${content[i].sys?.id}-title`} className="title">
                  <div className="tbody-subhead tbody-title">
                    {heading}
                    {tooltipElement}
                  </div>
                </td>
              ) : (
                <td className="title-spacer" />
              );

              return [rowLabel, columnBody];
            }

            return columnBody;
          })}
        </tr>
      ))}
  </tbody>
);

export default TableBody;
