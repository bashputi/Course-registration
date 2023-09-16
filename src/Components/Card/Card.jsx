import "./Card.css"

const Card = ({ selectedCourse, remainingHours, totalHours, totalCost}) => {
    return (
        <div>
            <h3 className="credit-hours">Credit Hour Remaining: {remainingHours} hrs</h3>
                    <hr />
                    <h3>Course Name</h3>
                    {
                        selectedCourse.map((course) => (
                            <li key={AbortController.id} className="names">{course.name}</li>
                        ))
                    }
                    <hr />
                    <h5 className="total">Total Credit Hour: {totalHours} hrs</h5>
                    <hr />
                    <h5 className="total">Total Price: {totalCost} USD</h5>
                   
                  
        </div>
    );
};

export default Card;