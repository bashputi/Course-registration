import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='card-container'>
                    <div className='card'>
                       <div className='main-part'>
                       <div className='card-img'>
                            <img src="https://i.ibb.co/12yvRR7/Rectangle-3.png" alt="" />
                        </div>
                        <h3 className='name'>introdution</h3>
                        <p>hhhhhhhhh</p>
                        <div className="info">
                            <h2>Price</h2>
                            <h2>Credit</h2>
                        </div>
                        <button className='btn'>Select</button>
                       </div>
                    </div>
            
                </div>
                <div className='credit'>
                    <h3>Credit Hour Remaining</h3>
                    <hr />
                    <h3>Course Name</h3>
                    <hr />
                    <h5>Total Credit Hour</h5>
                    <hr />
                    <h5>Total Price</h5>
                </div>
            </div>
        </div>
    );
};

export default Home;