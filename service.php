$names = (collection($results))->extract('name');
$title = implode('&nbsp;&gt;&nbsp;', $names->toList());
