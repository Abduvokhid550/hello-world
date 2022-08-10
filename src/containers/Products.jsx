import styled from "styled-components"
import Product from "../components/Product";
import { products } from "../data/ProductsArray"
import { InputSearch } from "../components/InputSearch"
import { useState } from "react";

export function Products ({addToCart}){
    const [search,setSearch] = useState("")

    const filteredProducts = () =>{
        const searchValue = search.toLowerCase()
        return  products.filter((product) => product.NameProduct.toLowerCase().includes(searchValue))
    }
    return(
        <Wrapper>
            <InputSearch searchProducts={({target}) => setSearch(target.value)}/>
            <StyledProducts>
                {filteredProducts().map(product => <Product  key={product.id} {...product} addToCart={addToCart}/> )}
            </StyledProducts>
        </Wrapper>
    )
}

const Wrapper =styled.div`

`;
const StyledProducts = styled.div`
    display: grid ;
    gap: 48px;
    grid-template-columns: repeat(4,180px);
    margin-top: 50px;
`;