https://www.koatech.info/blog/docker-dev-env-nodejs/
https://webpack.js.org/configuration/devtool/#special-cases

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
