import styled from "styled-components";

const StyledTable = styled.table`
    width: 800px;
    text-align: left;
    border-collapse: collapse;

    thead{
        background-color: #E8E8E8;

    }
    tbody{
        background-color: white;
    }
    th{
        font-weight: 700;
    }
    th,td{
        border: 1px solid #CDCDCD;
        height: 51px;
        padding-left: 26px;

    }
    td{
        font-weight: 500;
    }
    caption{
        text-align: left;
        color: white;
        margin-bottom: 1.5rem;
        font-size: 40px;
        line-height: 40.5px;
    }


`

export default StyledTable