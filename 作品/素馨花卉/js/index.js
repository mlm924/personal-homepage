window.onload=function(){
	let dots=document.querySelectorAll('.banner-bottom div');
    let imgs=document.querySelectorAll('.banner ul img');
    let banner=document.querySelector('.banner');
    let leftBtn=document.querySelector('.banner-left');
    let rightBtn=document.querySelector('.banner-right');
    let widths=parseInt(getComputedStyle(banner,null).width);
    let t;
    let flag=true;
	let now = 0;
	let next = 0;
	dots[0].classList.add("banner-bottom-hot");
	imgs[0].style.left = 0;
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover = function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("banner-bottom-hot");
				imgs[j].style.left = -widths+"px";
			}
			dots[i].classList.add("banner-bottom-hot");
			imgs[i].style.left = 0;
			now=i;
			next=i;
		}
	}

	t = setInterval(move,1500);
	function move(){
		next++;
		if(next == imgs.length){
			next = 0;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = widths + "px";
		animate(imgs[now],{left:-widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("banner-bottom-hot");
				flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add("banner-bottom-hot");
			flag = true;
		});
		now = next;
	}

	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(move,1500);
	}

	function moveL(){
		if(!flag){
			return;
		}
		flag = false;
		next--;
		if(next == -1){
			next = imgs.length-1;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = -widths + "px";
		animate(imgs[now],{left:widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("banner-bottom-hot");
				flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add("banner-bottom-hot");
			flag = true;
		});
		now = next;
	}
	rightBtn.onclick = function(){
		if(!flag){
			return
		}
		flag = false;
		move();
	}
	leftBtn.onclick = function(){
		moveL();
	}
	window.onblur = function(){
		clearInterval(t);
	}
	window.onfocus = function(){
		t = setInterval(move, 1500);
	}
	
	
	/*let leftb=document.querySelector('.sxhy-b-left');
	let rightb=document.querySelector('.sxhy-b-right');
	let con=document.querySelector('.gg-body');
	let windths1=parseInt(getComputedStyle(con,null).width)/6;
	let num=0;
	leftb.onclick=function(){
		num--;
		if(num==-1){
			num=5;
//			return;	
		}
		con.style.transform='translateX('+(-windths1*num)+'px)';
	}
	rightb.onclick=function(){
		num++;
		if(num==6){
			num=0;
//			return;
		}
		con.style.transform='translateX('+(-windths1*num)+'px)';
	}*/
	
	
	let text=document.querySelectorAll('.header-right ul li a');
	let daohang=document.querySelector('.header-top');
	let section=document.querySelectorAll('.sxhy');
	let sxhy=document.querySelector('.sxhy-top');
	let p1=document.querySelector('.sxhy-top1');
	let sxhy1=document.querySelector('.sxhyu-top');
	let sxhy2=document.querySelector('.sxhh-top');
	let sxhy3=document.querySelector('.sxhh ul');
	let sxhyb=document.querySelector('.sxhyu-bottom')
	let sxhy4=document.querySelector('.sxhyu-bottom li:first-child');
	let sxhy5=document.querySelector('.sxhyu-bottom li:nth-of-type(3)');
	let sxhy6=document.querySelector('.sxhyu-bottom li:nth-of-type(5)');
	let sxhy7=document.querySelector('.sxhyu-bottom li:nth-of-type(7)');
	let sxhy8=document.querySelector('.sxhyu-bottom li:nth-of-type(2)');
	let sxhy9=document.querySelector('.sxhyu-bottom li:nth-of-type(4)');
	let sxhy10=document.querySelector('.sxhyu-bottom li:nth-of-type(6)');
	let sxhy11=document.querySelector('.sxhyu-bottom li:nth-of-type(8)');
	let arr=[];

	
	window.onscroll=function(){
	//实时获取页面滚动条的距离
    let bodytop=document.body.scrollTop || document.documentElement.scrollTop;
    if(bodytop>=200){
			daohang.style.background='#fff';
			for(let i=1;i<text.length;i++){
				text[i].style.color='#000000';
				text[i].onmouseover=function(){
					text[i].style.color="#16b0dc";
				}
				text[i].onmouseout=function(){
					text[i].style.color="#000";
				}
			}
			
		}
		if(bodytop<200){
			daohang.style.background='rgba(0,0,0,0.2)';
			for(let i=1;i<text.length;i++){
				text[i].style.color='#fff';
				text[i].onmouseover=function(){
					text[i].style.color="#16b0dc";
				}
				text[i].onmouseout=function(){
					text[i].style.color="#fff";
				}
			}
			
		}
	if(bodytop>=500){
		sxhy.style.transform="translateY(0)";
		p1.style.opacity=1;
	}
	if(bodytop>=1400){
		sxhy1.style.transform="translateY(0)";
		sxhyb.style.opacity=1;
		sxhy4.style.transform="translateX(0)";
		sxhy5.style.transform="translateX(0)";
		sxhy6.style.transform="translateX(0)";
		sxhy7.style.transform="translateX(0)";
		sxhy8.style.transform="translateX(0)";
		sxhy9.style.transform="translateX(0)";
		sxhy10.style.transform="translateX(0)";
		sxhy11.style.transform="translateX(0)";
	}
	if(bodytop>=2000){
		sxhy2.style.opacity=1;
		sxhy2.style.transform="translateY(0)";
		sxhy3.style.opacity=1;
		sxhy3.style.transform="translateY(0)";
	}
	//进行判断
	/*arr.forEach((val,index)=>{
		//当滚动条的距离》每个楼层的offsetTop时，让对应楼层的图片出现
		if(bodytop+innerHeight/2>=val-100){
			//获取每一楼层中对应的图片
			let imgs=section[index].querySelectorAll('img');
			//得到每一张图片的imgsrc属性值
			imgs.forEach((vals)=>{
				//vals每一张图片
				let url=vals.getAttribute('imgsrc');
				vals.setAttribute('src',url);
			})
		}
	})*/
}
	
	
	/*let banner1 = document.querySelector(".sxhy-bottom");
	let banner2 = document.querySelector('.gg-body')
	let imgs1 = document.querySelectorAll(".gg-body .gg1");
	let leftBtn1 = document.querySelector(".sxhy-b-left");
	let rightBtn1 = document.querySelector(".sxhy-b-right");
	let widths1 = parseInt(getComputedStyle(banner2,null).width)/3;
	let t1;
	let now1 = 0;
	let next1 = 1;
	let center = 0; 
	let next2 = 2;
	let flag1 = true;
	// animate(imgs[0],{left:0});
	imgs1[0].style.left = 0;
	imgs1[1].style.left = "390px";
	imgs1[2].style.left = "780px";

	// 自动轮播
	t1 = setInterval(move1,1500);
	function move1(){
		center++;
		next1++;
		next2++;
		if(center == imgs1.length){
			center = 0;
		}
		if(next1 == imgs1.length){
			next1 = 0;
		}
		if(next2 == imgs1.length){
			next2 = 0;
		}
		imgs1[now1].style.left = 0;
		imgs1[center].style.left = widths1+"px"
		imgs1[next1].style.left = widths1*2 + "px";
		imgs1[next2].style.left=widths1*3 + "px";
		animate(imgs1[now1],{left:-widths1},function(){flag1=true;});
//		debugger;
		animate(imgs1[center],{left:0},function(){flag1=true;});
		animate(imgs1[next1],{left:widths1},function(){flag1=true;});
		animate(imgs1[next2],{left:widths1*2},function(){flag1=true;});
		now1 = center;

	}

	banner1.onmouseover = function(){
		clearInterval(t1);
	}
	banner1.onmouseout = function(){
		t1 = setInterval(move1,1500);
	}*/

	/*function moveL1(){
		if(!flag1){
			return;
		}
		flag1 = false;
		center--;
		next1--;
		next2--;
		if(center == -1){
			center = imgs1.length-1;
		}
		if(next1 == -1){
			next1 = imgs1.length-1;
		}
		if(next2 == -1){
			next2 = imgs1.length-1;
		}
		imgs1[now1].style.left = widths1*2+"px";
		imgs1[center].style.left = widths1+"px"
		imgs1[next1].style.left = 0;
		imgs1[next2].style.left=-widths1 + "px";
		animate(imgs1[now1],{left:widths1*3},function(){flag1=true;});
//		debugger;
		animate(imgs1[center],{left:widths1*2},function(){flag1=true;});
		animate(imgs1[next1],{left:widths1},function(){flag1=true;});
		animate(imgs1[next2],{left:0},function(){flag1=true;});
//		now1=center;
		center=next1;
//		next1=next2;
	}*/
	/*rightBtn1.onclick = function(){
		if(!flag1){
			return;
		}
		flag1 = false;
		move1();
	}
	leftBtn1.onclick = function(){
		moveL1();
	}
	window.onblur = function(){
		clearInterval(t1);
	}
	window.onfocus = function(){
		t1 = setInterval(move1, 1500);
	}*/
	
	
	var mySwiper = new Swiper ('.swiper-container', {
  	slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 27,
//  direction: 'vertical',
    loop: true,
    
    // 如果需要分页器
//  pagination: {
//    el: '.swiper-pagination',
//  },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
//  scrollbar: {
//    el: '.swiper-scrollbar',
//  },
  }) 
}