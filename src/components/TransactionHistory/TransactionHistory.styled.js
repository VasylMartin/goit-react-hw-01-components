import styled from "@emotion/styled";

export const Table = styled.table`
width: 90%;
`;

export const Thead = styled.thead`
    & tr {
        background-color: #5de0ce;
    }
    & th {
        padding: 10px;
        text-align: center;
        text-transform: uppercase;
        color: white;
        font-size: 14px;
        letter-spacing: 2px;
    }
`;

export const Tbody = styled.tbody`
    & tr {
        td:first-of-type {
        text-align: left;
        padding-left: 40px;
        text-transform: capitalize;
        }
    }
    & tr:nth-of-type(even) {
        background-color: #ededed;
    }
    & tr:nth-of-type(odd) {
        background-color: white;
    }
    & td {
        padding: 10px;
        text-align: center;
        color: #454545;
        font-family: system-ui;
        font-size: 12px;
    }
`;
