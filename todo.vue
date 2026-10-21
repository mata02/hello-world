<!-- 空の関数をバインドしてデフォルトの出力を打ち消す -->
<NuxtImg src="/example.jpg" @error="() => {}" />

<!-- または、単に属性として空にする（環境によってはこちら） -->
<NuxtImg src="/example.jpg" onerror="" />
