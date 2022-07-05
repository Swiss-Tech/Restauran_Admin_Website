import styled from "styled-components";
  const GlobalStyle = styled.section`
button {
    
    background-color:${({theme})=>theme.colors.primary} ;
        color:black ;     
        border:none ;
        font-weight :700;
        
        &:hover{
            background-color:white ;
        color:orange ;
        }

    }

    input {
        height:60px ;
        border:none ;
        border-radius:15px ;
        background-color: #f8f8f8;

       
    }
    textarea{
        border:none ;
        border-radius:15px ;
        background-color: #f8f8f8;
    }

    input:focus{
        border:2px solid ${({theme})=>theme.colors.border} ;
        border-radius:15px ;
        background-color: #f8f8f8;
        outline:none ;
        box-shadow:none ;
    }
    textarea:focus{
        border:2px solid ${({theme})=>theme.colors.border} ;
        border-radius:15px ;
        background-color: #f8f8f8;
        outline:none ;
        box-shadow:none ;
    }

 `;

 export default GlobalStyle;
 