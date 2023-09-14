function addCart(id) {
    var table = {
        title: document.getElementById(id).previousElementSibling.innerText,
        desc: document.getElementById(id).innerText,
        price: document.getElementById(id).nextElementSibling.innerText

    };

    localStorage.setItem(id, JSON.stringify(table));
}

function removeCart(id){
    localStorage.removeItem(id);
}