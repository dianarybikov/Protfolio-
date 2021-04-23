
import './style.css'
const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hey, I'm Diana!</p>
                    <p>A software Developer</p>
                    
                </h1>
                
            </div>
            <div className="person">
                <img 
                src={`${process.env.PUBLIC_URL}/home-page.jpg`}
                alt='person'
                />

            </div>
        </div>
    )
}

export default Home
