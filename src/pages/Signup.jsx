import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {

    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [showPassword, setShowPassword] = useState(false)

    function handleUInput(evt) {
        setEusername(evt.target.value)
    }

    function handlePInput(evt) {
        setEpassword(evt.target.value)
    }

    function addUser() {
        const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!usernameRegex.test(eusername)) {
            alert("Username must be 3-15 characters long and contain only letters and numbers.");
            return;
        }

        if (!passwordRegex.test(epassword)) {
            alert("Password must be at least 8 characters long and contain at least one letter and one number.");
            return;
        }
        setusers([...users, { username: eusername, password: epassword }])
        navigate("/")
    }


    return (
        <div className="bg-slate-800 p-10">
            <div className="bg-gray-100 p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username"
                        onChange={handleUInput} />

                    <div className="relative w-52">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full border-black p-1 pr-8 bg-transparent border rounded-md"
                            placeholder="Password"
                            onChange={handlePInput}
                            autoComplete="new-password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm cursor-pointer"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    <div className="relative w-52 mt-2">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full border-black p-1 pr-8 bg-transparent border rounded-md"
                            placeholder="Confirm Password"
                            onChange={handleCPInput}
                            autoComplete="new-password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm cursor-pointer"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>
                        Sign Up
                    </button>

                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link>  </p>
                </div>
            </div>
        </div>)
}

export default Signup