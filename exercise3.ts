function toNumber(item: number | string) {
  if (typeof item === 'number') {
    return  10;
  }
  else if (typeof item === 'string') {
    return 20;
  }
  else (typeof item !== 'number' && item !== 'string') {
    throw 'value deve ser um número ou uma string'
  }
}

console.log(toNumber(true))