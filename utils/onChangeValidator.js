import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isLength from 'validator/lib/isLength';
import isNumeric from 'validator/lib/isNumeric';
import isPostalCode from 'validator/lib/isPostalCode';
import isURL from 'validator/lib/isURL';

export const testText = (name, value, invalid, setInvalid) => {
  isEmpty(value) || isURL(value) ? setInvalid({ ...invalid, [name]: true }) : setInvalid({ ...invalid, [name]: false });
};

export const testEmail = (name, value, invalid, setInvalid) => {
  isEmail(value) ? setInvalid({ ...invalid, [name]: false }) : setInvalid({ ...invalid, [name]: true });
};

export const testPhone = (name, value, invalid, setInvalid) => {
  isLength(value, { min: 10, max: 11 }) && isNumeric(value)
    ? setInvalid({ ...invalid, [name]: false })
    : setInvalid({ ...invalid, [name]: true });
};

export const testPostal = (name, value, invalid, setInvalid) => {
  isPostalCode(value, 'US') ? setInvalid({ ...invalid, [name]: false }) : setInvalid({ ...invalid, [name]: true });
};

export const testSelect = (name, value, invalid, setInvalid) => {
  value === 'default' ? setInvalid({ ...invalid, [name]: true }) : setInvalid({ ...invalid, [name]: false });
};

const onChangeValidator = (e, invalid, setInvalid) => {
  const name = e.target.name;
  const value = e.target.value.trim();

  switch (name) {
    case 'firstname':
      testText(name, value, invalid, setInvalid);
      break;
    case 'lastname':
      testText(name, value, invalid, setInvalid);
      break;
    case 'email':
      testEmail(name, value, invalid, setInvalid);
      break;
    case 'phone':
      testPhone(name, value, invalid, setInvalid);
      break;
    case 'company':
      testText(name, value, invalid, setInvalid);
      break;
    case 'zip':
      testPostal(name, value, invalid, setInvalid);
      break;
    case 'are_you_an_employer_or_broker_':
      testSelect(name, value, invalid, setInvalid);
      break;
    default:
      break;
  }
};

export default onChangeValidator;
