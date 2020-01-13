$query = <<<SQL
WITH RECURSIVE an (level,name,code,parent,lang) AS (
 SELECT permission.level,permission.name,permission.code,permission.parent,permission.lang
   FROM permission
  WHERE permission.code = :controller AND permission.lang = 'ja_JP'
 UNION ALL
 SELECT permission.level,permission.name,permission.code,permission.parent,permission.lang
   FROM an,permission
  WHERE an.parent = permission.code AND an.lang = permission.lang)
SELECT name FROM an ORDER BY level;
SQL;

$results = $connection->execute(query, ['controller' => 'AppController'])
                      ->fetchAll('assoc');
