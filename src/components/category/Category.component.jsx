import "./Category.styles.css";

const Category = ({ name, id, img }) => {
  return (
    <div key={id} className="category-wrapper">
      <div className="img-wrapper" style={{ backgroundImage: `url(${img})` }} />
      <h4 className="name"> {name}</h4>
      <button>add to my cart</button>
    </div>
  );
};

export default Category;
