import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <Card>
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Register
        </h2>

        <div className="space-y-4">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>

        <div className="mt-6 space-y-3">
          <Button text="Register" />
          <Button text="Have an account? Sign In" variant="secondary" />
        </div>
      </Card>
    </div>
  );
};

export default Register;
