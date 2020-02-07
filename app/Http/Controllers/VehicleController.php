<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class VehicleController extends Controller {

//CURLOPT_POSTFIELDS => "{\"PlateNum\": \"BH3003CM\"}",

// TODO: URL tOKEN УЛОЖИТЬ В ENV !!!!
	public function getVehicle(Request $request){

		$curl = curl_init();

		$post_fields = '"{\"PlateNum\": \"'.'BH3003CM'.'\"}"';

		curl_setopt_array($curl, array(
		  CURLOPT_URL => "https://epolissbx.askods.dn.ua/api/v2/get_vehicle/ByPlateNum/",
		  CURLOPT_RETURNTRANSFER => true,
		  CURLOPT_ENCODING => "",
		  CURLOPT_MAXREDIRS => 10,
		  CURLOPT_TIMEOUT => 30,
		  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		  CURLOPT_CUSTOMREQUEST => "POST",
		  //CURLOPT_POSTFIELDS => "{\"PlateNum\": \"BH3003CM\"}",
		
		  CURLOPT_HTTPHEADER => array(
			"Authorization: Token eaa9405c0eff7515106528d5850e89cbd411fb35"
		  ),
		));
		
		curl_setopt($curl,CURLOPT_POSTFIELDS,"{\"PlateNum\": \"".$request->num."\"}");

		$response = curl_exec($curl);
		$err = curl_error($curl);
	
		curl_close($curl);
		
		$result = str_replace('FContract.','',$response);
		//$result = str_replace('FContract.','',$response);
		$result = str_replace('.','',$result);
		$resultArr = json_decode($result)->SearchResult;
		//$data = end($resultArr);

		$data = json_decode($result)->SearchResult[0];

		return response()->json(['result' => $data]);

	}

	public function postVehicle(Request $request){
	

		return response()->json(['result' => $request->data]);

	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
