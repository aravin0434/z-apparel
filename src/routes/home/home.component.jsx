
import categoriesData from '../../data/categories.json';
import Categories from '../../components/category/categories.component';

function Home() {
  const subtitle = "Shop Now";

  return (
    <Categories categoriesData={categoriesData} subtitle={subtitle} />
  );
}

export default Home;
