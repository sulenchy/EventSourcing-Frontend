import React from 'react';
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
        <section className="container flex-center">
            <header><h2>Register</h2></header>
            <main className="form-wrapper">
                <form onSubmit={() => {}}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input className="input-control" type="email" id="email" name="email"></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="first_name">First Name</label>
                        <input className="input-control" type="text" id="first_name" name="first_name"></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="last_name">Last Name</label>
                        <input className="input-control" type="text" id="last_name" name="last_name"></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input className="input-control" type="password" id="password" name="password"></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="retype_password">Retype Password</label>
                        <input className="input-control" type="password" id="retype_password" name="retype_password"></input>
                    </div>
                    <div className="form-control">
                        <button  className="input-control" style={{ cursor: "pointer", marginTop: "5px"}} type="submit">Submit</button>
                    </div>
                </form>
            </main>
            <footer><p>Are you an existing user? <Link to="/login">Login</Link></p></footer>
        </section>
    </>
  )
}

export default Register