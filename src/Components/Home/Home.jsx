import { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';
import Card from '../Card/Card';


const Home = () => {
     
    const [allCourses, setAllCourses] = useState([]);

    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remainingHours, setRemainingHours] = useState(20);
    const [totalHours, setTotalHours] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setAllCourses(data));
    }, []);

    const handleSelectedCourse = (course) => {
        const isExist = selectedCourse.find(item => item.id == course.id)
        let count = course.hours;
        if(isExist){
            return alert('Already added');
        }else{
            selectedCourse.forEach((item) => {
                count += item.hours;
            });
            
            let money = course.price;
            selectedCourse.forEach((item) => {
                money += item.price;
            });

            const totalRemainingHours = 20 - count;
            if(count > 20){
                return alert('No Remaining Hours Left!!');
            }else{
                setSelectedCourse([...selectedCourse, course]);
                setRemainingHours(totalRemainingHours);
                setTotalHours(count);
                setTotalCost(money)
            }

            
        }
    }




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
                         <button onClick={() => handleSelectedCourse(course)} className='btn'>Select</button>
                        </div>
                     </div>))
                    }
            
                </div>
               <div>
               <div className='credit'>
                <Card selectedCourse={selectedCourse} remainingHours={remainingHours} totalHours={totalHours} totalCost={totalCost}></Card>
                </div>
               </div>
              </div>
            </div>
        </div>
    );
};

export default Home;