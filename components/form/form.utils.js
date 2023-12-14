export const scriptId = 'hubspot-form-script';

const alphaDash = '^(?! )[A-Za-z\\- ]+$';

export const addPatternToInput = (form, name, pattern = alphaDash) => {
  form.querySelector(`[name='${name}']`).setAttribute('pattern', pattern);
};

export const getUniqueInstanceId = () => (Date.now().toString(36) + Math.random().toString(10)).replace('.', '');
