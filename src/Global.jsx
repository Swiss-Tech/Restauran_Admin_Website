import styled from "styled-components";
  const GlobalStyle = styled.section`
.customButton {
    
    background-color:${({theme})=>theme.colors.primary} ;
        color:black ;     
        border:none ;
        font-weight :700;
        height:50px;
        width:25%;
        border-radius:10px;
       
        
        &:hover{
            background-color:white ;
        color:orange ;
        }

    }

    .finshButton{
        background-color:${({theme})=>theme.colors.primary} ;
        color:black ;     
        border:none ;
        font-weight :700;
        width:80%;
        height:50px;
        border-radius:10px;
        
        &:hover{
            background-color:white ;
        color:orange ;
        }
    }

    .buttonHover{
        &:hover{
            background-color:gray ;
        color:orange ;
        }
    }

   #dropdown-basic{
    background-color:${({theme})=>theme.colors.primary} ;
        color:black ;     
        border:none ;
        font-weight :700;
        height:50px;
        border:none;
        background-color:white ;
        width:80%;
        border-radius:10px;
        
        &:hover{
            
        color:orange ;
        }
   } 

    input , .customInput{
        height:60px ;
        border:none ;
        border-radius:15px ;
        background-color: #f8f8f8;
        padding:15px;

       
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
 