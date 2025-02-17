//for state lifting

const Card = (props) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <input
        type="text"
        className="border-2 border-black rounded-md"
        onChange={(e) => props.setName(e.target.value)}
      />
      <p className="font-bold text-2xl">
        Name state variable ki value inside card: {props.name}
      </p>
    </div>
  );
};

export default Card;
