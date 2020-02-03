$now = Time::now();
$now->year($date->format('Y'))
    ->month($date->format('n'))
    ->day($date->format('j'));

$str = "確認したい文字列";
$len = mb_strlen($str, "UTF-8");
$wdt = mb_strwidth($str, "UTF-8");
if($len == $wdt) {
// すべて半角の場合
} elseif($len * 2 == $wdt) {
// すべて全角の場合
} else {
// 全角・半角が混在している場合
}
