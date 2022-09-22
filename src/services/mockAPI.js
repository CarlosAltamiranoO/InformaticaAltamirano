const data = [{
    id: 1,
    title: "Notebook Dell Inspiron 3511",
    detail: 'Intel® Core™ i5-1135G7 8GB ram SSD 256GB 15.6" intel Iris Xe',
    prise: 152999,
    img: '/assets/Notebook/DELL-1-300x300.webp',
    stock: 8,
    categorie: 'notebook'
}, {
    id: 2,
    title: "Notebook Asus Vivobook R565EA-US51",
    detail: 'Intel® Core™ i5-1135G7 8GB ram SSD 256GB 15.6" intel Iris Xe Graphics',
    prise: 138999,
    img: '/assets/Notebook/ASUS-VIVOBOOK-R656EA-UH51T-300x300.webp',
    stock: 6,
    categorie: 'notebook'
}, {
    id: 3,
    title: "Notebook Lenovo Ideapad 3 15itl06",
    detail: 'Intel® Core™ i3-1115G4 8GB ram SSD 512GB 15.6" intel Iris Xe Graphics',
    prise: 114999,
    img: '/assets/Notebook/Lenovo-Ideapat-3-300x300.webp',
    stock: 10,
    categorie: 'notebook'
}, {
    id: 4,
    title: "Notebook Msi GP66 Leopart",
    detail: 'Intel® Core™ i7-11800H 16GB ram SSD 512GB 15.6" Nvidia Geforce RTX 3080 8GB',
    prise: 114999,
    img: '/assets/Notebook/MSI-FRONTAL-300x300.webp',
    stock: 4,
    categorie: 'notebook'
}];

export function getItems(){
    return new Promise((resolve, reject) => {
        setTimeout( () =>{
            resolve(data);
        }, 2000)
    })
}