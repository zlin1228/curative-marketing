const colorizeText = (string, color) => {
  if (!string) {
    return string;
  }

  const textInBrackets = new RegExp(/\{%|%\}/);

  const colorizedArray = string.split(textInBrackets).map((segment, index) => {
    if (index % 2 === 1) {
      return (
        <span key={segment} style={{ color: color || 'inherit' }}>
          {segment}
        </span>
      );
    }

    return segment;
  });

  return colorizedArray;
};

export default colorizeText;
