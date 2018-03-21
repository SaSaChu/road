/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {

  // 漢堡變換 + menu滑出
  $(document).ready(function() {
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');

      $('#r_menu_boxs').toggleClass('s_menu');
      $('#menu_back').toggleClass('s_menu_b');
    });
  });

  $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('span').click (function () {
      $(this).toggleClass ('s');
    });
  });


  // 回到上面按鈕
  $('#top_btn').click (function () {
      $('html, body').animate ({ scrollTop: 0 }, 'slow');
  });
  
  $('.index-banners').each (function () {
    var $that = $(this).attr ('data-i', 1);
    $that.find ('.bg').imgLiquid ({ verticalAlign:'center' });
    var l = $that.find ('>div>*').length;
    $that.find ('>a').click (function () {
      var i = parseInt ($that.attr ('data-i'), 10);
      $that.attr ('data-i', $(this).hasClass ('left') ? (--i <= 0 ? l : i) : (++i > l ? 1 : i));
    });
    setInterval (function () {
      $that.find ('>a.left').click ();
    }, 6500);
  });


  $(function(){
    // 第一個倒數計時, 圖片來源為 images/digits.png
    // 倒數時間為 1 天 12 小時又 12 分 0 秒
    $('#counter').countdown({
      image: 'img/digits.png',
      startTime: '24:12:12:00'
    });
 
    // 第二個倒數計時, 圖片來源為 images/digits.png
    // 倒數時間為 1 分 30 秒, 格式為 mm分ss秒
    // 時間到了跳出對話方塊
    $('#counter2').countdown({
      image: 'img/digits.png',
      startTime: '124日12時12分00秒',
      timerEnd: function(){
        alert('時間終了!');
      },
      format: 'mm分ss秒'
        });
  });

});