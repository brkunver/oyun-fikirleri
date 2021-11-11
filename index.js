// Html elementleri
let oyunMetni = document.getElementById("oyun");
let buton = document.getElementById("buton1");
let ekOzellik = document.getElementById("ekOzellik");

// rastgele mekan ve karakter secme fonksiyonlari
let randomMekan = () => mekanlar[Math.floor(Math.random() * mekanlar.length)];
let randomKarakter = () => karakterler[Math.floor(Math.random() * karakterler.length)];
//verilen rakama gore rastgele bir ozellik secme fonksiyonu
let randomOzellik = (sansOrani) => {
  let randomSayi = Math.floor(Math.random() * 100)
  if (randomSayi < sansOrani) {
    return ozellikler[Math.floor(Math.random() * ozellikler.length)];
  }
  else {
    return "";
  }
}
// yazının belli kısmını pembe yapan kod stringleri
let pembeBas = () => "<span style=\"color: #FFAB4C;\" > ";
let pembeSon = () => "</span>";
//butona basinca cagirilan fonksiyon. Uc tane taslak arasindan rastgele birini secip oyun yaratiyor.
let yeniFikir = () => {
  let taslak = Math.floor(Math.random() * 3)

  switch (taslak) {
    case 0:
      oyunMetni.innerHTML = randomMekan() + pembeBas() + " geçen, " + pembeSon() + randomOzellik(25) + " " + randomKarakter() + pembeBas() + " olduğun ve " + pembeSon() + randomOzellik(20) + " " + randomKarakter() + pembeBas() + " ile savaştığın bir oyun" + pembeSon();
      break;
    case 1:
      oyunMetni.innerHTML = pembeBas() + "Kahramanımız oyunu " + pembeSon() + randomMekan() + pembeBas() + " bir " + pembeSon() + randomOzellik(20) + " " + randomKarakter() + pembeBas() + " olarak oynuyor. Düşmanların ise " + pembeSon() + randomOzellik(20) + " " + randomKarakter() + pembeBas() + ". Ve kurtarman gereken bir dostun var : " + pembeSon() + randomOzellik(10) + " " + randomKarakter();
      break;
    case 2:
      oyunMetni.innerHTML = pembeBas() + "Sen busun : " + pembeSon() + randomOzellik(25) + " " + randomKarakter() + pembeBas() + ", düşmanların ise " + pembeSon() + randomOzellik(20) + " " + randomKarakter() + pembeBas() + ", kurtarman gereken ise " + pembeSon() + randomOzellik(15) + " " + randomKarakter()
      break;
  }


}
// butona onclick methodu atamasi
buton.onclick = yeniFikir
