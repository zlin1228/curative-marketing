import ComponentImage from 'components/image/image.component';

const TableHeader = ({ columns }) => (
  <thead>
    <tr>
      {columns.map(item => {
        const { label, Subheading } = item?.fields || {};
        if (!label) {
          const filler = [<th key={0} className="heading-spacer" />];
          if (item.fields.content?.[0]?.fields?.subheading) {
            filler.push(<th key={1} className="heading-spacer" />);
          }

          return filler;
        }

        return (
          <th key={item?.sys?.id}>
            {label && (
              <div className="thead-content">
                {item?.fields?.icon?.fields?.desktopIcon && (
                  <ComponentImage
                    src={`https:${item.fields.icon.fields.desktopIcon.fields?.file?.url}`}
                    alt={item.fields.icon.fields.desktopIcon.fields?.title}
                    width="100%"
                    maxWidth="48px"
                    aspectRatio={1}
                  />
                )}
                <h6>{label}</h6>
                {Subheading && <div className="thead-subhead">{OptimizedRichText(Subheading)}</div>}
              </div>
            )}
          </th>
        );
      })}
    </tr>
  </thead>
);

export default TableHeader;
