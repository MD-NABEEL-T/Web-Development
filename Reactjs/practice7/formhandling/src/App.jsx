import './App.css'
import { useForm } from "react-hook-form"
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm()

const onSubmit = async (data) => {
  console.log("Submitting form with data:", data);
  let r = await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let res = await r.text();
  console.log(res);
};

  console.log(watch("username"))

  return (
    <>
    {isSubmitting && <p>Submitting...</p>}
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username",{required: true})}
          type="text"
          placeholder="Enter your name"
        />
       <br/>
        <input
          {...register("password",{required: true,minLength:{value:5,message:"Password must be at least 5 characters long"}})}
          type="password"
          placeholder="Enter your password"
        />

      <br/>
        <input disabled={isSubmitting} type="submit" value="Submit" />
        <div className="error">
          {errors.username && <p>{errors.username.message || "Username is required"}</p>}
          {errors.password && <p>{errors.password.message || "Password is required"}</p>}
        </div>
      </form>
    </div>
    </>
  )
}

export default App