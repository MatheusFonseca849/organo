import { createGlobalStyle } from "styled-components";

export const GlobalRoot = createGlobalStyle`

:root{

    --color-primary:#6278F7;
    --color-hover:#95FFD4;
    --color-primary-gray:#F2F2F2;

    --color-grey-0: #15171a;
    --color-grey-1: #212529;
    --color-grey-2: #2b2f33;
    --color-grey-3: #868e96;
    --color-grey-4: #adb5bd;
    --color-grey-5: #ced4da;
    --color-grey-6: #dee2e6;
    --color-grey-7: #f1f3f5;
    --color-grey-8: #f8f9fa;
    --color-grey-9: #fdfeff;

    --font-family-prata:'prata', sans-serif;
    --font-family-montserrat: 'montserrat', sans-serif;

    --font-size-title: 2.875rem; /* 46px */
    --font-size-subtitle: 2.25rem; /* 36px */
    --font-size-0: 2.0rem; /* 40px */
    --font-size-1: 2rem; /* 32px */
    --font-size-2: 1.125rem; /* 18px */
    
    --font-weight-0: 700;
    --font-weight-1: 500;
    --font-weight-2: 400;

    --padding-title: 24px 0;
    --padding-form: 16px;
    --padding-input: 12px;
    --padding-button: 16px;

    --margin-form: 16px;
    --margin-tittle: 12px;
    --margin-tittle-container: 16px;

    --input-shadow: 5px 5px 8px 1px rgba(66, 68, 90, 0.10);

    --radius-default: 8px;
    --radius-input: 4px;
    --radius-button: 6px;
    --radius-tittle-border: 4px;

    --gap-main: 16px;
    --gap-form: 16px;

    --form-max-width: 860px;

    --width-tittle-border: 64px;
    --height-tittle-border: 4px;


}


`