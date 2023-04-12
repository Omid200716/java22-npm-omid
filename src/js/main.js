

const img = document.createElement('img');




const imgUrl = new URL('../media/flower.avif', import.meta.url)




console.log(imgUrl);

img.src = imgUrl;


document.body.append(img);







