
const importAll = (r) => {
  const images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('./img/particles', false, /\.(png|jpe?g|svg)$/));
const particleImages = Object.entries(images).map(([key, value]) => {
  return {
    src: value,
    width: 20,
    height: 20,
  };
});
export default particleImages;
