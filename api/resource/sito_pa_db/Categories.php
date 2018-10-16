<?php
	require_once './db/dbsito_pa_dbManager.php';
	
/*
 * SCHEMA DB Categories
 * 
	{
		cat_title: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/categories',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'cat_title'	=> isset($body->cat_title)?$body->cat_title:'',
			);

	$obj = makeQuery("INSERT INTO categories (_id, cat_title )  VALUES ( null, :cat_title   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/categories/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM categories WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/categories/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM categories WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/categories',	function () use ($app){
	makeQuery("SELECT * FROM categories");
});


//CRUD - EDIT

$app->post('/categories/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'cat_title'	    => isset($body->cat_title)?$body->cat_title:''	);

	$obj = makeQuery("UPDATE categories SET  cat_title = :cat_title   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>