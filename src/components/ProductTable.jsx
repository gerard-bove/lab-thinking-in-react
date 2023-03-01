import ProductRow from "./ProductRow";

function ProductTable({products}) {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {products.map(({name, price, inStock, id}) => (
                <ProductRow            
                    key={id}
                    name={name}
                    price={price}
                    inStock={inStock}
                />
            ))}
        </table>
    )
}

export default ProductTable;