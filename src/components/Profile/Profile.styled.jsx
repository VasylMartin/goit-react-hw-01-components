import styled from '@emotion/styled'

export const Card = styled.div`
    width: 250px;
    border: 1px solid #c6c6e3;
    border-radius: 5px;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    background-color: white;
`;

export const CardDescription = styled.div`
    text-align: center;
    padding: 15px 15px 30px;
`;

export const UserImg = styled.img`
    width: 150px;
    border-radius: 50%;
    outline: 1px solid black;
`;

export const UserName = styled.p`
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
`;

export const UserTag = styled.p`
    font-weight: 500;
    color: #7f7f7f;
    margin-bottom: 0;
    margin-top: 8px;
`;

export const UserLocation = styled.p`
    font-weight: 500;
    color: #7f7f7f;
    margin-bottom: 0;
    margin-top: 8px;
`;

export const UserStats = styled.ul`
    list-style-type: none;
    display: flex;
    padding-left: 0;
    margin: 0;
    background-color: #c8d9e9;
    border-top: 1px solid #c6c6e3;
`;

export const UserStat = styled.li`
    padding: 8px;
    flex-basis: calc(100% / 3);
    text-align: center;
    border-right: 1px solid #c6c6e3;
    &:last-child {
    border: none;
}
`;

export const StatLabel = styled.span`
    display: block;
    color: #7f7f7f;
`;

export const StatQuantity = styled.span`
    display: block;
    font-weight: 500;
`