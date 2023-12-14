import type { Properties } from 'csstype';

const generateTransitions = (props: string[], timing: number, curve?: Properties['transitionTimingFunction']) =>
  props.map((prop, index) => `${prop} ${timing}ms ${curve || 'ease-in-out'}${index !== props.length - 1 ? ',' : ''}`);

export default generateTransitions;
