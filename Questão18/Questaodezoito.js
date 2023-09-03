//18 - Mostre no console todas as propriedades desse objeto.

let perfil={
    nome: "Aline",
    idade: "30 anos",
    profissao:"Front-end"
};

for (let propriedade in perfil) {
    console.log(`${propriedade}: ${perfil[propriedade]}`)
}