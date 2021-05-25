
<?php include("header_metas.php");?>

<body data-timestamp="1590740281" class="page-template-default page woocommerce-checkout woocommerce-page checkout pagename_checkout">

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
        <a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="/checkout"><span itemprop="name">Оформление заказа</span></a>
        <meta itemprop="position" content="2">
      </li>
    </ol>
  </div>
</div>


<div class="checkout_container container">

  <div class="woocommerce"><div class="woocommerce-notices-wrapper"></div>

<form name="checkout" method="post" class="checkout woocommerce-checkout" action="/checkout" enctype="multipart/form-data" novalidate="novalidate">

<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout"><ul class="woocommerce-error">
<li><strong>Email для выставления счета</strong> является обязательным полем.</li>
<li><strong>ФИО для выставления счета</strong> является обязательным полем.</li>
<li><strong>Телефон для выставления счета</strong> является обязательным полем.</li>
</ul>
</div>


<div class="checkout_block block"> 
  <div class="checkout_block_top">
    <div class="checkout_block_title">Оформление заказа</div>
  </div>
  
  <div class="checkout_block_content">
    
    <div class="checkout_step">1. Выберите способ доставки </div>


    <div id="shipping_method" class="shipping_method_box">
  
      <div class="iconfont shipping_method flat_rate active checked">
  
        <div class="shipping_method_icon iconfont"></div>
  
        <div class="shipping_method_title">Доставка по адресу<br> в черте города</div>
          
        <input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_flat_rate9" value="flat_rate:9" class="shipping_method" checked="checked">
        <label for="shipping_method_0_flat_rate9">Платная доставка: <span class="woocommerce-Price-amount amount">250<span class="woocommerce-Price-currencySymbol">₽</span></span></label>
      </div>
  
      
      <div class="iconfont shipping_method local_pickup active">
  
        <div class="shipping_method_icon iconfont"></div>
  
        <div class="shipping_method_title">Самовывоз из торговой<br> точки FOXI STORE</div>
          
        <input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_local_pickup1" value="local_pickup:1" class="shipping_method">
        <label for="shipping_method_0_local_pickup1">Самовывоз</label>
      </div>
  
      
      <div class="iconfont shipping_method flat_rate active">
  
        <div class="shipping_method_icon iconfont"></div>
  
        <div class="shipping_method_title">Доставка курьерской<br> службой CDEK</div>
          
        <input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_flat_rate10" value="flat_rate:10" class="shipping_method">
        <label for="shipping_method_0_flat_rate10">Службой CDEK</label>
      </div>
    
      <div class="spacer"></div>
    </div>

    
    <div class="offices_box" style="display: none;">
      <div class="offices_box_top">Пункты выдачи</div>
      <div class="office_item iconfont checked">
        <div class="pseudo_table">
          <div class="office_item_address">Екатеринбург, ул. Хохрякова 72 ТГ Sweety, 2 этаж. галерея №5</div>
          <div class="office_item_worktime"><span class="span1">По будням 11:00-20:00</span> <span class="span2">В выходные 12:00-20:00</span></div>
          <div class="office_item_instock">Все товары в наличии</div>
        </div>
      </div>
    </div>


    <div class="checkout_step">2. Введите данные покупателя</div>

    

