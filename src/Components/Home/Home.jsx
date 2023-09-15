import { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';
import Card from '../Card/Card';


const Home = () => {
     
    const [allCourses, setAllCourses] = useState([]);
    const [] = useState();

    useEffect(() => {
        fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setAllCourses(data));
    }, []);


    return (
        <div>
            <div className='container'>
              <div className="home-container">
              <div className='card-container'>
                    {
                        allCourses.map((course) => (<div key={course.id} className='card'>
                        <div className='main-part'>
                        <div className='card-img'>
                             <img src={course.image} alt="" />
                         </div>
                         <h3 className='name'>{course.name}</h3>
                         <p>{course.article}</p>
                         <div className="info">
                             <h4>Price: {course.price}</h4>
                             <h4>Credit: {course.hours}hrs</h4>
                         </div>
                         <button onClick={() => handleSelect(course)} className='btn'>Select</button>
                        </div>
                     </div>))
                    }
            
                </div>
               <div>
               <div className='credit'>
                    <Card></Card>
                </div>
               </div>
              </div>
            </div>
        </div>
    );
};

export default Home;