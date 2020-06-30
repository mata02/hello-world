<?php
class StringUtil
{
    /**
     * 機体番号を3-1-6形式にフォーマットします。
     *
     * @param string $str 機体番号
     * @return string 3-1-6形式の機体番号
     */
    public static function vehicleNoFormat($str)
    {
        $unFmt = StringUtil::vehicleNoUnFormat($str);
        if (mb_strlen($unFmt) < 5) {
            return $str;
        }

        return mb_substr($unFmt, 0, 3) . '-' . mb_substr($unFmt, 3, 1) . '-' . mb_substr($unFmt, 4);
    }

    /**
     * 機体番号からハイフンを取り除きます。
     *
     * @param string $str 機体番号
     * @param bool $upper 大文字変換するか否か
     * @return string ハイフンを除いた機体番号
     */
    public static function vehicleNoUnFormat($str, $upper = true)
    {
        $unFmt = mb_ereg_replace('[-]', '', $str);
        if ($upper) {
            return mb_strtoupper($unFmt);
        }

        return $unFmt;
    }
}
