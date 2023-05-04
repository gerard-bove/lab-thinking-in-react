import ProductRow from "./ProductRow";

function ProductTable({products}) {
    return (
        <table className="table-container">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(({name, price, inStock, id}) => (
                    <ProductRow            
                        key={id}
                        name={name}
                        price={price}
                        inStock={inStock}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ProductTable;