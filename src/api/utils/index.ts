import env from 'react-dotenv';
import qs from 'qs';

const appid = { appid: env.API_KEY }

export function apiUrl (path: string, params?: object): string {
  const url = `${env.API_URL}/${path}`
  if (!params) return url
  return `${url}?${qs.stringify({ ...appid, ...params }, { arrayFormat: 'brackets' })}`
}