<?php
use Cake\Datasource\ConnectionManager;

$connection = ConnectionManager::get('default');

$results = $this->getConnection()
    ->execute('SELECT * FROM func(:id)', ['id' => 1])
    ->fetchAll('assoc');

?>
