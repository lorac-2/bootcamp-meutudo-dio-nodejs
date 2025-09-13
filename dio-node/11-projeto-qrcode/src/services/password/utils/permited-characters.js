async function permitedCaracters(options) {
  let permited = [];

  // Always include letters
  permited.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  permited.push(..."abcdefghijklmnopqrstuvwxyz");

  if (options.numbers.toLowerCase() === 's') {
    permited.push(..."0123456789");
  }

  if (options.specialCharacters.toLowerCase() === 's') {
    permited.push(..."!@#$%¨&*()_+{}[]-=");
  }

  return permited;
}

export default permitedCaracters;