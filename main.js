const add_card = document.getElementById("add_card");

add_card.addEventListener("click", function() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute('style', 
                    'width: 75%; height: 100; margin: 20px; border: 1px solid black; display: flex; flex-direction: column;');
    document.getElementById("applied").appendChild(x)
})