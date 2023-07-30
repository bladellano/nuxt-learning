export default (context, inject) => {
  // inject('name','Jon');
  inject('toUpperCase', (name) => name.toUpperCase());

};
