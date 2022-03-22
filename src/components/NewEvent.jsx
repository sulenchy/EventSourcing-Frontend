import React from 'react';

function NewEvent() {
  return (
    <>
        <section className="container flex-center">
            <header><h2>Add New</h2></header>
            <main className="form-wrapper">
                <form onSubmit={() => {}}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input className="input-control" type="email" id="email" name="email"></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input className="input-control" type="password" id="password" name="password"></input>
                    </div>
                    <div className="form-control">
                        <button  className="input-control" style={{ cursor: "pointer", marginTop: "5px"}} type="submit">Submit</button>
                    </div>
                </form>
            </main>
        </section>
    </>
  )
}

export default NewEvent
