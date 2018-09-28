window.onload=function(){
	let daohang=document.querySelector('.header-top');
	let bodytop;
	let text=document.querySelectorAll('.header-right ul li a');
	window.onscroll=function(){
		bodytop=document.body.scrollTop || document.documentElement.scrollTop;
		if(bodytop>=200){
			daohang.style.background='#fff';
			for(let i=0;i<text.length-1;i++){
				text[i].style.color='#000000';
			}
		}
		if(bodytop<200){
			daohang.style.background='rgba(0,0,0,0.2)';
			for(let i=0;i<text.length-1;i++){
				text[i].style.color='#fff';
			}
			
		}
	}
	
}
