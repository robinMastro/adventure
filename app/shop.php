<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Shop | Adventure chain</title>	
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
	
  <body>
  
  <div id="page">
  
    <div id="shop">
      <div class="wrapper">
    
        <h1>Shop</h1>
        
        <ul id="head-shop">
          <li>Shoes</li>
          <li>Pants</li>
          <li>Top</li>
          <li>Hat</li>
        </ul>
        
        <div id="content-item">
          <div class="wrapper-item">
          
            <div class="shoes col-item">
              <p class="shop-item shoes-1">Shoes 1</p>
              <p class="shop-item shoes-2">Shoes 1</p>
              <p class="shop-item shoes-3">Shoes 1</p>
              <p class="shop-item shoes-4">Shoes 1</p>
            </div><!-- *** END SHOES *** -->
            
            <hr class="clear"/>
          </div><!-- *** END WRAPPER ITEM *** -->
          
          <div class="wrapper-item">
    
            <div class="pants col-item">
              <p class="shop-item pants-1">Pants 1</p>
              <p class="shop-item pants-2">Pants 1</p>
              <p class="shop-item pants-3">Pants 1</p>
              <p class="shop-item pants-4">Pants 1</p>
            </div>
            
            <hr class="clear"/>
          </div><!-- *** END WRAPPER ITEM *** -->
          
          <div class="wrapper-item">
    
            <div class="top col-item">
              <p class="shop-item top-1">Top 1</p>
              <p class="shop-item top-2">Top 1</p>
              <p class="shop-item top-3">Top 1</p>
              <p class="shop-item top-4">Top 1</p>
            </div>
            
            <hr class="clear"/>
          </div><!-- *** END WRAPPER ITEM *** -->
          
          <div class="wrapper-item">
    
            <div class="hat col-item">
              <p class="shop-item hat-1">Hat 1</p>
              <p class="shop-item hat-2">Hat 1</p>
              <p class="shop-item hat-3">Hat 1</p>
              <p class="shop-item hat-4">Hat 1</p>
            </div>
            
            <hr class="clear"/>
          </div><!-- *** END WRAPPER ITEM *** -->
          <hr class="clear"/>
        </div><!-- *** END CONTENT ITEM *** -->
        
      </div><!-- *** END WRAPPER *** -->      
    </div><!-- *** END SHOP *** -->
    
    <div id="marchand">
      <div class="wrapper">
      
        <img src="../img/shop/marchand.svg" alt="Buy me something" />
        
        <div id="box-marchand">
        
          <p id="text-marchand">This piece is a rare form of art, a very intricate 
          object ! <span>+10% xp + 1% gold</span>
          </p>
          
          <p id="buyIt">Buy it</p>
          <p id="tryIt">Try it</p>
          
          <hr class="clear" />
        
        </div><!-- *** END TEXT MARCHAND *** -->
      
      </div><!-- *** END WRAPPER *** -->
    </div><!-- *** END PAGE *** -->
    
  </div><!-- *** END PAGE *** -->
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script>
    $(".shoes .shop-item").click(function(){
        $(".shoes .shop-item").removeClass("item-current");
    });
    $(".shoes-1").click(function(){
        $(".shoes-1").addClass("item-current");
    });
    $(".shoes-3").click(function(){
        $(".shoes-3").addClass("item-current");
    });
  </script>
  
  </body>
	 
</html>