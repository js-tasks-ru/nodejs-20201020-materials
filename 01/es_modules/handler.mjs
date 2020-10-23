import lodash from 'lodash';

let i = 0;

function handler(req, res) {
  console.log('request');
  i++;
  res.end(JSON.stringify(lodash.range(i)));
}

export default handler;
