import { useEffect, useState } from "react";
import styled from "styled-components"
import SearchResults from "./components/SearchResults/SearchResults";

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true)
      try {
        const response = await fetch(BASE_URL);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      }
  
      catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  },[]);

  console.log(data);

  // const temp = [
  //   {
  //     name: "Boiled Egg",
  //     price: 10,
  //     text: "Lorem ipsum dolor sit amet.",
  //     image: "/images/egg.png",
  //     type: "breakfast"
  //   }
  // ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>

  return (
    <>
      <Container>
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

        <SearchResults data={data} />

      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px
  margin: 0 auto
`

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

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  color: white;
  border: none;
`;