import "./Card.css"

const Card = ({ selectedCourse, remainingHours, totalHours, totalCost}) => {
    return (
        <div>
            <h3>Credit Hour Remaining: {remainingHours} hrs</h3>
                    <hr />
                    <h3>Course Name</h3>
                    {
                        selectedCourse.map((course) => (
                            <li key={AbortController.id}>{course.name}</li>
                        ))
                    }
                    <hr />
                    <h5>Total Credit Hour: {totalHours}</h5>
                    <hr />
                    <h5>Total Price: {totalCost}</h5>
                   
                  
        </div>
    );
};

export default Card;