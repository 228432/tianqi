window.onload=function(){
    var div=document.querySelector('#div')
    var div1=document.querySelector('#div1')
    var shijian=document.querySelector('#shijian')
    var day=document.querySelector('#day')
    var span=document.querySelector('#span')

    var chaxun=document.querySelector('.chaxun');
    var inp=document.querySelector('.inp');
    var location=document.querySelector('.location');
    var adm=document.querySelector('.adm');
    var sub=document.querySelector('.sub');


    var jiangshusi='近两个小时无降水'
    var diqu='';
    var id='';
    chaxun.addEventListener('click',function (){
        inp.style.display='block';

    })
    // sub.addEventListener('click',function (){
    //
    //     $.ajax({
    //         url:'https://geoapi.qweather.com/v2/city/lookup',
    //         type:'get',
    //         data:'key=c956c2a7597e4feea7299e4d8fd641fc&location='+location.value+'&adm='+adm.value,
    //         contentType:'urlencoded',
    //         dataType:'json',
    //         success:function (data){
    //             console.log(data)
    //            diqu= data.location[0].adm2+data.location[0].name
    //             id=data.location[0].id
    //         },
    //         complete:function (){
    //
    //             $.ajax({
    //                 url:'https://devapi.qweather.com/v7/weather/now',
    //                 type:'get',
    //                 data:'location='+id+'&key=c956c2a7597e4feea7299e4d8fd641fc',
    //                 contentType:'urlencoded',
    //                 dataType:'json',
    //                 success:function(data){
    //                     console.log(data);
    //                     var date1=new Date();
    //                     var day=date1.getDay();
    //                     var m=date1.getMonth();
    //                     var d=date1.getDate();
    //
    //                     if (data.now.precip!=0.0){
    //                         jiangshusi=data.now.precip;
    //                     }
    //
    //                     var str='';
    //                     str='<div class="diming">'+diqu+'</div>' +
    //                         '<div class="wendu">'+data.now.temp+'<span>'+'&#8451'+'</span>'+'</div>' +
    //                         '<div class="tianqi">'+"天气:"+data.now.text+'<span class=qi-'+data.now.icon+' style="font-size:18px">'+'</span>'+'</div>'+
    //                         '<div class="day">'+m+'月'+d+'日 '+'星期'+day+'</div>' +
    //                         '<div class="jiangshui qi-2006">'+jiangshusi+'</div>' +
    //
    //                         '<div class="left">'+
    //                         '<div class="tigan">'+'体感温度'+'<div>'+data.now.feelsLike+'&#8451'+'</div>'+'</div>' +
    //                         '<div class="shidu">'+'湿度'+'<div>'+data.now.humidity+'%'+'</div>'+'</div>' +
    //                         '<div class="fengxiang">'+'风向'+'<div>'+data.now.windDir+'</div>'+'</div>' +
    //                         '<div class="nengjiandu">'+'能见度'+'<div>'+data.now.vis+'公里'+'</div>'+'</div>'+
    //                         '<div class="fengli">'+'风力等级'+'<div>'+data.now.windScale+'</div>'+'</div>' +
    //                         '</div>'
    //                     div.innerHTML=str;
    //
    //
    //
    //
    //                 },
    //                 complete:function(){
    //                     $.ajax({
    //                         url:'https://devapi.qweather.com/v7/weather/3d',
    //                         type:'get',
    //                         data:'location='+id+'&key=c956c2a7597e4feea7299e4d8fd641fc',
    //                         contentType:'urlencoded',
    //                         dataType:'json',
    //                         success:function(data){
    //                             var data=data.daily;
    //                             var str='';
    //                             var str0='<div class="richuriluo">'+ '<span class="qi-100">'+data[0].sunrise+'</span>' +
    //                                 '<span class="qi-150">'+data[0].sunset+'</span>'+'</div>'
    //
    //
    //                             for(var k=0;k<data.length;k++){
    //                                 switch(k){
    //                                     case 0:
    //                                         var tian='今天'
    //                                         break;
    //                                     case 1:
    //                                         var tian='明天'
    //                                         break;
    //                                     case 2:
    //                                         var tian='后天'
    //                                         break;
    //                                 }
    //
    //                                 str+='<div class="san"'+k+'>' +
    //                                     '<div class="zuo">'+tian+'</div>' +
    //                                     '<div class="zhong qi-'+data[k].iconDay+'"'+'>'+data[k].textDay+'</div>' +
    //                                     '<div class="you">'+data[k].tempMax+'&#8451'+'/' +data[k].tempMin+'&#8451'+'</div>' +
    //                                     '</div>'
    //                             }
    //                             div1.innerHTML=str0+str+'</ul>'
    //                         }
    //
    //                     })
    //                 },
    //             })
    //
    //         }
    //
    //
    //     })
    //     inp.style.display='none';
    // })







    $.ajax({
        url:'https://devapi.qweather.com/v7/weather/now',
        type:'get',
        data:'location=101091101&key=3d2838de02e54e7ebf82201a6d6ad209',
        contentType:'urlencoded',
        dataType:'json',
        success:function(data){
            console.log(data);
            var date1=new Date();
            var day=date1.getDay();
            var m=date1.getMonth();
            var d=date1.getDate();

            if (data.now.precip!=0.0){
                jiangshusi=data.now.precip;
            }

            var str='';
            str='<div class="diming">'+diqu+'</div>' +
                '<div class="wendu">'+data.now.temp+'<span>'+'&#8451'+'</span>'+'</div>' +
                '<div class="tianqi">'+"天气:"+data.now.text+'<span class=qi-'+data.now.icon+' style="font-size:18px">'+'</span>'+'</div>'+
                '<div class="day">'+m+'月'+d+'日 '+'星期'+day+'</div>' +
                '<div class="jiangshui qi-2006">'+jiangshusi+'</div>' +

                '<div class="left">'+
                '<div class="tigan">'+'体感温度'+'<div>'+data.now.feelsLike+'&#8451'+'</div>'+'</div>' +
                '<div class="shidu">'+'湿度'+'<div>'+data.now.humidity+'%'+'</div>'+'</div>' +
                '<div class="fengxiang">'+'风向'+'<div>'+data.now.windDir+'</div>'+'</div>' +
                '<div class="nengjiandu">'+'能见度'+'<div>'+data.now.vis+'公里'+'</div>'+'</div>'+
                '<div class="fengli">'+'风力等级'+'<div>'+data.now.windScale+'</div>'+'</div>' +
                '</div>'
            div.innerHTML=str;
        },
        complete:function(){
            $.ajax({
                url:'https://devapi.qweather.com/v7/weather/3d',
                type:'get',
                data:'location=101091101&key=3d2838de02e54e7ebf82201a6d6ad209',
                contentType:'urlencoded',
                dataType:'json',
                success:function(data){
                    var data=data.daily;
                    var str='';
                    var str0='<div class="richuriluo">'+ '<span class="qi-100">'+data[0].sunrise+'</span>' +
                        '<span class="qi-150">'+data[0].sunset+'</span>'+'</div>'


                    for(var k=0;k<data.length;k++){
                        switch(k){
                            case 0:
                                var tian='今天'
                                break;
                            case 1:
                                var tian='明天'
                                break;
                            case 2:
                                var tian='后天'
                                break;
                        }

                        str+='<div class="san"'+k+'>' +
                            '<div class="zuo">'+tian+'</div>' +
                            '<div class="zhong qi-'+data[k].iconDay+'"'+'>'+data[k].textDay+'</div>' +
                            '<div class="you">'+data[k].tempMax+'&#8451'+'/' +data[k].tempMin+'&#8451'+'</div>' +
                            '</div>'
                    }
                    div1.innerHTML=str0+str+'</ul>'
                }

            })
        },
    })


    
       


}