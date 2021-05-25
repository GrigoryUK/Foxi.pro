jQuery(function($) {

$("#product_catchecklist").addClass('lvl lvl1_ul').attr('data-lvl','1');
$("#product_catchecklist > li > ul").addClass('lvl lvl2_ul').attr('data-lvl','2');
$("#product_catchecklist > li > ul > li > ul").addClass('lvl lvl3_ul').attr('data-lvl','3');
$("#product_catchecklist > li > ul > li > ul > li > ul").addClass('lvl lvl4_ul').attr('data-lvl','4');

$("#product_catchecklist > li > .selectit").addClass('selectit1');
$("#product_catchecklist .lvl2_ul > li > .selectit").addClass('selectit2');
$("#product_catchecklist .lvl3_ul > li > .selectit").addClass('selectit3');
$("#product_catchecklist .lvl4_ul > li > .selectit").addClass('selectit4');


$("#product_catchecklist input").change(function() {
  var parent_label = $(this).parent();
  var parent_li = parent_label.parent();

  if ( $(this).is(':checked') ) {

  } else {

    parent_li.find('.children input').prop( "checked", false );

  };

  parent_stairs();

});


function parent_stairs() {
  
  $('.lvl').each(function() {
    var current_lvl = $(this).attr('data-lvl');
    var prev_lvl = current_lvl - 1;

    var this_ul = $(this);
    var pre_this_ul = $(this).parent().parent().parent();
    var pre_pre_this_ul = pre_this_ul.parent().parent();

    var current_stop = 1;

    if ( current_stop == 1 ) {
      
      $(this).find('.selectit'+current_lvl+'').each(function() {
  
        var is_there_checked = $(this).find('input:checked').length;

        if ( is_there_checked > 0 ) {

          current_stop = 2;

          this_ul.parent().find('.selectit'+prev_lvl+' input').prop( "checked", true );

          prev_lvl = prev_lvl - 1;

          pre_this_ul.find('.selectit'+prev_lvl+' input').prop( "checked", true );

          prev_lvl = prev_lvl - 1;

          pre_pre_this_ul.find('.selectit'+prev_lvl+' input').prop( "checked", true );

        };

      });

    };

  });

};

parent_stairs();

});