function WorkTogheter(){
    return (
        <section id="contact" className="work_togheter">
            <h2>Let's work togheter!</h2>
            <div>
                <button className="button_contact">Contact me</button>
            </div>
            <h3>Ask me a question!</h3>
            <div className="contact_box">
                <div className="field">
                <label>first name</label>
                <input />
                </div>
                <div className="field">
                    <label>last name</label>
                    <input />
                </div>
                <div className="field">
                    <label>subjects</label>
                    <input />
                </div>
                <p>your message</p>
                <button className="button_send">send</button>
            </div>
         </section>
     
    )
}

export default WorkTogheter