<div class="woocommerce-billing-fields">


  <div class="woocommerce-billing-fields__field-wrapper">
      <p class="form-row form-row-first wooccm-field wooccm-field-email wooccm-type-email validate-required validate-email woocommerce-invalid woocommerce-invalid-required-field" id="billing_email_field" data-priority="10">
        <label for="billing_email" class="">Email&nbsp;<abbr class="required" title="обязательно">*</abbr></label>
        <span class="woocommerce-input-wrapper">
          <input type="email" class="input-text " name="billing_email" id="billing_email" placeholder="E-mail *" value="" data-required="1" autocomplete="email username">
        </span>
      </p>
      <p class="form-row form-row-first wooccm-field wooccm-field-first_name wooccm-type-text validate-required" id="billing_first_name_field">
        <label for="billing_first_name" class="">ФИО&nbsp;<abbr class="required" title="обязательно">*</abbr></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="billing_first_name" id="billing_first_name" placeholder="Фамилия Имя Отчество *" value="" data-required="1">
        </span>
      </p>
      <p class="form-row form-row-last wooccm-field wooccm-field-phone wooccm-type-tel validate-required validate-phone" id="billing_phone_field">
        <label for="billing_phone" class="">Телефон&nbsp;<abbr class="required" title="обязательно">*</abbr></label>
        <span class="woocommerce-input-wrapper">
          <input type="tel" class="input-text " name="billing_phone" id="billing_phone" placeholder="Контактный телефон *" value="" data-required="1">
        </span>
      </p>
      <p class="form-row form-row-last wooccm-field wooccm-field-last_name wooccm-type-text" id="billing_last_name_field" >
        <label for="billing_last_name" class="">Last Name&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="billing_last_name" id="billing_last_name" placeholder="" value="">
        </span>
      </p>
      <p class="form-row address-field form-row-wide wooccm-field wooccm-field-address_1 wooccm-type-text" id="billing_address_1_field">
        <label for="billing_address_1" class="">Адрес&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="billing_address_1" id="billing_address_1" placeholder="Номер дома и название улицы" value="" data-required="0" autocomplete="address-line1" data-placeholder="Номер дома и название улицы"></span>
      </p>
      <p class="form-row address-field form-row-first wooccm-field wooccm-field-city wooccm-type-text" id="billing_city_field" data-priority="70" data-o_class="form-row address-field form-row-first wooccm-field wooccm-field-city wooccm-type-text" style="display: none;">
        <label for="billing_city" class="">Населённый пункт&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="billing_city" id="billing_city" placeholder="Город" value="">
        </span>
      </p>
      <p class="form-row form-row-last wooccm-field wooccm-field-myfield17 wooccm-type-text" id="billing_myfield17_field" data-priority="80" style="display: inline-block;">
        <label for="billing_myfield17" class="">Улица&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="billing_myfield17" id="billing_myfield17" placeholder="Улица" value="" data-required="0">
        </span>
      </p>
      <p class="form-row form-row-wide wooccm-field wooccm-field-myfield7 wooccm-type-text" id="billing_myfield7_field" data-priority="90" style="display: inline-block;">
        <label for="billing_myfield7" class="">Здание&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="billing_myfield7" id="billing_myfield7" placeholder="Здание" value="" data-required="0">
        </span>
      </p>
      <p class="form-row form-row-wide wooccm-field wooccm-field-myfield8 wooccm-type-text" id="billing_myfield8_field" data-priority="100" style="display: inline-block;">
        <label for="billing_myfield8" class="">Корпус&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="billing_myfield8" id="billing_myfield8" placeholder="Корпус" value="" data-required="0">
        </span>
      </p>
      <p class="form-row form-row-wide wooccm-field wooccm-field-myfield9 wooccm-type-text" id="billing_myfield9_field" data-priority="110" style="display: inline-block;">
        <label for="billing_myfield9" class="">Квартира&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="billing_myfield9" id="billing_myfield9" placeholder="Квартира" value="" data-required="0">
        </span>
      </p>
      <p class="form-row form-row-wide wooccm-field wooccm-field-myfield10 wooccm-type-text" id="billing_myfield10_field" data-priority="120" style="display: inline-block;">
        <label for="billing_myfield10" class="">Подъезд, домофон и прочее&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="billing_myfield10" id="billing_myfield10" placeholder="Подъезд, домофон и прочее" value="" data-required="0">
        </span>
      </p>
      <p class="form-row address-field form-row-wide wooccm-field wooccm-field-address_2 wooccm-type-text" id="billing_address_2_field" data-priority="130" style="display: block;">
        <label for="billing_address_2" class="screen-reader-text">Дополнительные сведения об адресе (необязательно)&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="billing_address_2" id="billing_address_2" placeholder="Дополнительные сведения об адресе (необязательно)" value="" data-required="0" autocomplete="address-line2" data-placeholder="Дополнительные сведения об адресе (необязательно)">
        </span>
      </p>
      <p class="form-row address-field form-row-first wooccm-field wooccm-field-state wooccm-type-state validate-state validate-state" id="billing_state_field" data-priority="140" data-o_class="form-row address-field form-row-first wooccm-field wooccm-field-state wooccm-type-state validate-state validate-state">
        <label for="billing_state" class="">Область / район&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " value="" placeholder="" name="billing_state" id="billing_state" data-required="0" autocomplete="address-level1" data-input-classes="">
        </span>
      </p>
      <p class="form-row address-field form-row-last wooccm-field wooccm-field-postcode wooccm-type-text validate-postcode" id="billing_postcode_field" data-priority="150" data-o_class="form-row address-field form-row-last wooccm-field wooccm-field-postcode wooccm-type-text validate-postcode" style="display: block;">
        <label for="billing_postcode" class="">Почтовый индекс&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="billing_postcode" id="billing_postcode" placeholder="Postcode / Zip" value="" data-required="0" autocomplete="postal-code">
        </span>
      </p>
      <p class="form-row address-field update_totals_on_change form-row-wide wooccm-field wooccm-field-country wooccm-type-country" id="billing_country_field" data-priority="160">
        <label for="billing_country" class="">Страна&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper"><strong>Россия</strong>
          <input type="hidden" name="billing_country" id="billing_country" value="RU" data-required="0" autocomplete="country" class="country_to_state" readonly="readonly">
        </span>
      </p>
      <p class="form-row form-row-wide wooccm-field wooccm-field-myfield12 wooccm-type-text" id="billing_myfield12_field" data-priority="170">
        <label for="billing_myfield12" class="">Способ оплаты&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="billing_myfield12" id="billing_myfield12" placeholder="" value="" data-required="0">
        </span>
      </p>
    </div>

