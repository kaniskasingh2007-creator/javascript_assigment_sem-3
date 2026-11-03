function validateForm(name) {
  const errors = [];
  if (!name || name.trim() === '') {
    errors.push('Name is required');
  }
  return errors;
}
console.log(validateForm('Asha'));
console.log(validateForm(''));