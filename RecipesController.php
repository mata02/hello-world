<?php

namespace App\Controller\Api;

use Cake\Event\Event;

class RecipesController extends AppController
{
    public function beforeFilter(Event $event)
    {
        $this->RequestHandler->renderAs($this, 'json');
    }

    public function index()
    {
        $recipes = ['id' =>'234567'];
        $this->set([
            'recipes' => $recipes,
            '_serialize' => 'recipes'
        ]);
    }

    public function add()
    {
        $message = 'Controller/Api add';
        $this->set([
            'message' => $message,
            '_serialize' => ['message']
        ]);
    }
}
