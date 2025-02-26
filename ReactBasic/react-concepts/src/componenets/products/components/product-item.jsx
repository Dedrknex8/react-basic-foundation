import "./style.css"
function ButtonComponet(){
    return <div>
        <button>Click me</button>
    </div>
}
function ProductItem({singleProduct, key}){
    return <div key={key}>
        <p className="Para">{singleProduct}</p>
        <ButtonComponet></ButtonComponet>
    </div>
}

export default ProductItem;