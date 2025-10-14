import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card>
                <h2 className="text-3-xl font-bold text-center text-blue-600 mb-6">
                    Login
                </h2>
                <div className="space-y-4">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </div>

                <div className="mt-6">
                    <Button text="LOGIN" />
                </div>
            </Card>
        </div>
    )
}

export default Login;