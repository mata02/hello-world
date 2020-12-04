everpresentrowplaceholder : '確定 ',
okstring: 'OK',
cancelstring: 'キャンセル'

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
