import React from 'react'

function EventList({ events }) {
    if(events && events.length) {
        return <p>No event was found</p>
    }
  return (
    <>
        <main className="container flex-center">
            <section className="form-wrapper" style={{ boxShadow: 'none' }}>
                <form onSubmit={() => {}}>
                    <div className="form-control">
                        <input className="input-control" type="search" id="search" name="search" placeholder="Search by topic" />
                    </div>
                </form>
            </section>
        <section>
            <p>List of event showing soon</p>
        </section>
        </main>
    </>
  )
}

export default EventList