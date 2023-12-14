import isEmpty from 'validator/lib/isEmpty';

const onSubmitValidator = (fields, invalid, setInvalid) => {
  let passed = true;

  Object.entries(fields).forEach(entry => {
    const [key, value] = entry;
    if (isEmpty(value) || invalid[key]) {
      invalid[key] = true;
      passed = false;
    }
  });
  setInvalid({ ...invalid });

  return passed;
};

export default onSubmitValidator;
