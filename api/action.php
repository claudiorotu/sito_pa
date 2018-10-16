<?php
//dependency import
require 'properties.php';
require 'lib/Slim/Slim.php';
require 'security/Security.php';

//init Slim Framework
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->add(new \Security($app));
require 'security/Login.php';
require 'security/ManageUser.php';

//resources
	//db sito_pa_db
		require('./resource/sito_pa_db/custom/CategoriesCustom.php');
		require('./resource/sito_pa_db/Categories.php');
		require('./resource/sito_pa_db/custom/LinkCustom.php');
		require('./resource/sito_pa_db/Link.php');
		require('./resource/sito_pa_db/custom/MenuCustom.php');
		require('./resource/sito_pa_db/Menu.php');
		require('./resource/sito_pa_db/custom/PostsCustom.php');
		require('./resource/sito_pa_db/Posts.php');
		require('./resource/sito_pa_db/custom/UserCustom.php');
		require('./resource/sito_pa_db/User.php');
	

$app->run();


?>
