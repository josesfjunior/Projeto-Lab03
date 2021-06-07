const array = [
    {
        id: 1,
        nome: "Junior",
        numero: 82999201061,
        email: "josejuninho8@gmail.com",
        instagram: "josesfjunior"
},
{
    id: 2,
    nome: "Klebin",
    numero: 82996254781,
    email: "klebinkleberson@gmail.com",
    instagram: "okleber"
},

{
    id: 3,
    nome: "Caranga",
    numero: 82985127468,
    email: "carangadoparangole@hotmail.com.com",
    instagram: "carangueila"
},
]

array.forEach(items=>{
    console.log(items.nome)
})

console.log(array.pop(2))
console.log(array)