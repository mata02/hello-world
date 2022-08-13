SELECT setval(pg_get_serial_sequence('t1', 'id'), coalesce(max(id),0)+1, false) FROM t1;

// テーブルの存在確認
if (Schema::hasTable('bk1_mobile_app_packages')) {
    // "bk1_mobile_app_packages"テーブルは存在していた
}

// カラムのリネーム
Schema::table('mobile_app_packages', function (Blueprint $table) {
    $table->renameColumn('app_type', 'app_type_id');
});
