import { GoogleLogin } from "@react-oauth/google";
import { useCallback, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigation = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userString = window.localStorage.getItem("user");
      if (userString) {
        navigation("/assistants");
      }
    }
  }, []);

  const handleSuccess = useCallback((e) => {
    const decoded = jwtDecode(e.credential);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("user", JSON.stringify(decoded));
    }

    navigation("/assistants");
  }, []);

  const handleError = useCallback((e) => {
    console.log(e);
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Login to Continue
            </h3>
          </div>
          <button
            type="button"
            className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            {/* <img src="/google.png" alt="Google logo" className="mr-2 w-5 h-5" />
            Sign in with Google */}
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            By signing in, you agree to our{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
