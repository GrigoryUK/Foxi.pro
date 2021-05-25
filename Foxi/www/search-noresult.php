
<?php include("header_metas.php");?>

<body data-timestamp="1590740281" class="search search-no-results">

<?php include("header.php");?>


<div class="breadcrumbs_container container nomargin">
  <div class="breadcrumbs_block block">
    <ol itemscope="" itemtype="http://schema.org/BreadcrumbList" class="breadcrumbs">
      <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="/"><span itemprop="name">Главная</span></a>
        <meta itemprop="position" content="1">
      </li>
      <i></i>
      <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="current">
        <a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="/?s=hfhg&amp;post_type=product"><span itemprop="name">Поиск</span></a>
        <meta itemprop="position" content="2">
      </li>
    </ol>
  </div>
</div>


<div class="title_container container">
  <div class="title_block block">
    <div class="title_box">
      <div class="search_box">
        <div class="pseudo_button iconfont"></div>
        <form role="search" method="get" name="search_form" id="search_form" class="search_form" action="/">
          <input type="text" value="" name="s" id="s" class="search_field" placeholder="Поиск товара" form="search_form">
          <input type="hidden" name="post_type" value="product" form="search_form">
          <div class="button_wrap iconfont">
            <input type="submit" class="button iconfont" value="." form="search_form">
          </div>
        </form>
      </div>      
    </div>
  </div>
</div>


<div class="searchresults_container container">
  <div class="searchresults_block block">
     
    <div class="search_main noposts">
      <div class="noresults">Увы, никаких материалов по указанному запросу не найдено.<br> Убедитесь, что в поисковом запросе нет опечаток.</div>
    </div>

  </div>
</div>


<?php include("footer.php");?>

