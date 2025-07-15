import logo from "@assets/login-image.png";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">

        <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
          <div style={{ maxWidth: '500px', width: '80%' }}>
              <img 
                src={logo} 
                alt="Logo" 
                className="img-fluid" 
              />
          </div>
        </div>

        <div 
          className="col-md-6 d-flex justify-content-center align-items-center p-4  "
        >
          <div style={{ width: '100%', maxWidth: '450px' }}>
            <LoginForm />
          </div>
        </div>
        
      </div>
    </div>
  );
};