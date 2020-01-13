$query = <<<SQL
WITH RECURSIVE an (level,name,code,parent) AS (
 SELECT permission.level,permission.name,permission.code,permission.parent
   FROM permission
  WHERE permission.code = :controller AND permission.lang = 'ja_JP'
 UNION ALL
 SELECT permission.level,permission.name,permission.code,permission.parent
   FROM an,permission
  WHERE an.parent = permission.code AND an.lang = 'ja_JP')
SELECT name FROM an ORDER BY level;
SQL;

$results = $connection->execute(query, ['controller' => 'AppController'])
                      ->fetchAll('assoc');
