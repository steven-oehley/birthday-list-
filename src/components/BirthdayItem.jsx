import Avatar from "./Avatar";
import CloseBtn from "./CloseBtn";

const BirthdayItem = ({ id, name, age, image, onClose }) => {
  const handleClick = () => {
    onClose(id);
  };

  return (
    <div className="flex gap-8 mt-8 items-center p-4">
      <Avatar avatarImg={image} name={name} />
      <div className="person-info">
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
      <CloseBtn handleClick={handleClick} />
    </div>
  );
};
export default BirthdayItem;
