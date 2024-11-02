//gọi nút 
const button1 = document.getElementById('no');
const button2 = document.getElementById('yes');
button1.addEventListener('click', function(){
    //tính toán vị trí ban đầu 
    const bodyWidth = window.innerWidth - button1.offsetWidth;
    const bodyHeight = window.innerHeight - button1.offsetHeight;
    //tính toán vị trị 
    const randomX = Math.floor(Math.random()*bodyWidth);
    const randomY = Math.floor(Math.random()*bodyHeight);

    //thay đổi vị trí ngỗng nhiên
    button1.style.position = 'absolute'; // Cần thiết để thay đổi vị trí
    button1.style.left = randomX + 'px';
    button1.style.top = randomY + 'px';
});
button2.addEventListener('click',function(){
    window.location.href='main.html';

});


