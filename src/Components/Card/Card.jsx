import "./Card.css"

const Card = ({ selectCourse, remaining, totalHours, totalCost}) => {
    return (
        <div>
            <h3>Credit Hour Remaining</h3>
                    <hr />
                    <h3>Course Name</h3>
                    <hr />
                    <h5>Total Credit Hour</h5>
                    <hr />
                    <h5>Total Price</h5>
        </div>
    );
};

export default Card;