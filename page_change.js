$(document).ready(function(){
    
    function set_new_destin(a, b, c) {
      //a = jquery object
      //b = value of object to trigger page change
      //c =  new destination page
        
        if (a.val() == b ){
          $('[name="d"]').val(c);
        }   
        };
});
