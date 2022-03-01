# 追加
	同一図形がない
		交差図形がなければ、追加
		交差図形があれば、エラー

	同一図形がある
		ZGISほ場なら、追加しない
		ZGISほ場以外なら、エラー

# 置換
	同一図形がない
		交差図形がなければ、追加
		交差図形があれば、エラー

	同一図形がある
		同一図形以外に交差図形がなければ、削除後追加
		同一図形以外に交差図形があれば、エラー

```sql
SELECT * FROM table a, table b
 WHERE (a.geom && b.geom)
 AND ST_AsText(ST_Intersection(a.geom, b.geom)) NOT LIKE '%EMPTY%'
 AND ST_AsText(ST_Intersection(a.geom, b.geom)) NOT '%POLYGON%';

SELECT * FROM table a, table b
 WHERE (a.geom && b.geom) AND ST_Equals(a.geom, b.geom);
```
