import ProductItem from "./components/product-item";

// const dummyProjectData = ['Product 1','Product 2','Product 3'];

function ProductList({dummyProjectData}){
    return (
        <div>
            <h3>Ecommerce Project</h3>
            <ProductItem />
            {
                dummyProjectData.map((items,index)=>(
                    //passing data from list to item
                    <ProductItem singleProduct = {items} key={index}/>
                ))
            }
        </div>
    )
}

export default ProductList;

//Upadated notes