<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');


//Route::post('vehicle','VehicleComtrol@postVehicle');
Route::controller('vehicle', 'VehicleController');
/*Route::get('vehicle','VehicleComtrol@getVehicle');*/

/* основной смысл обхода post\get ограничений - разные роуты в один контролер*/
Route::resource('vehicle', 'VehicleController@getVehicle');
Route::resource('vehicleset', 'VehicleController@postVehicle');

//Route::resource('reserve','ReserveController@reserve');
Route::post('reserve','ReserveController@reserve');

/*
Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
*/