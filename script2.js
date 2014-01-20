
$(document).ready(function() {
    //When the Enter key or the Add button are pressed check whether there is a value in the input field
    //if there is a value add the value to the itemsToBuy list
    //else prompt to enter a value
    $('#add').click(function(){
        var new_item = $("input[name=addItem]").val();
        if(new_item != ""){
            $('.itemsToBuy').append('<li class="item">' + new_item + '<span class="icons"><img class="cart" src="img/cart.jpeg" alt="Cart" title="Move to Cart"><img class="remove" src="img/remove.jpeg" alt="Remove" title="Remove Item"></span></li>');
            $("input[name=addItem]").val("");
            event.preventDefault();
        }
    });


    //When the cart icon is pressed move that item to the shoppingCart list
    $(document).on('click', '.cart', function() {
        var item = $(this).closest('li').text();
        console.log(item);
        $('.itemsBought').append('<li class="item">' + item +'<span class="icons"><img class="list" src="img/list.jpeg" alt="List" title="Remove from Cart"><img class="remove" src="img/remove.jpeg" alt="Remove" title="Remove Item"></span></li>');
        $(this).closest('li').fadeOut();
        
        //var cartTotal = 0;
        //var price = prompt("How much does it cost?");
        //if(price < 0) {
        //    alert("Price must be a number greater than $0");
        //} else {console.log(price);
        //    }
        //cartTotal=+ price;
        //$('h2').show();
        //$('#total').append(cartTotal);
    });


    //When the itemsToBuy trash icon is clicked remove all the items from the itemsToBuy list
    $(document).on('click', '#list', function() {
        $('.itemsToBuy').find('li').fadeOut();
    });
        
    //When the remove icon is pressed remove that item
    $(document).on('click', '.remove', function() {
	   $(this).closest('li').fadeOut();
    });

    //When the shoppingCart trash icon is clicked remove all the items from the shoppingCart list
    $(document).on('click', '#cart', function() {
        $('.itemsBought').find('li').fadeOut();
    });

    //When the list icon is pressed move that item to the itemsToBuy list
    $(document).on('click', '.list', function() {
        var item = $(this).closest('li').text();
        console.log(item);
        $('.itemsToBuy').append('<li class="item">' + item +'<span class="icons"><img class="cart" src="img/cart.jpeg" alt="Cart" title="Move to Cart"><img class="remove" src="img/remove.jpeg" alt="Remove" title="Remove Item"></span></li>');
        $(this).closest('li').fadeOut();
    });

});








