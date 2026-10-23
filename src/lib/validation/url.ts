const unicode = '\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF';
const unreserved = `[a-z\\d${unicode}]`;
const pctEncoded = '%[\\da-f]{2}';
const subDelims = "[!$&'()*+,;=]";
const userInfo = `(?:${unreserved}|${pctEncoded}|${subDelims}|:)*`;
const domainLabel = `${unreserved}(?:[a-z\\d_~${unicode}-]*${unreserved})?`;
const topLevelLabel = `[a-z${unicode}](?:[a-z\\d_~${unicode}-]*[a-z${unicode}])?`;
const ipv4Octet = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)';
const ipv4Address = `(?:${ipv4Octet}\\.){3}${ipv4Octet}`;
const host = `(?:${ipv4Address}|(?:${domainLabel}\\.)+${topLevelLabel}\\.?)`;
const pchar = `(?:${unreserved}|${pctEncoded}|${subDelims}|[:@])`;
const path = `\\/(?:${pchar}+(?:\\/${pchar}*)*)?`;
const queryOrFragmentChar = `(?:${pchar}|[/?]|[\\uE000-\\uF8FF])`;

const urlRegex = new RegExp(
	`^(?:(?:https?):\\/\\/|(?:mailto|sms|tel):)(?:www\\.)?(?:${userInfo}@)?${host}(?::\\d*)?(?:${path})?(?:\\?${queryOrFragmentChar}*)?(?:#${queryOrFragmentChar}*)?$`,
	'i'
);

export default urlRegex;
