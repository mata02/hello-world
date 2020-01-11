$query = <<<SQL
WITH RECURSIVE anc (class,name,code,parent) AS (
 SELECT permission.class,permission.name,permission.code,permission.parent
   FROM permission
  WHERE permission.code = :controller
 UNION ALL
 SELECT permission.class,permission.name,permission.code,permission.parent
   FROM anc,permission
  WHERE anc.parent = permission.code)
SELECT name FROM anc ORDER BY class;
SQL;

$results = $connection->execute(query, ['controller' => 'AppController'])
                      ->fetchAll('assoc');
