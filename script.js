$(document).ready(function(){
    //when the add button is clicked  
    //check to see if the input field is empty
    //if so alert 
    //if input field has text then append an li with class="buy_item" and the text to the ol with class="buy"
    //then empty the input field
    $('button').click(function(){
        var newItem = $("input[name=addItem]").val();
        if(newItem === ""){
            alert("You must enter a new item");
        }
        else {
            $('.buyList').append('<li class="buyItem">' + newItem +'</li>');
            $("input[name=addItem]").val("");
        }
    });
    
    //when the enter key is pressed in the input field
    //check to see if the input field is empty
    //if so alert 
    //if input field has text then append an li with class="buy_item" and the text to the ol with class="buy"
    //then empty the input field
    //NOT WORKING
    $('input').keypress(function(e) {
        if(e.which == 13) {
            if('input'=== ""){
                alert("You must enter a new item");
            }
            else {
                $('.buyList').append('<li class="buy_item">' + new_item +'</li>');
                $("input[name=addItem]").val("");
            }
        } 
    });
    
    //make the list items of the ol sortable using jqueryUI
    //NOT WORKING
    $(function(){
        $('ol').sortable();
    });
    
    //when hovering on a list item in the ol make the list item ´s font the color black
    //NOT WORKING
    $('.buyItem').hover(function() {
        $(this).css('color', 'black');
        });
    
    //when clicking on a list item in the ol with class=".buy_item" move the list item from the ol to the ul as a list item with class="bought_item"
    //NOT WORKING    
    
//  $('.buyItem').click(function() {  
//      (this).addClass('boughtItem');
      
    $('.buyList').on('click', '.buyItem', function (event) {
        $('.boughtList').append('<li class="boughtItem">'+ $(this).html() +'</li>');
        $(this).remove();
    });
    
    
    
    //when double clicking on a list item in the ul with with class="bought_item" remove it
    $(document).on('dblclick','.boughtItem',function(){
        $(this).remove();
    });
    
});