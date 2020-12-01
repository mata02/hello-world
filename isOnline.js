                createClusterLayer(
                    clusterFeatures,
                    '#CC9933',
                    FEATURES_CLUSTER_LAYER_NAME,
                    vectorLayer
                )

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
