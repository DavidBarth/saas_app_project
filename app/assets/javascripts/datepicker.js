$(document).ready(function(){
  $(function() {
    $('.datepicker').datepicker({
      format: 'yyyy-mm-dd',
      todayBtn: "linked",
      orientation: "top right",
      autoclose: true,
      todayHighlight: true
    });
  });
});