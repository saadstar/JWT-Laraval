import React, { useState } from "react";
import {AuthUser} from "./AuthUser";

export const LogIn = () => {
  const { http,setToken } = AuthUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // api call 
    http.post('/login', { email: email, password: password }).then((res) => {
      setToken(res.data.user, res.data.access_token);
    });

  };

  return (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
        <div className="card p-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email adress:</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="@gmail.com"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="pwd">Password:</label>
              <input
                id="pwd"
                type="password"
                className="form-control"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
          </form>
          <button type="button" className="btn btn-primary mt-4">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
