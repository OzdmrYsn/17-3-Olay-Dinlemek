// //! Olay Dinleme

// //* web sayfamızda gerçekleşen etkileşimlerin takip edilmesi ve bu etkileşimlerin tetiklediği olayların algılanmasıdır.

// //* Olay türlerine kısaca değinelim:

// //? click -> tıklama,
// //? onchange -> Tuşa Basma
// //? submit -> formu gönderme

// //* Olayları dinlemek için JavaScript'te "addEventListener" yöntemi kullanılır.

// // HTML'de bir buton elementi var ve id'si "myButton"
// let button = document.getElementById("myButton");

// // Click olayını dinlemek için addEventListener kullanarak bir olay dinleyicisi ekleyelim
// button.addEventListener("click", function () {
//   console.log("Butona tıklandı!");
// });

// /* Örnek-1 */

// let x = document.getElementById("myBtn");
// x.addEventListener("mouseover", myFunction);
// x.addEventListener("click", mySecondFunction);
// x.addEventListener("mouseout", myThirdFunction);

let eventler = document.getElementById("myBtn");
eventler.addEventListener("mouseover", myFunction);
eventler.addEventListener("click", mySecondFunction);
eventler.addEventListener("mouseout", myThirdFunction);


function myFunction() {
  document.getElementById("demo").innerHTML += "Üzerine Gelindi!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Tıklandı!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Üzerinden Çıkıldı!<br>";
}





// /* Örnek-2 */

// let box = document.getElementById("myBox");

// box.addEventListener("mouseover", function () {
//   box.style.backgroundColor = "blue";
// });

// box.addEventListener("mouseout", function () {
//   box.style.backgroundColor = "red";
// });

// /* Örnek-3 */

// let form = document.getElementById("myForm");

// form.addEventListener(
//   "submit",
//   function (event) {
//     event.preventDefault(); // Formun otomatik olarak gönderilmesini engellemek için

//     const nameInput = document.getElementById("nameInput");
//     const name = nameInput.value;

//     console.log("Gönderilen ad:", name);
//   }
//   // ... verileri başka bir yere gönderme veya işleme kodları
// );

// /* Örnek-4 */

// let select = document.getElementById("mySelect");

//   select.onchange = function (event) {

//   let selectedOption = event.target.value;

//   console.log("Seçilen seçenek:", selectedOption);
// };

// /* Örnek-5 */

// let input = document.getElementById("myInput");
//     input.onchange = function(event) {
//       let enteredValue = event.target.value;
//       console.log("Girilen değer:", enteredValue);
//     };

// //* onchange olayı dinleyicisi, metin girişinin onchange özelliğine atanmış bir işlevi temsil eder. 
// //* Olay gerçekleştiğinde, olay dinleyici işlevi çalışır ve girilen değeri konsola yazdırır. 
// //* Olay nesnesi (event) üzerinden, target özelliği aracılığıyla metin girişine erişilir ve value özelliği ile girilen değer alınır.
