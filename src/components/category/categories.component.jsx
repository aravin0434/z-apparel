import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.component";

function Categories({categoriesData, subtitle}) {
  return (
    <div className="categories-container">
      {categoriesData.map((category) => {
        return (
          <CategoryItem
            category={category}
            subtitle={subtitle}
            key={category.id}
          />
        );
      })}
    </div>
  );
}

export default Categories;
