<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //dd($request);
        //return parent::toArray($request);
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'slug'=>$this->slug,
            'body'=>$this->body,
            'category'=>$this->category->name,
            'category_id'=>$this->category->id,
            'user'=>$this->user->name,
            'user_id'=>$this->user->id,
            'replies'=>ReplyResource::collection($this->reply),
            'replies_count'=>count($this->reply),
            'created_at'=>$this->created_at->diffForHumans(),

        ];
    }
}
