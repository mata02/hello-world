$now = Time::now();
$now->year($date->format('Y'))
    ->month($date->format('n'))
    ->day($date->format('j'));
