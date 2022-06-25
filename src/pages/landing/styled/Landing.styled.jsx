import styled from "styled-components";

export const StyledLanding = styled.section`
background-color:#fff ;
align-items:center ;

.landingCard {
    background-color:white ;
   margin-left:20% ;
   margin-top:10% ;
   
   align-items:center ;
   -webkit-box-shadow: 0 0 2px grey;
        box-shadow: 0 0 2px grey;
    border-radius:10px ;
    width:50% ;
    padding:5% ;
    height:60% ;

   
    display:flex ;
    flex-direction:column ;
    h2 {
       font-weight:900 ;
       align-self:center ;
       font-size:60px ;
       text-align:center ;

    }
    p{
        margin-top:0 ;
        font-size:21px ;
        text-align:center ;
        margin-bottom:50px ;
    }

   
    .emptyHeight{
    height:5px ;
    
    width:100% ; 

}
}
button{
        background-color:orange ;
        color:white ;     
        border:none ;
        &:hover{
            background-color:white ;
        color:orange ;
        }

    }
    .sized-box{
        height:30px ;
    }
    /* .testing{
     color:${({theme})=>
        theme.text
      }

      
    } */
    


   
`;