</div>


  </div>
</div>



<div class="checkout_block block"> 
  <div class="checkout_block_top">
    <div class="checkout_block_title">Оплата заказа</div>
  </div>
  
  <div class="checkout_block_content">
    <div class="checkout_step">3. Выберите способ оплаты</div>

    <div class="payment_types">
      
      <div data_payment_type="Наличный расчет (физ. лицо)" class="payment_type payment_fiz_cash iconfont checked">
        <div class="payment_type_icon iconfont"></div>
        <div class="payment_type_title">Наличный расчет</div>
      </div>
  
      <div data_payment_type="Банковская карта при получении заказа (физ.лицо)" class="payment_type payment_fiz_nocash iconfont">
        <div class="payment_type_icon iconfont"></div>
        <div class="payment_type_title">Банковская карта при получении заказа (физ.лицо)</div>
      </div>
            <div data_payment_type="Безналичный расчет (юр.лицо)" class="payment_type payment_ur_nocash iconfont">
        <div class="payment_type_icon iconfont"></div>
        <div class="payment_type_title">Безналичный расчет<br> (юр.лицо)</div>
      </div>

      <div class="spacer"></div>
    </div>

  </div>
</div>


<div class="checkout_block block company_requisites_block"> 
  <div class="checkout_block_top">
    <div class="checkout_block_title">Оформление для юридического лица</div>
  </div>
  
  <div class="checkout_block_content">

    <div class="company_requisites">

      <div class="col col_left"></div>
      <div class="col col_right"></div>

      <p class="form-row" id="payment_type_field" data-priority="">
        <span class="woocommerce-input-wrapper">
          <input type="text" class="input-text " name="payment_type" id="payment_type" placeholder="" value="">
        </span>
      </p>

      <div class="spacer"></div>
    </div>

  </div>
</div>


