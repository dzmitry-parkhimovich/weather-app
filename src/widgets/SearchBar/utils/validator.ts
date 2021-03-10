import { ValidationErrors } from 'final-form';
import validate from 'validate.js';

import { ISeachBarValues } from '../types';
import { FORM_FIELDS } from '../consts';

const constraints =  {
  [FORM_FIELDS.SEARCH_QUERY]: {
    format: {
      pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
      message: '^Zip code is not correct',
    },
    presence: {
      message: '^Zip code is required',
    },
  },
}

export default function validator(values: ISeachBarValues): ValidationErrors {
  return validate(values, constraints)
}
