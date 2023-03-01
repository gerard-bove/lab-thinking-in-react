function ProductRow({name, price, inStock}) {
    return (
        <tr>
            <td style={ !inStock ? {color: "red"} : null}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow;