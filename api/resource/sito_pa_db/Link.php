<?php
	require_once './db/dbsito_pa_dbManager.php';
	
/*
 * SCHEMA DB Link
 * 
	{
		link: {
			type: 'String'
		},
		link_desc: {
			type: 'String'
		},
		link_order: {
			type: 'Number'
		},
		link_type: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/links',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'link'	=> isset($body->link)?$body->link:'',
		'link_desc'	=> isset($body->link_desc)?$body->link_desc:'',
		'link_order'	=> isset($body->link_order)?$body->link_order:'',
		'link_type'	=> isset($body->link_type)?$body->link_type:'',
			);

	$obj = makeQuery("INSERT INTO link (_id, link, link_desc, link_order, link_type )  VALUES ( null, :link, :link_desc, :link_order, :link_type   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/links/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM link WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/links/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM link WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/links',	function () use ($app){
	makeQuery("SELECT * FROM link");
});


//CRUD - EDIT

$app->post('/links/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'link'	    => isset($body->link)?$body->link:'',
		'link_desc'	    => isset($body->link_desc)?$body->link_desc:'',
		'link_order'	    => isset($body->link_order)?$body->link_order:'',
		'link_type'	    => isset($body->link_type)?$body->link_type:''	);

	$obj = makeQuery("UPDATE link SET  link = :link,  link_desc = :link_desc,  link_order = :link_order,  link_type = :link_type   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>