<?php
namespace App\Controller\Component;
 
use Cake\Controller\Component;
use Cake\Http\CallbackStream;
use PhpOffice\PhpSpreadsheet\IOFactory;

class ExcelComponent extends Component
{
    /**
     * Excelファイルをダウンロードします。
     *
     * @param string $fileName ダウンロードファイル名
     * @param PhpOffice\PhpSpreadsheet\Spreadsheet $spreadsheet Excelシート
     * @return void レスポンスデータ
     */
    public function download($fileName, $spreadsheet)
    {
        // バッファをクリア
        ob_end_clean();

        // コールバックをストリーム化
        $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
        $stream = new CallbackStream(function () use ($writer) {
            $writer->save('php://output');
        });

        // ストリームを出力
        return $this->response
            ->withHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
            ->withHeader('Content-Disposition', 'attachment;filename="'.$fileName.'"')
            ->withMaxAge(0)
            ->withBody($stream);
    }
}
