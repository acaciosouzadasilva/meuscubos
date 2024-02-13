const url = "https://script.google.com/macros/s/AKfycbwBiLpTgPuUHnyMvLswBCpPAmRcbUk2yhBvkRr6gmMpRUFcy88t6NTO2yaGvE5lqhR9/exec";

const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

console.log(loadingElement);
//Funcao get all posts

async function getAllPosts() {

    const response = await fetch(url)

    console.log(response)

    let data = await response.json();
    
    const saida = data.saida;

    console.log(saida);

    loadingElement.classList.add('hide')   

    saida.map((post)=>{
        const div = document.createElement("div");
        const modelo = document.createElement("h2");
        const marca = document.createElement("p");
        const divImage = document.createElement('div')
        const imagem = document.createElement("img");

        modelo.innerText = post.Modelo;
        marca.innerText = post.Marca;
        imagem.src = post.Imagem;
        divImage.appendChild(imagem);
        div.appendChild(divImage);
        div.appendChild(modelo);
        div.appendChild(marca);
        

        postsContainer.appendChild(div);


    });
    
}

getAllPosts();