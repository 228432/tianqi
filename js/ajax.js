(function(){
    var $={};

    function addEvent(elem,evnet,func){
        if(elem && typeof elem=='object'){
            if(window.addEventListener){
                elem.addEventListener(evnet,func)
            }else{
                elem.attachEvent(evnet,func)
            }
        }else{
            alert('对象为空或不是对象')
        }
    }

    function ajax(params){
        if(params&&typeof params=='object'){
            var xml=new XMLHttpRequest();

            xml.onloadend=function(){
                if(params.complete){
                    params.complete()
                }
            }

            if(params.data&&params.type=='get'){
                xml.open(params.type,params.url+'?'+params.data)
            }else{
                xml.open(params.type,params.url)
            }

            if(params.data&&params.contentType!='formdata'){
                if(params.contentType=='json'){
                    xml.setRequestHeader('Content-type','application/json')
                }else{
                    xml.setRequestHeader('Content-type','application/x-www-form-urlencoded')
                }
            }

            xml.onreadystatechange=function(){
                if(xml.readyState==4&&xml.status==200){
                    if(params.dataType=='json'){
                        var data=JSON.parse(xml.responseText)
                    }else{
                        var data=xml.responseText
                    }
                    params.success(data)
                }
            }

            if(params.data&&params.type=='post'){
                xml.send(params.data)
            }else{
                xml.send()
            }
        }else{
            alert('对象为空或不是对象')
        }
    }

    $.addEvent=addEvent;
    $.ajax=ajax;
    window.$=$;

})()