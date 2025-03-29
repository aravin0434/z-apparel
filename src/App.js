
import categoriesData from './categories.json';
import Categories from './components/categories.component';

function App() {
  const subtitle = "Shop Now";

  return (
    <Categories categoriesData={categoriesData} subtitle={subtitle} />
  );
}

export default App;
