
import styled from "styled-components"
export const StyledSignup = styled.section`
.already_have_account{
    color:black ;
    &:hover{
        color:${({theme})=>theme.colors.primary}
    }
}
`;

