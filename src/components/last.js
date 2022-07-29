import Card from "./card.js"


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  

  const Last=()=>(
    <div class="cards">
        <Card
          image1={images['image 12.png']}
          image3={images['Group 65.png']}
          image2={images['Group 80.png']}
        />
         <Card
          image1={images['wedding-photography 1.png']}
          image3={images['Group 78.png']}
          image2={images['Group 80.png']}
        />
         <Card
          image1={images['mountain-bike 1.png']}
          image3={images['Group 79.png']}
          image2={images['Group 80.png']}
        />
    </div>
  )

  export default Last;