// 2秒後に値を返す
function getNum(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    });
}

// 6秒後に出力
async function f1() {
    const n1 = await getNum(1); // 直列１（+2秒）
    const n2 = await getNum(2); // 直列２（+4秒）
    const n3 = await getNum(3); // 直列３（+6秒）
    console.log(n1, n2, n3);
}

// 2秒後に出力
async function f2() {
    const p1 = getNum(1); // 並列１（+2秒）
    const p2 = getNum(2); // 並列２（+2秒）
    const p3 = getNum(3); // 並列３（+2秒）
    const n1 = await p1;
    const n2 = await p2;
    const n3 = await p3;
    console.log(n1, n2, n3);
}
