function App() {
  const subtitle = "Shop Now";
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Women's",
    },
    {
      id: 5,
      title: "Men's",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div className="category-container" key={category.id}>
            <div className="category-image"/>
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
