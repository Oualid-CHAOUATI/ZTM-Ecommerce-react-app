import Category from "../category/Category.component";

const Directory = ({array}) => {
  return (
    <div className="categories-wrapper">
      {array.map((categoryObject) => (
        <Category {...categoryObject} />
      ))}
    </div>
  );
};

export default Directory;
