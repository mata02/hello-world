import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();

const requireConfirm = () => {
  return new Promise((resolve) => {
    confirm.require({
      message: '処理を続行しますか？',
      header: '確認',
      accept: () => resolve(true),
      reject: () => resolve(false),
      onHide: () => resolve(false) // モーダルが直接閉じられた場合も考慮
    });
  });
};

// 使い方
const handleAction = async () => {
  const res = await requireConfirm();
  if (res) {
    // OK時の処理
  }
};
