var SUCCESS_CODE= "success";
$(function () {
   $.getJSON("http://localhost:19303/menu/getmenulist",function (data) {
      var code = data.code;
      if(code == SUCCESS_CODE){
         var dataObj = data.data;
         var len = dataObj.length;
         var element = $("#header .navbar-header .collapsed");
         var contentElement = $("#header .collapse .nav");
          element.empty();
          contentElement.empty();
         $.each(dataObj,function (i,item) {
             // debugger;
             // var json = eval("(" + item +")");
             var menuUrl= item.url;
             var menuName = item.menuname;
            var content = '<span class="icon-bar"></span>';
            debugger;
            var content_view = '<li><a href="'+menuUrl+'">'+menuName+'</a></li>';
            if(i ==0){
                content = '<span class="sr-only">Toggle navigation</span>';
                content_view='<li class="active"><a href="'+menuUrl+'">'+menuName+'<span class="sr-only">(current)</span></a><p class="line-top hidden-xs"></p></li>';
            }
            if(i == len -1)
               content_view = '<li class="hidden-sm"><a href="'+menuUrl+'">'+menuName+'</a></li>';
             element.append(content);
             contentElement.append(content_view);
         });
      }
   });
});