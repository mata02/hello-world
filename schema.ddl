-- スキーマ再作成
DROP SCHEMA IF EXISTS ysap CASCADE;
CREATE SCHEMA AUTHORIZATION ysap;

-- カレントスキーマ変更
SET search_path TO ysap,public,topology;

-- マクロ修正
-- DROP TABLE name;
DROP TABLE IF EXISTS name;
