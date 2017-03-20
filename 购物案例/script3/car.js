function Car() {
    this.sum = 0;
    this.allPrice = 0;
    this.products = [{}, {}];
}
Car.prototype = {
    getSum : function () {
        this.sum = this.products.length;
        return this.sum;
    },
    getAllPrice : function () {
        var all = 0;
        for(var i=0, len=this.products.length; i<len; i++){
            all += this.products[i].price;
        }
        this.allPrice = all;
        return this.allPrice;
    },
    bindBasic : function () {
        $('.cartsum').html(this.sum);
        $('#cartprice').html('￥' + this.allPrice);
    },
    bindList : function () {
        var str = '';
        for(var i=0, len=this.products.length; i<len; i++){
            str += '<div class="cart_box">';
            str += '<div class="message">';
            str += '<div class="alert-close"> </div>';
            str += '<div class="list_img"><img src="'+this.products[i].images[0].small+'" class="img-responsive" alt=""/></div>';
            str += '<div class="list_desc"><h4><a href="#">'+this.products[i].pname+'</a></h4>1 x<span class="actual">';
            str += '$'+this.products[i].price+'</span></div>';
            str += '<div class="clearfix"></div>';
            str += '</div>';
            str += '</div>';
        }
        $('.shopping_cart').html(str);
    }
};











