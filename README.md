## Add at least 3 Project features

 - By clicking any "Select" button user can get the name of that particular course.
 - If user click twice any button, it will show a toast.
 - User can get total duration of selected course.

## Discuss how you managed the state in your assignment project.

I have used 5 'useState' hook to declare various pieces of state:

- 'allCourses' & 'selectedCourse' holds an empty array of courses, other hook's holds provided value.

- 'setAllCourses' , 'setSelectedCourse' etc are functions that allow to update state value like 'allCourses' , 'selectedCourse' etc.

- These state variables and updater function are then used throughout the component to manage and update the state as needed based on the component's logic and user interactions.