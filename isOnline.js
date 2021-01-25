var result = (function (param1, param2) {
    return param1 + param2
}(1, 2))
console.log(result)

const locale = (async function (lang) {
  if (lang !== 'en') {
    const { jqx } =  await import(`../../assets/locales/jqx.${lang}`)
    return jqx
  } else {
    return {}
  }
}(process.env.APP_LANG))
console.log(locale)

async function isOnline() {
  const date = new Date();
  const timestamp = date.getTime();
  try {
    await fetch(`/ysap/favicon.ico?${timestamp}`);
  } catch {
    return false;
  }

  return true;
};
