<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

//Auth::routes();

Route::get('/', 'HomeController@index');
Route::get('/{any}', 'HomeController@index');
Route::get('/{any}/{any1}', 'HomeController@index');

//question
//Route::Resource('/question','QuestionController');
//category
//Route::Resource('/category','CategoryController');



