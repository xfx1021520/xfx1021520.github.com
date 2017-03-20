

var product = new Product();
product.pname = 'HM登山包';
product.price = 1000;
product.groupPrice = 800;
product.description = '我的登山包， 真好用啊 真好用';
product.images = [
                    {small: './images/s11.jpg', big: './images/s11.jpg'},
                    {small: './images/s12.jpg', big: './images/s12.jpg'},
                    {small: './images/s13.jpg', big: './images/s13.jpg'}
                    ];

product.bindBasic();
product.bindImages();


//新建一个产品
var watch = new Product();
watch.pname = '劳力士手表';
watch.price = 8000;
watch.groupPrice = 5000;
watch.description = '我的是名牌手表， 劳力士';
watch.images = [
    {small: './images/pic1.jpg', big: './images/pic1.jpg'},
    {small: './images/s12.jpg', big: './images/s12.jpg'},
    {small: './images/s13.jpg', big: './images/s13.jpg'}
];

// watch.bindBasic();
// watch.bindImages();



var car = new Car();
car.products = [product, watch, product,watch, product];
car.getSum();
car.getAllPrice();
car.bindBasic();
car.bindList();



//添加到购物车

$('#btnaddcart').click(function () {

    car.products.push(watch);
    //添加完成之后需要做一些数据的刷新


    car.getSum();
    car.getAllPrice();
    car.bindBasic();
    car.bindList();

    $(window).scrollTop(0);
});



