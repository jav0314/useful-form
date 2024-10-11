export function validName(name) {
  const formatName = /^[A-Za-z\s]+$/;
  return name.length <= 100 && formatName.test(name);
}