<div class="checkout_block block"> 
  <div class="checkout_block_top">
    <div class="checkout_block_title">Контрольная проверка</div>
  </div>

  <div class="checkout_block_content">  

    <div class="order_comment_box">

      <table class="order_items">
        <tbody>
          <tr class="cart_item">
                <td class="product_thumb">
                  <img width="300" height="300" src="/images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-300x300.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Силиконовый чехол на iPhone 7 и iPhone 8 с акриловой вставкой Karma is a Bitch" srcset="/images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-300x300.jpg 300w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-800x800.jpg 800w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-1000x1000.jpg 1000w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-500x500.jpg 500w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-768x768.jpg 768w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-600x600.jpg 600w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-200x200.jpg 200w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-700x700.jpg 700w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-160x160.jpg 160w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-1100x1100.jpg 1100w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-1300x1300.jpg 1300w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch-100x100.jpg 100w, /images/uploads/2019/12/Силиконовый-чехол-на-iPhone-7-и-iPhone-8-с-акриловой-вставкой-Karma-is-a-Bitch.jpg 1500w" sizes="(max-width: 300px) 100vw, 300px"></td>
                <td class="product_name">Силиконовый чехол на iPhone 7 и iPhone 8 с акриловой вставкой Karma is a Bitch&nbsp; <strong class="product-quantity">× 3</strong></td>
                <td class="product_total"><span class="woocommerce-Price-amount amount">900<span class="woocommerce-Price-currencySymbol">₽</span></span></td>
              </tr>
      </tbody>
    </table>
    
      
<div class="woocommerce-additional-fields">
      <div class="wooccm-additional-fields">
            <div class="wooccm-clearfix"></div>
    </div>
    
  
    <div class="woocommerce-additional-fields__field-wrapper">
      <p class="form-row notes" id="order_comments_field" data-priority="">
        <label for="order_comments" class="">Примечание к заказу&nbsp;<span class="optional">(необязательно)</span></label>
        <span class="woocommerce-input-wrapper">
          <textarea name="order_comments" class="input-text" id="order_comments" placeholder="Примечания к вашему заказу, например, особые пожелания отделу доставки." rows="2" cols="5"></textarea>
        </span>
      </p>
    </div>

  
</div>
    </div>

    <div class="order_review_box">

      
<table class="shop_table woocommerce-checkout-review-order-table">
  <tfoot>

    <tr class="cart-subtotal">
      <th colspan="2" style="border:none;">Стоимость товаров:</th>
      <td style="border:none;"><span class="woocommerce-Price-amount amount">900<span class="woocommerce-Price-currencySymbol">₽</span></span></td>
    </tr>

    <tr class="">
      <th colspan="2">Стоимость доставки:</th>
      <td><span class="woocommerce-Price-amount amount">250<span class="woocommerce-Price-currencySymbol">₽</span></span></td>
    </tr>

    <tr class="order-total">
      <th colspan="2">ИТОГО:</th>
      <td><strong><span class="woocommerce-Price-amount amount">1150<span class="woocommerce-Price-currencySymbol">₽</span></span></strong> </td>
    </tr>

    
  </tfoot>
</table>


<div id="payment" class="woocommerce-checkout-payment" style="position: static; zoom: 1;">
  <ul class="wc_payment_methods payment_methods methods">
    <li class="wc_payment_method payment_method_cod">
      <input id="payment_method_cod" type="radio" class="input-radio" name="payment_method" value="cod" checked="checked" data-order_button_text="" style="display: none;">
      <label for="payment_method_cod">
        Оплата при доставке   </label>
          <div class="payment_box payment_method_cod">
          <p>Оплата наличными при доставке заказа.</p>
        </div>
      </li>
    </ul>
    <div class="form-row place_order">
      <input type="submit" class="button alt" name="woocommerce_checkout_place_order" id="place_order" value="Подтвердить заказ" data-value="Подтвердить заказ">
      <input type="hidden" id="_wpnonce" name="_wpnonce" value="2e42ac9264"><input type="hidden" name="_wp_http_referer" value="/?wc-ajax=update_order_review"> 
    </div>
</div>


      <div class="order_hint">
        <input type="button" class="button delivery_pseudo_submit" value="Подтвердить заказ" style="display: block;">
        <input type="button" class="button company_pseudo_submit" value="Подтвердить заказ" style="display: none;">
        <p>Нажимая “Оформить заказ”, я подтверждаю, что ознакомлен с информацией о товаре и принимаю условия договора купли-продажи, условия оказания услуг связи и даю согласие на обработку моих персональных данных.</p>
        <p>В соответствии с ФЗ №54-ФЗ, кассовый чек при заказе с доставкой будет предоставлен в электронном виде на указанный при оформлении заказа номер телефона или адрес электронной почты.</p>
      </div>
    </div>

    <div class="spacer"></div>
  </div>
</div>


</form>

</div>
</div>


<?php include("footer.php");?>

