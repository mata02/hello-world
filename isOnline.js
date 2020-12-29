export default {
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-cheap-module-source-map'
      }
    }
  }
}

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
