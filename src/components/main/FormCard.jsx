import JoinUs from '../../assets/img/Join Us.png'


export function FormCard(){
    return ( 
        <div className="fiveCard" >
            <img src={JoinUs} alt="backgroun" className='JoinUsBackground'/>
            <div className="formFiveCard">
                <h1 className='title'>JOIN US</h1>
                <h1 className='description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</h1>
                <div className='formRow' >
                    <input type="text" className="inputFormBasic first" placeholder="Name"  />
                    <input type="text" className="inputFormBasic second" placeholder="Username" />
                </div>
                <div className='formRow'>
                    <input type="text" className="inputFormBasic first" placeholder="Phone" />
                    <input type="text" className="inputFormBasic second" placeholder="Email" />
                </div>
                <input type="text" className="inputFormBasic" placeholder="Departamen" />
                <textarea className="inputFormBasic" placeholder="Mensajse"  ></textarea>
                <button className="btnStandar" >I’M IN</button>
                <p className='formfooter'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                </p>
            </div>
        </div>
     )
}