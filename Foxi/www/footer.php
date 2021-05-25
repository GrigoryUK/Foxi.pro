<div class="footer_container container">

  <div class="footer_top block">

    
    <div class="contact_card" itemscope="" itemtype="http://schema.org/Organization">
      <span itemprop="name">Foxi Store</span>
      <div itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
        <span itemprop="streetAddress">Хохрякова, 72</span>
        <span itemprop="postalCode">620105</span>
        <span itemprop="addressLocality">Екатеринбург</span>
      </div>
      <span itemprop="telephone">+7 (343) 382-25-45</span>
      <span itemprop="email">info@foxi.pro</span>
    </div>

    <div class="footer_about">

      <div class="footer_logo">
        <img src="/images/foxi_logo_footer.svg" alt="">
      </div>

      <div class="footer_shop">Магазин аксессуаров<br> для мобильных устройств</div>
  
      <a href="tel:73433825517" class="phone">+7 (343) 382-55-17</a>

      <div class="footer_address iconfont">Екатеринбург, ул. Хохрякова 72 ТГ Sweety, 2 этаж. галерея №5</div>

      <a href="tel:73433825517" class="phone mob_phone">+7 (343) 382-55-17</a>

    </div>
    
    <div class="footer_cols">

      <div class="footer_col footer_col1">
        <div class="footer_title">ИНФОРМАЦИЯ</div>
        <ul>
          <li><a href="/contact">Адреса магазинов</a></li>
          <li><a href="/article">Доставка</a></li>
          <li><a href="/article">Печать на чехлах</a></li>
          <li><a href="/article">Для бизнеса</a></li>
        </ul>
      </div>
  
      <div class="footer_col footer_col2">
        <div class="footer_title">ПОКУПКИ</div>
        <ul>
                      <li><a href="/product-category/smartphones">Для телефонов</a></li>
                                <li><a href="/product-category/tablets">Для планшетов</a></li>
                                <li><a href="/product-category/notebooks">Для ноутбуков</a></li>
                                <li><a href="/product-category/watchs">Для смарт часов</a></li>
                                      </ul>
      </div>

      <div class="spacer"></div>
    </div>

    <div class="footer_subscribe">
      <div class="form_box">
        <li id="wysija-2" class="widget widget_wysija"><h2 class="widgettitle">ПОДПИСЫВАЙТЕСЬ НА НАС</h2>
          <div class="widget_wysija_cont">
            <div id="msg-form-wysija-2" class="wysija-msg ajax"></div>
            <form id="form-wysija-2" method="post" action="#wysija" class="widget_wysija">
              <p class="wysija-paragraph">
                <input type="text" name="wysija[user][email]" class="wysija-input validate[required,custom[email]]" title="Введите e-mail" placeholder="Введите e-mail" value="">
                <span class="abs-req">
                    <input type="text" name="wysija[user][abs][email]" class="wysija-input validated[abs][email]" value="">
                </span>
              </p>
              <input class="wysija-submit wysija-submit-field" type="submit" value="Подписаться">
              <input type="hidden" name="form_id" value="1">
              <input type="hidden" name="action" value="save">
              <input type="hidden" name="controller" value="subscribers">
              <input type="hidden" value="1" name="wysija-page">
              <input type="hidden" name="wysija[user_list][list_ids]" value="3">  
            </form>
          </div>
        </li>
      </div>
      <div class="footer_socials">
        <a href="https://vk.com/rsm_shop_ru" target="_blank" class="iconfont vk"></a>
        <a href="https://www.instagram.com/rsm_shop.ru" target="_blank" class="iconfont in"></a>
      </div>
    </div>

  </div>

  <div class="footer_bottom block"> 
  <span>© Все права защищены 2020 г.</span> Информация в интернет-магазине www.foxi.pro не является публичной офертой. Указанные цены могут отличаться от цен в розничной сети и действуют только при оформлении заказаa через интернет-магазин www.foxi.pro
  </div>

</div>


</div>
</div>


</div>


<script src="/js/jquery-ui.min.js"></script>
<script src="/js/jquery.ui.touch-punch.min.js"></script>
<script src="/js/js.cookie.min.js"></script>
<script src="/js/scripts.js?<?php echo rand();?>"></script>


<script>
if ( $('#map').length ) {
  
  var n = 1;
  var markers_array = []; 

  var city_in_first = $('.address_item:first');
  var city_in_first_id = city_in_first.attr('data-cityid');  
  var first_coox = city_in_first.attr('data-coox');  
  var first_cooy = city_in_first.attr('data-cooy'); 
  first_coox = first_coox * n;
  first_cooy = first_cooy * n; 

  $.getScript("https://api-maps.yandex.ru/2.1/?apikey=616ae486-d3e6-4baf-b876-784d60ed3cc6&lang=ru_RU").done(function( script, textStatus ) {
      
  ymaps.ready(function () {

    var myMap = new ymaps.Map("map", {
      center: [first_coox,first_cooy],
      zoom: 12,
      controls: ['zoomControl','fullscreenControl']
    });

    $('.address_item').each(function(){

      var citytitle = $(this).find('.address_item_title').text();  
      var cityid = $(this).attr('data-cityid');
      var this_href = $(this).attr('href');    
      var cityaddress = $(this).find('.address_item_address').text();
      var coox = $(this).attr('data-coox');  
      var cooy = $(this).attr('data-cooy'); 
      coox = coox * n;
      cooy = cooy * n;
    
      markers_array.push({
        type: 'Feature',
        id: cityid,
        geometry: {
          type: 'Point',
          coordinates: [coox,cooy]
        },
        properties: {
          balloonContentBody: '<div class="balloon_content"><img src="/images/marker.png" class="balloon_marker" alt=""> <a href="'+this_href+'" class="balloon_title">'+citytitle+'</a> <div class="balloon_address">'+cityaddress+'</div></div>'
        }
      });
    });

    var objectManager = new ymaps.ObjectManager({
      clusterize: false,
      groupByCoordinates: false,
      hasBalloon: true,
      hasHint: true
    });

    objectManager.objects.options.set({
      openBalloonOnClick: true,
      iconLayout: 'default#image',
      iconImageHref: '/images/marker.png',
      iconImageSize: [50,60],
      iconImageOffset: [-25,-60]
    }); 
    
    objectManager.add(markers_array);
    
    myMap.geoObjects.add(objectManager);  

    if ( $('body.address').length ) {
      objectManager.objects.balloon.open(city_in_first_id);
    };

  });
  
  });
  
};
</script>


</body>
</html>

