
<?php include("header_metas.php");?>

<body class="error404">

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
        <a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="/error404"><span itemprop="name">Ошибка 404</span></a>
        <meta itemprop="position" content="2">
      </li>
    </ol>
  </div>
</div>


<div class="title_container container">
    <div class="title_block block">
    <div class="title_box">
      <h1 class="page_title">Страница не найдена</h1>
    </div>
  </div>
</div>


<div class="content_container container">
  <div class="content_block block">
    
    <div class="error_title iconfont"></div>
    <div class="error_subtitle">Данная страница удалена либо не существует</div>

    <a href="/" class="error_logo">
      <img src="/images/foxy_logo_menu-full.svg" alt="">
    </a>

    <div class="content_bottom">
      <div class="bottom_city">Екатеринбург</div>
      <div class="bottom_rsm">FOXI STORE</div>
    </div>

  </div>
</div>


<?php include("footer.php");?>

