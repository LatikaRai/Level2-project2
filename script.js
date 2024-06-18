var arr = [
    {name: "Quote", image: "https://i.pinimg.com/236x/b7/80/8c/b7808c1a38687222b629190cf74d694b.jpg"},
    {name: "Quote", image: "https://i.pinimg.com/564x/9a/34/9b/9a349bb4f6a0d1b78472a8a082573d98.jpg"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "model", image: "https://i.pinimg.com/236x/8f/52/9a/8f529a285b0b83f36ec4b885a0030af2.jpg"},
    {name: "the crowd of city", image: "https://i.pinimg.com/236x/ec/f9/77/ecf9775ebb0be442478da415a0cc57fd.jpg" },
    {name: "beauty", image: "https://plus.unsplash.com/premium_photo-1664474898608-7537d5780e17?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "nature", image: "https://i.pinimg.com/564x/bd/89/03/bd890313e4124d64040e528c43e2dd95.jpg"},
    {name: "indian classical", image: "https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "photography", image: "https://i.pinimg.com/564x/89/b4/0c/89b40c75a94050af30c888c17a3c456b.jpg"},
    {name: "Cutlery", image: "https://images.unsplash.com/photo-1710587385270-08f30d66bf31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "sketch", image: "https://i.pinimg.com/564x/20/0a/75/200a75fc57406f7af0eb745242e1d2e4.jpg"},
    {name: "makeup tutorial", image: "https://i.pinimg.com/236x/f9/e1/64/f9e1642a618068747307f3d6eb9fba45.jpg"},
    {name: "meme", image: "https://i.pinimg.com/236x/77/1a/f2/771af2cd0c9970ba2aabca2cc9fe3763.jpg"}
    
]

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearchFunctionality();
showTheCards();