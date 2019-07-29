//jQueryのライブラリの読み込み
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
//トグルボタンが押されたときに、クラスを付与
<script type="text/javascript">
$(function() {
　$('.Toggle').click(function() {
　　$(this).toggleClass('active');

　if ($(this).hasClass('active')) {
　　$('.NavMenu').addClass('active');　 //クラスを付与
　} else {
　　$('.NavMenu').removeClass('active'); //クラスを外す
　}
　});
});
</script>
