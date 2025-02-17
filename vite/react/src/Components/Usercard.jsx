//for props

const Usercard = (props) => {
  return (
    <div className="flex flex-col m-auto max-w-72 border my-10 p-5 border-black rounded-lg hover:border-2 transition-all">
      <p className="font-bold">Name: {props.name}</p>
      <p className="font-bold">Description: {props.desc}</p>
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s"
        }
        alt=""
        className="size-16 object-cover"
      />
      <hr />
    </div>
  );
};

export default Usercard;
