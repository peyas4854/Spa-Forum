<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;



class NotificationController extends Controller
{
    use Notifiable;

    public function __construct()
    {
        //$this->middleware('auth:api', ['except' => ['login','signup']]);
        $this->middleware('JWT', ['except' => ['markasread']]);
    }

    public function index(){
        return [
          'all' => auth()->user()->notifications,
          'read' => auth()->user()->readNotifications,
          'unread' => auth()->user()->unreadNotifications,

        ];
    }

    public function markasread(Request $request){
    	auth()->user()->notifications->where('id',$request->id)->markAsRead();
    	//dd($request->id);

    }



}
