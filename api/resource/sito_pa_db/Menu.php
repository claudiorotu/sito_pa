<?php
	require_once './db/dbsito_pa_dbManager.php';
	
/*
 * SCHEMA DB Menu
 * 
	{
		menu_data: {
			type: 'Date'
		},
		menu_link: {
			type: 'String'
		},
		menu_ordine: {
			type: 'Number'
		},
		menu_padre: {
			type: 'Number'
		},
		menu_voce: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/menus',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'menu_data'	=> isset($body->menu_data)?$body->menu_data:'',
		'menu_link'	=> isset($body->menu_link)?$body->menu_link:'',
		'menu_ordine'	=> isset($body->menu_ordine)?$body->menu_ordine:'',
		'menu_padre'	=> isset($body->menu_padre)?$body->menu_padre:'',
		'menu_voce'	=> isset($body->menu_voce)?$body->menu_voce:'',
			);

	$obj = makeQuery("INSERT INTO menu (_id, menu_data, menu_link, menu_ordine, menu_padre, menu_voce )  VALUES ( null, :menu_data, :menu_link, :menu_ordine, :menu_padre, :menu_voce   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/menus/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM menu WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/menus/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM menu WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/menus',	function () use ($app){
	makeQuery("SELECT * FROM menu");
});


//CRUD - EDIT

$app->post('/menus/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'menu_data'	    => isset($body->menu_data)?$body->menu_data:'',
		'menu_link'	    => isset($body->menu_link)?$body->menu_link:'',
		'menu_ordine'	    => isset($body->menu_ordine)?$body->menu_ordine:'',
		'menu_padre'	    => isset($body->menu_padre)?$body->menu_padre:'',
		'menu_voce'	    => isset($body->menu_voce)?$body->menu_voce:''	);

	$obj = makeQuery("UPDATE menu SET  menu_data = :menu_data,  menu_link = :menu_link,  menu_ordine = :menu_ordine,  menu_padre = :menu_padre,  menu_voce = :menu_voce   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>