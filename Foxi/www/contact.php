
<?php include("header_metas.php");?>

<body class="contacts">

<?php include("header.php");?>


<div class="breadcrumbs_container container">
  <div class="breadcrumbs_block block">
    <ol itemscope="" itemtype="http://schema.org/BreadcrumbList" class="breadcrumbs">
      <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="/"><span itemprop="name">Главная</span></a>
        <meta itemprop="position" content="1">
      </li>
      <i></i>
      <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="current">
        <a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="/contact"><span itemprop="name">Адреса магазинов</span></a>
        <meta itemprop="position" content="2">
      </li>
    </ol>
  </div>
</div>


<div class="content_container container">
  <div class="content_block block siblings">
    
    <div class="content_top">

      <div class="mob_title">Екатеринбург</div>

      <div class="contacts_mob_nav">
        <button type="button" data-navout="list" class="contacts_mob_nav_item active">Список</button>
        <button type="button" data-navout="map" class="contacts_mob_nav_item">Карта</button>
      </div>

      <div class="content_main sibling2">
        <div class="wrapper">

          <div data-mapid="1" class="map contacts_mob_out contacts_mob_out_map" id="map"></div>

        </div>
      </div>

      <div class="content_side sibling1">
        <div class="wrapper">
          <h1 class="contacts_citytitle">Екатеринбург</h1>

          <div class="addresses_list contacts_mob_out contacts_mob_out_list">

            <a href="/address" data-cityid="1001" data-coox="56.82797556786411" data-cooy="60.5939709999999" class="address_item">
            <div class="address_item_box">
              <span class="address_item_index">1.</span> 
              <span class="address_item_title">ТГ Sweety, 2 этаж. Галерея N5</span>
              <span class="address_item_address">ул. Хохрякова 72</span>
              <span class="address_item_worktime">пн-вс с 10:00 до 21:00</span>
            </div>
            </a>
 
            <a href="/address" data-cityid="1002" data-coox="56.796949567905024" data-cooy="60.62684049999991" class="address_item">
            <div class="address_item_box">
              <span class="address_item_index">2.</span> 
              <span class="address_item_title">ТГ "Дирижабль". Цифровая и бытовая техника.</span>
              <span class="address_item_address">ул. Академика Шварца, д. 17</span>
              <span class="address_item_worktime">пн-вс с 10:00 до 21:00</span>
            </div>
            </a>
 
            <a href="/address" data-cityid="1003" data-coox="56.596949567905024" data-cooy="60.62684049999991" class="address_item">
            <div class="address_item_box">
              <span class="address_item_index">3.</span> 
              <span class="address_item_title">ТГ "Дирижабль". Цифровая и бытовая техника.</span>
              <span class="address_item_address">ул. Академика Шварца, д. 17</span>
              <span class="address_item_worktime">пн-вс с 10:00 до 21:00</span>
            </div>
            </a>

          </div>

        </div>
        <div class="rsm_subtitle">АКСЕССУАРЫ И КОМПЛЕКТУЮЩИЕ<br> ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ</div>
      </div>

    </div>

    <div class="content_bottom">
      <div class="bottom_city">Екатеринбург</div>
      <div class="bottom_rsm">FOXI STORE</div>
    </div>

  </div>
</div>


<?php include("footer.php");?>

