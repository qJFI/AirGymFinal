October();

function Maadi() {
        document.getElementById("Gphotos").innerHTML=`
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.882685223503!2d31.321847923716472!3d29.98280132148754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458390733dc600d%3A0x9c7db441a8bbe5f1!2sAir%20Gym%20-%20Maadi!5e0!3m2!1sar!2seg!4v1703355143321!5m2!1sar!2seg" width="1200px" height="500px" style="border: 20px solid rgb(0, 81, 255); border-radius: 15px; " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
       
}

function October() {
    document.getElementById("Gphotos").innerHTML=`
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1728.12284371735!2d30.93993945537077!3d29.97236846595479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585658563d8c9d%3A0xf8037c015d1d48ec!2sAir%20Gym%20%26%20Spa!5e0!3m2!1sar!2seg!4v1703348059023!5m2!1sar!2seg" width="1200px" height="500px" style="border: 20px solid rgb(0, 81, 255); border-radius: 15px; " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;



}



function Haram() {
    document.getElementById("Gphotos").innerHTML=`
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.6702230879923!2d31.150990511711026!3d29.988906056626956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584581c7edcb4b%3A0x1937349ac3aaff0a!2sAir%20Gym%20(Men)%20-%20Al%20Haram!5e0!3m2!1sar!2seg!4v1703355260645!5m2!1sar!2seg" width="1200px" height="500px" style="border: 20px solid rgb(0, 81, 255); border-radius: 15px; " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;


}




function Nasr() {
    document.getElementById("Gphotos").innerHTML=`
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110506.43281383652!2d31.514413002734354!3d30.05618790000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583db8a683d397%3A0x8afb641b1a4c8e99!2sAir%20gym%20%26%20spa%20Nasr%20city!5e0!3m2!1sar!2seg!4v1703355329961!5m2!1sar!2seg" width="1200px" height="500px" style="border: 20px solid rgb(0, 81, 255); border-radius: 15px; " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;



}



/**
* add event on element
*/

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
    }
    


/**
* header & back top btn active
*/


const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
if (window.scrollY >= 100) {
 
  backTopBtn.classList.add("active");
} else {
  
  backTopBtn.classList.remove("active");
}

});
    