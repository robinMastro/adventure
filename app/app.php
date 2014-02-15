<!DOCTYPE html>
<html lang="en">
	<head>
		<title>App | Adventure chain</title>	
		<meta charset="utf-8" />
		<meta name="description" content="Adventure chain." />
		<meta name="keywords" content="Adventure, chain" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
		<link rel="stylesheet" type="text/css" href="../css/normalize.css">
		<link rel="stylesheet" type="text/css" href="../font/font.css">
		<link rel="stylesheet" type="text/css" href="../css/styles.css">
		<link rel="icon" href="img/favicon.ico"/>
		<!--[if lt IE 9]>
		<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->	
    
	</head>
	
  <body class="app-page">
  
  <div id="page">
  
    <div id="app">
      <div class="wrapper">
      
        <a class="button-page" href="#"><img src="../img/store-button.png" alt="store button" /></a>
        
        <a class="button-page" href="#"><img src="../img/stats-button.png" alt="stats button" /></a>
        
        <img id="personnage" src="../img/girl-noob.png" alt="girl noob" />
      
        <div id="speudo">
          
          <p>Naemy</p>
          
        </div><!-- *** END SPEUDO *** -->
        
        <div id="level">
          
          <p>Level <span>2</span></p>
          
        </div><!-- *** END LEVEL *** -->
      
        <div id="panneau">
        
          <p><span id="experience">10</span>xp - <span id="needExperience">40 left to level up</span></p>
          
          <!-- <a href="#" id="tweetIt">Tweet it !</a> -->
          
          <iframe frameborder="0" border="0" cellspacing="0" id="tweetIt" src=""></iframe>
        
          <p id="money"><span id="score">0</span></p>
  
          <div id="Date">Date du jour : </div>
        
        </div><!-- *** END PANNEAU *** -->
        
  
      	<div id="DateDernierClick"></div>
      	
      </div><!-- *** END WRAPPER *** -->
    </div><!-- *** END APP *** -->  
    
    <div id="appButton">
      <div class="wrapper">
    	
    	<div onclick="clickMoney()" id="clickme"></div>
    	
      </div><!-- *** END WRAPPER *** -->
    </div><!-- *** END APPBUTTON *** -->
    
  </div><!-- *** END PAGE *** -->    	
  
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="../js/jeu.js"></script>
  </body>
	 
</html>