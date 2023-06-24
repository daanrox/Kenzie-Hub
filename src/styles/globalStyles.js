import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
   
   *{
       font-family: var(--font-primary);

       box-sizing: border-box;

       padding: 0;
       margin: 0;
       text-decoration: none;
       outline: none;
       border: none;
       list-style: none;
    }

    body{
        background-color: var(--grey400);
        color: var(--grey000);
    }

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        
        --grey000: #F8F9FA;
        --grey100: #868E96;
        --grey200: #343B41;
        --grey300: #212529;
        --grey400: #121214;
        
        --color-sucess: #3FE864;
        --color-error: #E83F5B;
        
        --font-primary: 'Inter', sans-serif;
        
        
        font-size: 62.5%;
    }

`