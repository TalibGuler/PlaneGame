const main = document.querySelector(".main");
const starcraft = document.querySelector(".starcraft");

// Çarpma esnasında ses çıkarmak içim koymuştum fakat henüz tamamlamadım
// let king = new Audio("./sounds")

let move;
let x, y;

//arka planda olan yıldızları oluşturmak için kullandığım for döngüsü
for (let a = 1; a <= 1000; a++) {
  const star = document.createElement("div");
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);

  star.style.top = y + "px";
  star.style.left = x + "px";

  star.classList.add("star");
  let starsize = Math.floor(Math.random() * 3);
  star.style.height = starsize + "px";
  star.style.width = starsize + "px";

  //yıldızların yoğunluğunu belirtmek için kullandım
  star.style.background = starsize < 4 ? "lightgray" : "white";
  main.appendChild(star);
}

// roketin yön tuşları ile sağa ve sola hareket etmesi için oluşturuldu.
window.addEventListener("keydown", (e)=>{

    var left = parseInt(window.getComputedStyle(starcraft).getPropertyValue("left"));
    let ScreenWidth=window.screen.width;
    console.log(ScreenWidth);
    if(e.key =="ArrowLeft" && left >0 ){
        starcraft.style.left = left - 10 + "px";
    }

    //burayı ScreenWidth-80 olarak değiştirmemdeki sebep roketin sadece yarıya kadar degil de tüm sayfa boyunca gidip gelmesini sağlamaktı
    else if(e.key =="ArrowRight" && left <=(ScreenWidth-80) ){
        starcraft.style.left = left + 10 + "px";
    }

});

// karakterimiz olan ragnarın rastgele konumlarda üretilip ekranda gelmesini saglayan fonksiyondur.
const ragnarmove = () =>{
    move = setInterval(()=>{
        let ragnar = document.createElement("div");
        ragnar.classList.add("ragnar");
        let left = Math.floor(Math.random() * window.innerWidth - 50);
        ragnar.style.left = left + "px";
        ragnar.style.top = -50 + "px";
        main.appendChild(ragnar);

        let ragnarCount = document.querySelectorAll(".ragnar");
        for (let i = 1; i<= ragnarCount.length; i++){
            let ragnarTop = parseInt(
                window.getComputedStyle(ragnarCount[i-1]).getPropertyValue("top")
            );
            let ragnarBottom = parseInt(
                window.getComputedStyle(ragnarCount[i-1]).getPropertyValue("top")
            );

            ragnarCount[i-1].style.top = ragnarTop + 20 + "px";
            let mainframe = main.getBoundingClientRect();
            if(ragnarBottom>mainframe.bottom - 50){
                setTimeout(() =>{
                    main.removeChild(ragnarCount[i-1]);
                },600)
            }
        }

    },450);
};

ragnarmove();