const raw = [{
    item1: { key: 'sdfd', value: 'sdfd' },
    item2: { key: 'sdfd', value: 'sdfd' },
    item3: { key: 'sdfd', value: 'sdfd' }
  }];
  
  const filteredKeys = ['item1', 'item3'];
  
  const filtered =raw.map((item)=> filteredKeys
    .reduce((obj, key) => ({ ...obj, [key]: item[key] }), {}));
  
  console.log(filtered);