use Cake\Validation\Validation

public static function postal($check)
{
    return Validation::custom($check, '/^[0-9][0-9-]+[0-9]$/');
}

public static function phone($check)
{
    return Validation::custom($check, '/^[0-9\+][0-9-]+[0-9]$/');
}
