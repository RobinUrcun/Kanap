const RecupationProduit = await fetch('http://localhost:3000/api/products')
const produit = await RecupationProduit.json()

const sectionProduct = document.getElementById('items')
console.log(produit);
const affichageProduit = function(x){
    for(let i=0; i < x.length; i++){

        const a = document.createElement('a')
        const article = document.createElement('article')
        const image = document.createElement('img')
        const title = document.createElement('h3')
        const text = document.createElement('p')

        a.href = `.../back/images/product.html?id=42`
        image.src = `http://localhost:3000/images/kanap0${(i+1)}.jpeg`
        image.alt = `${x[i].altTxt}`
        title.innerText = `${x[i].name}`
        text.innerText =`${x[i].description}`
        
        sectionProduct.appendChild(a)
        a.appendChild(article)
        article.appendChild(image)
        article.appendChild(title)
        article.appendChild(text)


    }
}
affichageProduit(produit)