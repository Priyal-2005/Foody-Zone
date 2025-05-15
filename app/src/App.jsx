import styled from "styled-components"

const App = () => {

  return (
    <>
      <div style={{maxWidth: "1200px", margin: "0 auto"}}>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>

          <div className="search">
            <input placeholder="Search Food" />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button></Button>
        </FilterContainer>
      </div>
    </>
  );
};

export default App;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      outline: none;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section``;

const Button = styled.button``;