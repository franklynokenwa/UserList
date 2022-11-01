import styled from "styled-components";

const StyledCreateAccount = styled.section`
  height: 100vh;

  h2 {
    font-size: 30px;
    margin-top: 60px;
  }

  form {
    width: 350px;
    color: #848484;

    .errorMessage{
        color: red;
    }

    input {
      width: 300px;
      height: 44px;
      border: none;
      border-radius: 5px;
      background-color: #f3f3f3; 
      box-shadow: 0px 4px 6px 0px #00000026;
    }
    .radioButton {
      width: 250px;
      display: flex;
      justify-content: space-between;

      #radioMale,
      #radioFemale {
        accent-color: #d9d9d9;
        border: 1px solid #d9d9d9;
        box-shadow: unset;
      }

      label {
        position: relative;
        top: 1rem;
        margin-right: 3rem;
      }
    }
    button {
      width: 200px;
      border-radius: 15px;
      border: none;
      outline: 1px solid black;
      height: 30px;
      margin-top: 1rem;
      cursor: pointer;
    }
    button:hover{
        background-color: gainsboro;
    }
    input::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      padding-left: 1rem;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      padding-left: 1rem;
    }
  }
  @media screen and (max-width: 1280px) {
    width: 100vw;
    margin-left: 5rem;
    margin-top: 3rem;
    
  }
`;

export default StyledCreateAccount;
