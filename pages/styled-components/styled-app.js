import styled from 'styled-components';

const StyledApp = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  align-items: center;

  // Theme
  .list__item {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 2px solid #b855dd;
    border-radius: 8px;
    margin: 8px 0 8px 0;
    padding: 8px;

    .list__title {
      font-size: 22px;
    }
  }
`;

export default StyledApp;
