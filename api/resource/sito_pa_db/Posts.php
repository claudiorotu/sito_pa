<?php
	require_once './db/dbsito_pa_dbManager.php';
	
/*
 * SCHEMA DB Posts
 * 
	{
		category_id: {
			type: 'Integer'
		},
		post_author: {
			type: 'String'
		},
		post_content: {
			type: 'String'
		},
		post_date: {
			type: 'Date'
		},
		post_image: {
			type: 'String'
		},
		post_status: {
			type: 'Boolean'
		},
		post_title: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/posts',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'category_id'	=> isset($body->category_id)?$body->category_id:'',
		'post_author'	=> isset($body->post_author)?$body->post_author:'',
		'post_content'	=> isset($body->post_content)?$body->post_content:'',
		'post_date'	=> isset($body->post_date)?$body->post_date:'',
		'post_image'	=> isset($body->post_image)?$body->post_image:'',
		'post_status'	=> isset($body->post_status)?$body->post_status:'',
		'post_title'	=> isset($body->post_title)?$body->post_title:'',
			);

	$obj = makeQuery("INSERT INTO posts (_id, category_id, post_author, post_content, post_date, post_image, post_status, post_title )  VALUES ( null, :category_id, :post_author, :post_content, :post_date, :post_image, :post_status, :post_title   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/posts/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM posts WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/posts/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM posts WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/posts',	function () use ($app){
	makeQuery("SELECT * FROM posts");
});


//CRUD - EDIT

$app->post('/posts/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'category_id'	    => isset($body->category_id)?$body->category_id:'',
		'post_author'	    => isset($body->post_author)?$body->post_author:'',
		'post_content'	    => isset($body->post_content)?$body->post_content:'',
		'post_date'	    => isset($body->post_date)?$body->post_date:'',
		'post_image'	    => isset($body->post_image)?$body->post_image:'',
		'post_status'	    => isset($body->post_status)?$body->post_status:'',
		'post_title'	    => isset($body->post_title)?$body->post_title:''	);

	$obj = makeQuery("UPDATE posts SET  category_id = :category_id,  post_author = :post_author,  post_content = :post_content,  post_date = :post_date,  post_image = :post_image,  post_status = :post_status,  post_title = :post_title   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>