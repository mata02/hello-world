https://stackoverflow.com/questions/55907725/nuxt-not-adding-bodyattr-on-refresh-ssr

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
