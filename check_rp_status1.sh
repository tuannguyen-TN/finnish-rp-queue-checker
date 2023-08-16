#!/bin/bash

curl 'https://networkmigri.boost.ai/api/chat/v2' \
  -H 'authority: networkmigri.boost.ai' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'content-type: application/json' \
  -H 'dnt: 1' \
  -H 'origin: https://migri.fi' \
  -H 'referer: https://migri.fi/' \
  -H 'sec-ch-ua: "Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"' \
  -H 'sec-ch-ua-mobile: ?1' \
  -H 'sec-ch-ua-platform: "Android"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36' \
  --data-raw '{"command":"POST","type":"action_link","id":"38607043","conversation_id":"Px17Uj9vPcT--dhmfMZliN7xjM0UHQThlwUUGo1vjVpdlM63uBSgkvexQXSHgh0S-YUJ9S6FxAPz5cxSLegIoA==","filter_values":["migri","english_start_language"],"client_timezone":"Europe/Helsinki"}' \
  --compressed
