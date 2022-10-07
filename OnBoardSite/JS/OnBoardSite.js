/* NavBar */
window.addEventListener("scroll", function(){
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
})
/* Veículos */
const buttons = document.querySelectorAll('.btn_card_veiculo');
buttons.forEach(btn => {
	btn.addEventListener('click', function(e){

		let x = e.pageX - e.target.offsetLeft;
		let y = e.pageY - e.target.offsetTop;

		let ripples = document.createElement('span');
		ripples.style.left = x + 'px';
		ripples.style.top = y + 'px';
		this.appendChild(ripples);

		setTimeout(() => {
			ripples.remove();
		},1000);
	});
});
/* Opção mais */
function lerMais(paragrafo, btn){
	if(paragrafo.style.display == "block"){
		paragrafo.style.display = "none";
		btn.innerText = "Ler mais";
	}
	else{
		paragrafo.style.display = "block";
		btn.innerText = "Ler menos";
	}
}
/* Vídeo motivacional */
var video = document.querySelector(".video_motivacional");
var inside = document.querySelector(".video_motivacional_bar_inside");
var btn = document.querySelector("#play_video_motivacional");
video.volume = 0.3;
function togglePlayPause() {
	if(video.paused){
		btn.className = 'pause';
		video.play();
	}else{
		btn.className = "play";
		video.pause();
	}
}

btn.onclick = function(){
	togglePlayPause();
} 

video.addEventListener('timeupdate', function(){
	var insidePos = video.currentTime / video.duration;
	inside.style.width = insidePos * 100 + "%";
	if(video.ended){
		btn.className = 'play';
	}
})
/* -------- */
var btn_check_planos = document.querySelector("#checkbox_preco");
var preco_planos_1 = document.querySelector(".card:nth-child(1) ul li.price");
var preco_planos_2 = document.querySelector(".card:nth-child(2) ul li.price");
var preco_planos_3 = document.querySelector(".card:nth-child(3) ul li.price");

var plano_b_m = 100;
var plano_p_m = 250;
var plano_m_m = 850;

var plano_b_a = Math.round(100 * 12 - 20);
var plano_p_a = Math.round(250 * 12 - 150);
var plano_m_a = Math.round(850 * 12 - 425);

preco_planos_1.innerText = "R$" + plano_b_a + ",00";
preco_planos_2.innerText = "R$" + plano_p_a + ",00";
preco_planos_3.innerText = "R$" + plano_m_a + ",00";

btn_check_planos.addEventListener("click", function(){
	if(!btn_check_planos.checked){
		preco_planos_1.innerText = "R$" + plano_b_a + ",00";
		preco_planos_2.innerText = "R$" + plano_p_a + ",00";
		preco_planos_3.innerText = "R$" + plano_m_a + ",00";
	}
	else{
		preco_planos_1.innerText = "R$" + plano_b_m + ",00";
		preco_planos_2.innerText = "R$" + plano_p_m + ",00";
		preco_planos_3.innerText = "R$" + plano_m_m + ",00";	
	}
})






