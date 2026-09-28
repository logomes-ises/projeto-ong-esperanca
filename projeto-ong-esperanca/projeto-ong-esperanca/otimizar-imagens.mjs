import sharp from "sharp";

const imagens = [
    "imagens/ong.jpg",
    "imagens/doacao.jpg",
    "imagens/voluntariado.jpg"
];

for (const imagem of imagens) {
    const destino = imagem.replace(".jpg", ".webp");

    await sharp(imagem)
        .webp({ quality: 80 })
        .toFile(destino);

    console.log(`Convertida: ${imagem} -> ${destino}`);
}