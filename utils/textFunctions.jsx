export const colorizeText = title =>
  title.split(/\[%|%\]/).map((segment, i) => {
    if (i % 2 === 1) {
      return (
        <span key={segment} className="colorizeText">
          {segment}
        </span>
      );
    }

    return segment;
  });

/**
 * @param id any string, including special characters
 * @returns an all lowercase string with spaces replaced by hyphens
 */
export const stringToKebabCase = id =>
  id
    ?.toLowerCase()
    .replace(/[^A-Za-z0-9\- ]|(\s+\-+)/g, '')
    .trim()
    .replace(/\s+/g, '-');

export const toCamelCase = string => string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());

export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
