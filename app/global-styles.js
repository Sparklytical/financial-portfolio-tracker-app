import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // variables
    :root {
      --primary-color: #0e153a;
      --tertiary-color: #a1eafb;
      --font-color: #e2f3f5;
      --info-color: #086972;
      --danger-color: #ff304f;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    html {
      font-size: 62.5%;
    }

    body {
      background-color:#303a52;
      box-sizing: border-box;
      font-size: 1.6rem;
      font-family: 'Lato';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: var(--font-color);
    }

    // utilities
    .text-cap {
      text-transform: capitalize !important;
    }

    // Components
    .alert {
      padding: 1.5rem;
      border-radius: 4px;
      font-size: 1.5rem;
      color: var(--font-color);
      text-align: left;
      letter-spacing: 0.5px;
      border: 1px solid #e8e8e8;
      margin: 1.5rem 0;
      font-weight: 500;

      &-info {
        background-color: var(--info-color);
        color: var(--font-color);
      }

      &-danger {
        background-color: var(--danger-color);
        color: #fff;
      }
    }

    .btn {
      background-color: #f5f5f5;
      border: 1px solid #e8e8e8;
      cursor: pointer;
      padding: 0.5rem 1.5rem;
      border-radius: 0.6rem;
      box-shadow: 2px 2px .6rem rgba($color: #000000, $alpha: 0.3);

      &--danger {
        background-color: var(--danger-color);
        color: #fff;
      }
    }

`;

export default GlobalStyle;
