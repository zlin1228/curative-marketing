import styled from 'styled-components';

const wrapRichTextElements = (richData, components) => {
  let elementArray = [];

  const formattedBodyData = richData?.map((node, index) => {
    const type = node?.props?._contentTypeId;
    if (!type) {
      return node;
    }

    const prevType = richData[index - 1]?.props?._contentTypeId;
    const nextType = richData[index + 1]?.props?._contentTypeId;

    if (components?.some(component => component.title === type)) {
      if (!prevType && !nextType) {
        const Wrapper = components?.filter(component => component.title === type)[0].componentWrapper;
        const ElementWrapper = Wrapper ? Wrapper : styled.div;

        return <ElementWrapper>{node}</ElementWrapper>;
      } else if (type !== prevType && type === nextType) {
        elementArray = [node];

        return;
      } else if (type === prevType && nextType === prevType) {
        elementArray = [...elementArray, node];

        return;
      } else if (type !== nextType) {
        const Wrapper = components?.filter(component => component.title === type)[0].componentWrapper;
        const ElementWrapper = Wrapper ? Wrapper : styled.div;
        elementArray = [...elementArray, node];

        return <ElementWrapper>{elementArray}</ElementWrapper>;
      }
    }

    return node;
  });

  return formattedBodyData;
};

export default wrapRichTextElements;
