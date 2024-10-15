const Avatar = ({ avatarImg, name }) => {
  return (
    <div className="avatar">
      <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
        <img src={avatarImg} alt={`${name}'s avatar`} />
      </div>
    </div>
  );
};
export default Avatar;
