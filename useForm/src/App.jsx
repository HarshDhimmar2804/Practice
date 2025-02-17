import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [toggle, setToggle] = useState(true);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data);
  };

  const handleClick = () => {
    if (toggle) {
      setCount1(count1 + 1);
    } else {
      setCount2(count2 + 1);
    }
    setToggle(!toggle);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor=""> First Name: </label>
          <input
            className={errors.firstName ? "input-error" : ""}
            type="text"
            {...register("firstName", {
              required: true,
              minLength: { value: 3, message: "min. length atleast 3" },
              maxLength: { value: 6, message: "max. length atmost 6" },
            })}
          />
          {errors.firstName && (
            <p className="error-msg">{errors.firstName.message}</p>
          )}
        </div>
        <br />
        <div>
          <label htmlFor=""> Middle Name: </label>
          <input
            className={errors.firstName ? "input-error" : ""}
            type="text"
            {...register("middleName")}
          />
        </div>
        <br />
        <div>
          <label htmlFor=""> Last Name: </label>
          <input
            className={errors.firstName ? "input-error" : ""}
            type="text"
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last name is not as per rule",
              },
            })}
          />
          {errors.lastName && (
            <p className="error-msg">{errors.lastName.message}</p>
          )}
        </div>
        <br />
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"}
        />
      </form>
      <div>
        <p>{count1}</p>
        <p>{count2}</p>
        <button onClick={handleClick}>Click me!</button>
      </div>
    </div>
  );
}

export default App;
