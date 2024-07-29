const requestURL = 'https://api.github.com/users/AmithBV0606';

const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL)

xhr.onreadystatechange = function(){ 
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        const img = document.createElement('img')
        const card = document.querySelector(".card")

        img.setAttribute("src", data.avatar_url)
        card.append(img)

        const p = document.createElement('p')
        p.innerHTML = data.bio;
        card.appendChild(p)
    }
}
xhr.send()