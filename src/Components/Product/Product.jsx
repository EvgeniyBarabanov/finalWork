import style from './Product.module.css'

function Product(){
    return (
        <div className={style.cart}>
            <h2>Product name</h2>
            <img src="#" alt="product__image" />
            <p>Description</p>
            <p>Price</p>
            <button>Add to cart</button>
        </div>
    );
}

export default Product;