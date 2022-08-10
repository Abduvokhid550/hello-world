import styled from "styled-components";

 export function InputSearch({searchProducts}) {
    return ( 
            <Input type="text" placeholder="Search" onKeyUp={searchProducts}/>
     );
}

const Input = styled.input`
        height: 50px;
        width: 500px;
        display: block;
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
        border-radius: 13px;
        border: none;
        color: rgba(26, 31, 22, 0.5);
        padding-left: 15px;  
        margin: auto;
`;