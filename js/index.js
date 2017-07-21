//轮播图获取数据
$(function() {
   shop.api.fetchBanner(function(response) {
   	   var position_id = response.data[0].position_id;
   	   shop.api.fetchCarousel(position_id, function(response) {
   	   	  console.log(response);
   	   	  for (var i = 0; i < response.data.length; i++) {
   	   	  	 var obj = response.data[i];
   	   	  	 var li = `<li class="swiper-slide"><a href="${obj.thumb}"><img src="${obj.url}"/></a></li>`;
   	   	  	 $('#carousel-list').append($(li));
   	   	  }
   	   	    //swiper轮播图
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				loop: true,
				autoplayDisableOnInteraction: false,
				autoplay: 3000,
				onInit: function(swiper) {
					swiperAnimateCache(swiper);
					swiperAnimate(swiper);
				},
				onSlideChangeEnd: function(swiper) {
					swiperAnimate(swiper);
				}
			});
   	   });  
   });
});






