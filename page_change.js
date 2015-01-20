$(document).ready(function(){
    
    function set_new_destin(jqobject, val, destin) {
      //jqobject = jquery object
      //val = value of object to trigger page change
      //destin =  new destination page
        
        if (jqobject.val() == val ){
          $('[name="d"]').val(destin);
        }   
        };
});



