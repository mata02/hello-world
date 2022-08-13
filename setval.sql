SELECT setval(pg_get_serial_sequence('t1', 'id'), coalesce(max(id),0)+1, false) FROM t1;

// テーブルの存在確認
if (Schema::hasTable('bk1_mobile_app_packages')) {
    // "bk1_mobile_app_packages"テーブルは存在していた
}

// カラムのリネーム
Schema::table('mobile_app_packages', function (Blueprint $table) {
    $table->renameColumn('app_type', 'app_type_id');
});

［後で確認］［お知らせの確認］
[Later][View announcements]


body.auth-body {
    min-height: 100vh;
    background-color: var(--light);
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    align-items: center;
    justify-content: center;
}
