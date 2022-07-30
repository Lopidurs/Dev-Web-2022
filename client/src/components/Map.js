function Map (){
    return(
        <div className={"map"}>
            <h2>Où me retrouver.</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.46893147435!2d4.560895415904723!3d50.65555338044561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3d5eda596fe25%3A0x43ace57393236b45!2sAv.%20Provinciale%20110%2C%201341%20Ottignies-Louvain-la-Neuve!5e0!3m2!1sfr!2sbe!4v1659019882860!5m2!1sfr!2sbe"
                width="100%" height="450px" style={{ border : 0}} allowFullScreen="" loading={"lazy"}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map