function show_popap(id_popap) {
  $(".overlay").removeClass("active");
  var id = "#" + id_popap;
  $(id).addClass('active');
}
 
// функция закрытия окна 
$(".close_popap").click( function(){
  $(".overlay").removeClass("active");
});