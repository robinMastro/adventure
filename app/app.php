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
		
   <script type="text/javascript">
  function ouvre(fichier) {ff=window.open(fichier,"popup","width=700,height=500,left=100,top=100") }
  </script> 
  
	</head>
	
  <body class="app-page">
  
  <div id="page">
  
    <div id="app">
      <div class="wrapper">
      
        <a class="button-page" href="shop.php"><img src="../img/store-button.png" alt="store button" /></a>
        
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
          
          <a id="tweetIt" title="Partager sur Twitter" href="http://twitter.com/share?&amp;text=Un nouveau jeu trop bien :" target="popup" onClick="ouvre('http://twitter.com/share?&amp;text=Un nouveau jeu trop bien ');return false" >Tweet it !</a>
          
        
          <p id="money"><span id="score">0</span></p>
  
          <div id="Date">Date du jour : </div>
        
        </div><!-- *** END PANNEAU *** -->
        
  
      	<div id="DateDernierClick"></div>
      	
      </div><!-- *** END WRAPPER *** -->
    </div><!-- *** END APP *** -->  
    
    <div id="appButton">
      <div class="wrapper">
      
      
      <div class="chainpop pop">

          
              <label for="chainname">How is your character called ?</label>
              
              <input  type="text" size="30" name="habitudeAAjouter" id="habitudeAAjouter"/>
              
              <input type="button" value="OK" name="commit" id="chain_submit" onClick="ajoutHabit()"/> 
        

      </div>
      
      <select name="chainlist" id="habitude">
        <option value="Milk">Fresh Milk</option>
        <option value="Cheese">Old Cheese</option>
        <option value="Bread">Hot Bread</option>
      </select>
      
      <div id="addchain"></div>
    	
    	<div onclick="clickMoney()" id="clickme"></div>
    	
      </div><!-- *** END WRAPPER *** -->
    </div><!-- *** END APPBUTTON *** -->
    
  </div><!-- *** END PAGE *** -->    	
  
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="../js/jeu.js"></script>
  <script src="../js/addchain.js"></script>
  <script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>
  </body>
	 
</html>