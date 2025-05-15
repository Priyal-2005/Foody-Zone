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
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>

        <FoodCardContainer>
          <FoodCards></FoodCards>
        </FoodCardContainer>
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

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  color: white;
  border: none;
`;

const FoodCardContainer = styled.section`
  height: calc(100vh - 170px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div``;