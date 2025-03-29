import './category-item.styles.scss';

function CategoryItem ({category, subtitle}) {

    return (
        <div className="category-container">
            <div className="background-image"
              style={{
                backgroundImage: `url(${category.imageUrl})`
              }}
            />
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
    );

}

export default CategoryItem;