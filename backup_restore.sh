sudo docker compose exec ${dockerのホスト名} pg_dumpall --clean --username ${user名} > /tmp/${ファイル名}.sql
sudo cat /tmp/${ファイル名}.sql | docker-compose exec -T ${dockerのホスト名} psql --username ${user名}
