export const API_ROOT       = 'https://cdn.contentful.com';
export const SPACE_ID       = 'l461w4vajrax';
export const ENVIRONMENT_ID = 'master';
export const ACCESS_TOKEN   = '6d284c667d433224cc9a0c8f395abd8ed3b04316e1d383d56e9fc5b19b850bc9';
export const MASTER_URL     = `${API_ROOT}/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}`;

export const URL_PRODUCTS   = `${MASTER_URL}/entries?access_token=${ACCESS_TOKEN}&content_type=products&select=fields`;
export const URL_ASSET      = `${MASTER_URL}/assets`;
