<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Question extends Model
{
//    protected $fillable  = [
//        'title','slug','body','category_id','user_id'
//    ];

    protected  $guarded=[];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function category(){
    return $this->belongsTo(Category::class);
    }
    public function reply(){
        return $this->hasMany(Reply::class)->latest();
    }

   //store slug from title 
    protected static function boot()
    {
        parent::boot();

        static::creating(function($question){

            $question->slug = str_slug($question->title);

        });
    }
}
