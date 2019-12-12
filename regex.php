use Cake\Validation\Validation

    /**
     * 郵便番号の形式をチェックします。
     *
     * @param string $check チェックする文字列
     * @return bool チェック結果
     */
    public static function postal($check)
    {
        return Validation::custom($check, '/^[0-9][0-9-]+[0-9]$/');
    }

    /**
     * 電話番号の形式をチェックします。
     *
     * @param string $check チェックする文字列
     * @return bool チェック結果
     */
    public static function phone($check)
    {
        return Validation::custom($check, '/^[0-9\+][0-9-]+[0-9]$/');
    }

postal('A00-1234');
postal('123-000Z');

postal('123-4567');
postal('1234567');

phone('-819012345678');
phone('a123456789');
phone('012345678z');

phone('090-1234-5678');
phone('09012345678');
phone('+819012345678');
