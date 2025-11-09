function getImgUrl(imageUrl) {
  return new URL (`../assets/products/${imageUrl}`, import.meta.url).href;
}

export default getImgUrl;