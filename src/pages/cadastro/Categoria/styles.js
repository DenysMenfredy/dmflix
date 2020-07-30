import styled from 'styled-components';

export const EstiloForm = styled.div`
    h1{
        font-size: 2em;
        margin-left: 25px;
    }

    form {
        display: flex;
        align-self: center;
        flex-direction: column;
        align-items: space-around;
        justify-content: center;
    }

    div{
        width: 100%;
        background: var(--inputBackground);
        border-radius: 4px;
        margin-bottom: 30px;
    }

    label {

    }

    input[type="text"]{
        margin: 8px 0;
        color: var(--white);
        width: 100%;
        background: transparent;
        outline: none;
        border: none;
        padding: 8px;
    }
    

    .voltar{
        margin-left: 20px;
    }
    .FormButton{
        width: 180px;
        height: 54px;
        color: #fff;
        border:none;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 18px;
        letter-spacing: 2px;
        background: var(--primary);
        transition: color 0.3s;
    }
    .FormButton:hover{
        color: var(--black);
    } 

`;