import styled from 'styled-components';

export const MainContainer = styled.div`
    margin: 0px auto;
    margin-bottom: 20px;
    width: 600px;
    font-family: Arial, Helvetica, sans-serif;
    color: #4a494a;
    border: 1px solid #a5a5a5;
    text-align: center;

    h1 {
        border-bottom: 1px solid #a5a5a5;
        padding: 20px;
        margin: 0px;
    }
`;

export const Form = styled.form`

    border-bottom: 0px;

    label {
        font-weight: bold;
        font-size: 16px;
        padding: 20px;
    }

    select {
        width: 100%;
        font-size: 15px;
        margin-top: 10px;
    }

    input[type='text'] {
        width: 90%;
        height: 30px;
        padding: 5px;
        margin: 0px auto;
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

export const FormSubmitContainer = styled.div`
    padding: 20px;
    border-top: 1px solid #a5a5a5;

    button {
        width: 100%;
        margin-top: 10px;
        background-color: #eee;
        border: 1px solid #a5a5a5;
        font-weight: bold;
        font-size: 15px;
        color: #4a494a;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        &:disabled {
            color: #cecece;
            background: #fff;
            border: 1px solid #cecece;
        }
    }
`;

export const Error = styled.div`
    color: red;
    padding: 20px;
`;

export const ListContainer = styled.div`
    padding: 20px;
    border-top: 1px solid #a5a5a5;

    ul {
        list-style-type: none;
        padding: 0px;
    }
`;

export const Loading = styled.div`
    font-style: italic;
    padding: 20px;
    font-size: 13px;
    border-top: 1px solid #a5a5a5;
`;

export const BackButtonContainer = styled.div`
    padding: 20px;
    text-align: left;
    font-size: 13px;
    border-bottom: 0px solid #a5a5a5;
`;
