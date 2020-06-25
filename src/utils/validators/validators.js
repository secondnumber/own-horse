export const validate = (values) => {
  if (!values) {
    return 'Please, enter e-mail address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
    return 'Invalid email address';
  } else {
    return undefined;
  }
};
