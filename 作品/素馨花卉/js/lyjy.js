//let text=document.querySelector('textarea');
//let input=document.querySelector('.main-right-1 li:first-child input');
//let num=document.querySelector('.mrtext span');
//let btn=document.querySelector('button');
//let ul=document.querySelector('.main-left-1');
//let li=document.querySelectorAll('.main-left-1 li');
//let phone=document.querySelector('.main-right-1 li:nth-child(2) input');
//let yzm=document.querySelector('.main-right-1 li:nth-child(5) input');
//
////1.随着输入的内容，字数实时变化
//text.oninput=function(){
//	let textnum=this.value.length;
//	num.innerHTML=textnum;
//}
////2.点击提交时，将右侧内容添加在左侧列表中
//btn.onclick=function(){
//	let name=input.value;
//	let con=text.value;
////	console.log(name,con)
//	if(input.value==""){
//		alert('请输入名字');
//		return;
//	}
//	if(text.value==""){
//		alert('请输入留言');
//		return;
//	}
//	/*if(input.value=="" || text.value==""){
//		alert('不能为空');
//	}*/
//	//模板字符串
//	let str=`<li>
//          <i class="iconfont icon-yonghu"></i>
//          <h6>${name}</h6> 
//          <span>2018-01-04&nbsp;16:18:53</span>
//          <p>${con}</p>
//        </li>`
//	//innerHTML--可识别标签
//	ul.innerHTML+=str;
//	//清空右侧留言内容和字数
//	input.value="";
//	text.value="";
//	phone.value="";
//	yzm.value="";
//	num.innerHTML=0;
//}
//
////事件委派
////鼠标移入每个li进行样式变化
//	ul.onmouseover=function(e){
//		let event=e.target;
//		//判断节点名称和类名列表
//		if(event.nodeName==='LI' /*&& event.classList.contains('')*/){
//			event.style.background="rgba(0,0,0,0.2)";
//		}
//		
//	}
//	ul.onmouseout=function(e){
//		let event=e.target;
//		if(event.nodeName==='LI'){
//			event.style.background='#fff';
//		}
//	}

$(function(){
	//自动检测输入内容的长度
	$("textarea").keydown(function(){
		$(".mrtext>span").html(($("textarea").val().length));
	})
	$("button").click(function(){
		let name=$(".main-right-1 li:first-child input").val();
		let con=$("textarea").val();
		if(name==""){
			alert("请输入名字");
			return;
		}
		if(con==""){
			alert("请输入内容");
			return;
		}
		let str=`<li>
          <i class="iconfont icon-yonghu"></i>
          <h6>${name}</h6> 
          <span>2018-01-04&nbsp;16:18:53</span>
          <p>${con}</p>
          </li>`
		$(".main-left-1").append(str);
		$(".main-right-1 li:first-child input").val("");
		$("textarea").val("");
		$(".mrtext>span").html("0");
	})
	$(".main-left-1 li i").click(function(){
		$(this).parent("li").remove();
	})
})
	