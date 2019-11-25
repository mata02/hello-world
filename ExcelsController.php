<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Http\CallbackStream;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Reader\Xls as XlsReader;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Cell\DataType;

/**
 * Excels Controller
 *
 *
 * @method \App\Model\Entity\Excel[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ExcelsController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function print()
    {
        // Excelコンポーネントのインスタンスを生成
        $this->loadComponent('Excel');

        // スプレッドシートを作成
        $spreadsheet = new Spreadsheet();

        // ファイルのプロパティを設定
        $spreadsheet->getProperties()->setTitle("タイトル");

        // シート作成
        $spreadsheet->getActiveSheet('sheet1')->UnFreezePane();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle("シートタイトル");

        // 値を設定
        $sheet->setCellValue('A1', 'Hello');
        $sheet->setCellValue('B1', 'PhpSpreadsheet');
        // 書式を指定して値を設定
        $sheet->setCellValueExplicit(
            'C1',
            'World',
            DataType::TYPE_STRING
        );

        // テキストの中央寄せ
        $sheet->getStyle('A1:B1')->applyFromArray(['alignment'=>['horizontal'=>Alignment::HORIZONTAL_CENTER]]);

        // 枠線を設定
        $sheet->getStyle('B1')->getBorders()->getOutline()->setBorderStyle(Border::BORDER_THIN);

        // 列の横幅を設定
        $sheet->getColumnDimension('B')->setWidth(8);

        // テキストの縦寄せ
        $sheet->getStyle('C1:D1')->getAlignment()->setVertical(Alignment::VERTICAL_TOP);

        // テキストの折り返しを設定
        $sheet->getStyle('C1')->getAlignment()->setWrapText(true);

        // 配列の形で値を設定
        $dataList = [
            ['Happy Bingo!'],
            ['B', 'I', 'N', 'G', 'O'],
            [26, 15, 18, 17, 13],
            ['6', '11', 2, 5, '14'],
            [1, 8, NULL, 4, 19],
            [21, 27, 3, 20, 24],
            [16, 22, 23, 25, 12],
        ];
        $sheet->fromArray($dataList, NULL, 'C6', true);

        // Excelコンポーネントでダウンロード出力
        return $this->Excel->download('sample.xlsx', $spreadsheet);
    }
}
