import styled from "styled-components"

const StyledCreateAccount = styled.section`
    position: relative;

    form{
        width: 350px;

        input{
            width: 300px;
            height: 44px;
            border: none;
            border-radius: 5px;
            background-color: #F3F3F3;
        }
        #gender{
            width: 30px;
        }
        button{
            width: 200px;
            border-radius: 15px;
            border: none;
            outline: 1px solid black;
            height: 30px;
        }
    }
`

export default StyledCreateAccount