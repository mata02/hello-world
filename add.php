<?php

namespace App\Controller;

use Cake\ORM\TableRegistry;

class UsersController extends AppController
{
    public function add()    {
        $id = 1;
        $answers = TableRegistry::getTableLocator()->get('answers');
        $query = $answers->query();
        $expr = $query->newExpr()->add('question_id + 1');
        $query->update()
            ->set(['question_id' => $expr])
            ->where(['id' => $id])
            ->execute();
    }
}
