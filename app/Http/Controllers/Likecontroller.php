<?php

namespace App\Http\Controllers;

use App\Event\LikeEvent;
use App\Model\Reply;
use Illuminate\Http\Request;

class Likecontroller extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth:api', ['except' => ['login','signup']]);
        $this->middleware('JWT');
    }



 public function likeIt(Reply $reply,Request $request){
     //dd('like');

     $reply->like()->create([

         'user_id'=>auth()->id(),

     ]);

     //dd($reply->id);


     broadcast(new LikeEvent($reply->id, 1))->toOthers();



 }
 public function unLikeIt(Reply $reply){

     $reply->like()->where('user_id',auth()->id())->first()->delete();

     broadcast(new LikeEvent($reply->id,0))->toOthers();


     //$reply->like()->where('user_id',1)->first()->delete();
 }
}
