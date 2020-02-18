const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {

    // ambil berapa banyak elemen tanah yang ada lalu di acak    
    const random = Math.floor(Math.random()*tanah.length)    

    //ambil angka yang sudah di acak , lalu di masukkan ke node tanah
    const tRandom = tanah[random];
        

    if(tRandom == tanahSebelumnya){
        //jalankan kembali function randomTanah
        randomTanah(tanah);
    }
    
    tanahSebelumnya = tRandom;
    
    return tRandom;

} 

function randomWaktu(min,max) {
    //rumus random waktu
    return Math.round(Math.random()*(max-min)+min);    
}

function munculkanTikus() {
    // muncul di tempat random
    const tRandom = randomTanah(tanah);

    // durasi waktu random
    const wRandom = randomWaktu(300,1000);

    // tambahkan class muncul
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul')
        // recursive function 
        munculkanTikus();        
    }, wRandom );
}

function mulai(){
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;

    munculkanTikus();

    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul(){
    //tambah skor
    skor++    
    this.parentNode.classList.remove('muncul');
    papanSkor.textContent = skor;
}

tikus.forEach(t => {
    t.addEventListener('click',pukul);
});