## Laravel PHP Framework


[ABOUT]  React-Laravel 5.0  (php5.6) Application  (release restfull api)

[MATERIALS]   

(https://laravel.ru/docs/v5/)

art  (https://laravel.ru/docs/v5/passport)   по аналогии с vue реализуем react
 

 http://laravel.su/docs/5.0/controllers#restful-resource-controllers   

 [use]

 react sources   in /react  

 deploy   /react/build  => /


/* основной смысл обхода post\get ограничений - разные роуты в один контролер*/


// app/Http/routes.php
....
Route::resource('vehicle', 'VehicleController@getVehicle');
Route::resource('vehicleset', 'VehicleController@postVehicle');

// минус! post невозможно отлаживать. т.е. кажд раз через сборку фронтенда