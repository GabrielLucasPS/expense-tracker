import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrowLeft = styled.div`
    width: 40px;
    height: 36px;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    background-color: darkblue;
    color: #fff;
    border-radius: 20%;
    rotate: 90deg;
`;
export const MonthArrowRight = styled.div`
    width: 40px;
    height: 36px;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    background-color: darkblue;
    color: #fff;
    border-radius: 20%;
    rotate: 270deg;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;

