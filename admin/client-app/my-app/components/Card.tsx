export const Card = ({product}: any)=>{
    return <div className="w-1/5  rounded-md mt-5 border  hover:shadow-2xl">
        <div className="p-8 h-72 bg-white ">
            <img className="w-full h-full rounded-md" src={product.imageurl} alt="image"></img>
        </div>
        <div className="text-xl px-4 py-2 font-semibold ">
            {product.name}
            <div className="flex mt-4 justify-center pb-5">
                <div>RS. {product.price}</div>
                <div className="bg-black text-white px-4 py-1 rounded-lg mx-4"><button>add to cart</button></div>
            </div>
        </div>
    </div>
}