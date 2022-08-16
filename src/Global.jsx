import styled from "styled-components";
  const GlobalStyle = styled.section`
.addButton{
  
  background-color: ${({theme})=>theme.colors.primary};
  color:white;
 
       
        border:none ;
        font-weight :700;
        height:45px;
        width:20%;
        border-radius:10px;

        
        &:hover{
          
        }
}

  .main{
    flex:6;
  }
.customButton {
     padding-left:20px;
     padding-right:20px;
    background-color:${({theme})=>theme.colors.primary} ;
        color:black ;     
        border:none ;
        font-weight :700;
        height:50px;
       
        border-radius:10px;
       
        
        &:hover{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  .customSearch{
    height:60px ;
        border:none ;
        border-radius:15px ;
        background-color: white;
        padding:15px;
       display:flex;
        gap:10px;
        flex-direction:row;
        justify-content:start;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.08);
  }

   .customShadow{
  
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.06);
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
    .customInput{
        height:60px ;
        border:1px solid black ;
        border-radius:15px ;
        background-color: white;
        padding:15px;
       display:flex;
        gap:10px;
        flex-direction:row;
        justify-content:start;
    }

    .blackButton{
        background-color:${({theme})=>theme.colors.border} ;
        color:white;
        padding-left:30px;
        padding-right:30px;
        padding-top:5px;
        padding-bottom:5px;
        border-radius:10px
    
      

    }


  
 
 `;

 export default GlobalStyle;
 