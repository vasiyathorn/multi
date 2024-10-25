import './Home.css'
function Home() {
    return ( 
        <div className='home-container'>
            
            <div className='home-title-container'>
                <h5 >นางสาว วาศิยาธร กางกั้น 
                <br></br>Student number :66079501
                <br /> Bacholor of Software Engineering 
                <br />Sripatum University</h5>
            </div>

            <div className='home-word-container'>
                <p>
                    This paragraph
                    contains a lot of lines
                    in the source code,
                    but the browser
                    ignores it.
                </p>

                <p>
                    This paragraph
                    contains         a lot of spaces
                    in the source         code,
                    but the        browser
                    ignores it.
                </p>
            </div>
        </div>
     )
}

export default Home
