const getQueueNumber = async (number) => {
  await fetch('https://networkmigri.boost.ai/api/chat/v2', {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'sec-ch-ua':
        '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    referrer: 'https://migri.fi/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: '{"command":"POST","type":"action_link","id":"38626986","conversation_id":"YZJ554H-z0PzJ2PDp_VMX4IhZ9RJjNRai-AV6ghkrOj3HM85fhoJj6MY33Cwa7axOCO16WrcKtyrdlIKfpeVSw==","filter_values":["migri","english_start_language"],"client_timezone":"Europe/Helsinki"}',
    method: 'POST',
    credentials: 'omit',
  });

  const res = await fetch('https://networkmigri.boost.ai/api/chat/v2', {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'sec-ch-ua':
        '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    referrer: 'https://migri.fi/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: `{"command":"POST","type":"text","value":"${number}","conversation_id":"Rk2IEPZ_jcn3GUbhu4pip_uv1rHV_neWYRbruC48yy3syXN-CpzIogxk3pUe1jnBCvRnyjTXK5W15CWXz5YnWQ==","filter_values":["migri","english_start_language"],"client_timezone":"Europe/Helsinki"}`,
    method: 'POST',
  });

  const data = await res.json();
  return data;
};

const prompt = require('prompt-sync')({ sigint: true });
const diaryNumber = process.argv[2] || prompt('Enter your diary number here: ');

getQueueNumber(diaryNumber).then((res) =>
  console.log(
    'The application status with this diary number is: ' +
      res?.response?.elements[1]?.payload.json.data.counterValue
  )
);
