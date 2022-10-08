import styled from "@emotion/styled";

export const FriendListItem = styled.li`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 4px;
    padding: 12px 14px;
    display: flex;
    margin-bottom: 16px;
    align-items: center;
`;

export const Status = styled.span`
    width: 20px;
    height: 20px;
    margin-right: 20px;
    border-radius: 50%;
    outline: 1px solid;
    background-color: ${({ isOnline }) => {
        if (isOnline) {
            return 'green';
        } else {
            return 'red';
        }
    }};
`;

export const Photo = styled.img`
    border-radius: 4px;
    outline: 1px solid;
    display: inline-block;
    margin-right: 20px;
`;

export const Name = styled.p`
    font-size: 20px;
    margin: 0;
    font-family: system-ui;
    font-weight: 500;
`;