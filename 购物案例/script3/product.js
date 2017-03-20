

function Product() {
    this.pname = '';
    this.price = 0;
    this.groupPrice = 0;
    this.description = '';
    this.images = [{small:'', big : ''}, {small:'', big : ''}, {small:'', big : ''}];
}
Product.prototype = {
    //这个方法绑定产品对象的一些基本数据
    bindBasic : function () {
        $('#pname').html(this.pname);
        $('#price').html('$'+this.price);
        $('#groupPrice').html(this.groupPrice);
        $('#description').html(this.description);
    },

    //绑定产品的图片信息
    bindImages : function () {

        var str = '';
        for(var i=0, len=this.images.length; i<len; i++){
            str += '<li>';
            str += '<img class="etalage_thumb_image" src="'+this.images[i].small+'" class="img-responsive" />';
            str += '<img class="etalage_source_image" src="'+this.images[i].big+'" class="img-responsive" />';
            str += '</li>'
        }
        $('#etalage').html(str);

        /*jquery插件实现的幻灯片特效*/
        $('#etalage').etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,

            show_hint: true,
            click_callback: function(image_anchor, instance_id){
                alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
            }
        });
        // This is for the dropdown list example:
        $('.dropdownlist').change(function(){
            etalage_show( $(this).find('option:selected').attr('class') );
        });



    }



};




