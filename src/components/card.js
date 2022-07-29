


const Card=({image1,image2,image3})=>(
    <div className="card">
        <div className="upper-card">
            <img className="main-img" src={image1}></img>
            <img className="soldout" src={image2}></img>
        </div>
        <div className="lower-card">
             <img src={image3}></img>
        </div>
        
    </div>
)

export default Card;