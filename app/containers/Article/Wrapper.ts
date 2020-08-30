import styled, { css } from 'styled-components';

const Wrapper = styled.article(
  ({ theme: { color, typography } }) => css`
    font-family: ${typography.fontFamily['sans-serif']};
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: ${color.textPrimary};

    h1 {
      font-size: 2.5rem;
      margin: 1rem 0;
    }

    h2 {
      font-size: 2.25rem;
      margin: 1rem 0;
    }

    h3 {
      font-size: 2rem;
      margin: 1rem 0;
    }

    h4 {
      font-size: 1.8rem;
      margin: 1rem 0;
    }

    h5 {
      font-size: 2rem;
      margin: 1rem 0;
    }

    h6 {
      font-size: 1.85rem;
      margin: 1rem 0;
    }

    p {
      margin-bottom: 1.85rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    hr {
      color: ${color.textPrimary};
      border-top: none;
      border-style: solid;
      border-color: ${color.border};
    }

    a {
      color: ${color.link};
      text-decoration: none;
      :hover {
        color: ${color.link};
        transition: font-weight 0.2s;
      }
    }
  `
);

export default Wrapper;
