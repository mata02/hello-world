<?php
namespace App\Controller;

class AjaxTestController extends AppController
{

    public function test(){
        if (!$this->request->is('ajax')) {
            throw new BadRequestException();
        }

        $sample_list = [
                [
                  "list" => "ListA",
                  "content" => "ContentA"
                ],
                [
                  "list" => "ListB",
                  "content" => "ContentB"
                ],
                [
                  "list" => "ListC",
                  "content" => "ContentC"
                ]
        ];
 
        $this->set([
            'sample_list' => $sample_list,          // シリアライズする必要があるビュー変数をセットする
            '_jsonOptions' => JSON_FORCE_OBJECT,
            '_serialize' => ['sample_list']         // JsonView がシリアライズするべきビュー変数を指定する
        ]);
    } 
}
