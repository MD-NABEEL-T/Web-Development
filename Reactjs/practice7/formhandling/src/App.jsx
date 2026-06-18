import './App.css'
import { useForm } from "react-hook-form"
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {console.log(data)}

  console.log(watch("username"))

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username",{required: true})}
          type="text"
          placeholder="Enter your name"
        />

        <input
          {...register("password",{required: true,minLength:5})}
          type="password"
          placeholder="Enter your password"
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App