SELECT setval(pg_get_serial_sequence('t1', 'id'), coalesce(max(id),0)+1, false) FROM t1;
