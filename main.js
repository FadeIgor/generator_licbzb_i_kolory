let container = document.getElementById('container')
const generateBtn = document.getElementById('generateBtn')

generateBtn.addEventListener('click', function(){
    const liczba = document.getElementById('countInput').value

    for(ile = liczba; ile >0 ; ile--)
    {
        rand = Math.floor(Math.random(1 , 100) *100 + 1)
        if(rand%2 == 0) container.innerHTML += `<div class="box even">${rand}</div>`;
        if(rand%2 == 1) container.innerHTML += `<div class="box odd">${rand}</div>`;
    }
    
})