	window.onload=function(){
//轮播
let btns=document.querySelectorAll('.banner-btns li');
let imgs=document.querySelectorAll('.banner-img img');
let banner=document.querySelector('.banner-body');
banner_oi(btns,imgs,banner,null,null,'banner-btns-hot',3000);
	
	

//	按需加载
//所有的楼层
let section=document.querySelectorAll('.cstj');
let list=document.querySelectorAll('.left-nav li')
console.log(list)
let arr=[];
let bodytop;
let colorarr=['rgba(0,255,0,0.7)','orange','rgba(255,0,0,0.7)','rgba(0,255,0,0.7)','rgba(0,0,255,0.7)','rgba(0,0,230,0.7)','rgba(255,0,0,0.7)','orange']
let search=document.querySelector('.search');
//console.log(bodytop);
//把所有楼层的offset保存在数组中
section.forEach((val,index)=>{
	arr.push(val.offsetTop);
//  console.log(val);
})
//console.log(arr);
//页面滚动时间
window.onscroll=function(){
	//实时获取页面滚动条的距离
    bodytop=document.body.scrollTop || document.documentElement.scrollTop;
    arr.forEach((val,index)=>{
    	if(bodytop+innerHeight/2>=val-100){
    		for(let i=0;i<list.length;i++){
   				list[i].style.background='';
   			}
   			list[index].style.background=colorarr[index];
    	}
    })
	let leftlist=document.querySelector('.left-nav');
	if(bodytop>=1000){
		leftlist.style.opacity=1;
		search.style.top=0;
	}
	if(bodytop<1000){
		leftlist.style.opacity=0;
		search.style.top='-50px';
	}
	//进行判断
	arr.forEach((val,index)=>{
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
	})
}

//楼层跳转
list.forEach((val,index)=>{
   		val.onclick=function(){
   			for(let i=0;i<list.length;i++){
   				list[i].style.background='';
   			}
   			val.style.background=colorarr[index];
   			animate(document.body,{scrollTop:arr[index]-100});
   			animate(document.documentElement,{scrollTop:arr[index]-100});
   		}
   	})

//
/*1.按序加载
当页面滚动到一定位置时,让当前位置的图片再进行加载:
获取   页面滚动条的位置
	每一个模块的offsetTop--arr[];
判断bodytop==arr[index]满足
获取当前位置的所有图片--list[index].querySelector('img');
获取每一张图片的自定义属性,设置到src上;

2.楼层跳转
点击某个楼层时,页面滚动到对应位置
animate(bodytop,{scrollTop:arr[index]});
3.优化
当页面滚动到一定位置时,再让左侧列表和顶部搜索出现
改变左侧列表的选中颜色colorarr;
*/



//返回顶部
	let back=document.querySelector('.left-nav-top');
	let back1=document.querySelector('.right-mav-2 li:last-child')
	back.onclick=function(){
//		document.body.scrollTop || document.documentElement.scrollTop;
//		res=0;
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
	}
	back1.onclick=function(){
//		document.body.scrollTop || document.documentElement.scrollTop;
//		res=0;
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
	}


//选项卡
	let li=document.querySelectorAll('.cstj-2-1 div');
	let lit=document.querySelectorAll('.wsz li img');
	xuanxiangka(li,lit,'cstj-hot');


//右侧服务
	let sRLi=document.querySelectorAll('.right-mav-1 img');
  	let sRbox=document.querySelectorAll('.hyfw');
  	let serviceRight=document.querySelector('.right-mav-1');
  	serviceRight.style.height=innerHeight;
	  	// sRbox[1].style.display='none';
//	  	sRbox[8].style.display='none';
//	  	sRLi[1].style.display='none';
  		for(let i=0;i<sRLi.length;i++){
  				sRLi[i].onmouseover=function(){
	  			sRLi[i].style.backgroundColor='#ff0036';
	  			sRbox[i].style.opacity=1;
	  			sRbox[i].style.right=`${55}px`;
  		      }
	  			sRLi[i].onmouseout=function(){
	  			sRLi[i].style.backgroundColor='#000';
	  			sRbox[i].style.opacity=0;
	  			sRbox[i].style.right=`${80}px`;
	  		  }	
  		  }












}