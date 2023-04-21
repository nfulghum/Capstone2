<img src="RBLogo.png" alt="img" width="200"/>

# Welcome to Resolution Buddy

by Nick Fulghum

[![LinkedIn][linkedin-shield]][linkedin-url]
## Visit the site
https://resolutionbuddy.surge.sh/


## Purpose

This app is meant for the millions of people who set new years resolutions in January every year. By creating an easy source of information to assist in diet and exercise endeavors. With just a few clicks you can build the perfect workout and generate a meal plan based off your specific dietary needs. On top of these features we will be keeping track of your progress! Everyday you complete a workout or follow the diet plan you will get a point towards your streak. Make it into the top 10 for the week and see your name on the leaderboard!

## Installation

To manually install the repo:

#### Clone repo:
```bash
git clone https://github.com/nfulghum/resolution-buddy.git
```
#### Install frontend dependencies:

```bash
cd frontend
npm install
```

#### Move to backend and install dependencies:

```bash
cd .. 
cd backend
npm install
```

## Running the app locally

To run the app on your device please follow the steps below:

#### Starting client side:

```bash
cd frontend
npm start
```

#### Navigate back:

```bash
cd ..
```

#### Starting server side:

```bash
cd backend
nodemon server.js
```

## Built With

* [![React][React.js]][React-url]
* [![Mui][MaterialUI]][MaterialUI-url]
* [![Node][Node.js]][Node-url]
* [![Express][Express]][Express-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL]

## API 

We will be utilizing two APIs paired with our own backend DB to bring this project to life.

[Spoonacular API](https://spoonacular.com/food-api)

[Exercises API](https://api-ninjas.com/api/exercises)


# Design

## ERD

![Alt text](/DBD-RB.png)

## Project Architecture
  
![Alt text](/Resolution-buddy-diagram.jpg)

## Important Features

### Frontend
#### useLocalStorage Hook
Custom React hook that allows you to persist data in the browser's localStorage and synchronize it with a component's state.
```javascript
const useLocalStorage = (key, firstValue = null) => {
    const initialValue = localStorage.getItem(key) || firstValue;
    const [item, setItem] = useState(initialValue);

    useEffect(function setKeyInLocalStorage() {
        if (item === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, item);
        }
    }, [key, item]);

    return [item, setItem];
}
```
To use this component
- Import the hook from your module
    ```javascript
    import useLocalStorage from './useLocalStorage';
    ```
- Call the hook function with the 'key' param and optionally 'firstValue' param if any
  ```javascript
  const [myValue, setMyValue] = useLocalStorage('myKey', 'myDefaultValue');
  ```
#### Protected Routes
Custom compoennt that can be used to protect routes that require authentication.
 ```javascript
    const ProtectedRoute = ({ children }) => {
        const { currentUser } = useContext(UserContext);

        if (!currentUser) {
          return <Navigate to='/login' replace />;
        }

        return children;
    }
```

To use this component 
- Import the component from your module
    ```javascript 
    import ProtectedRoute from './ProtectedRoute';
    ```
- Use the component to wrap the route that require authentication. (notice the unprocted route Home)
  ```javascript
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/edit' element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
    </Routes>
  ```

# Future Updates

#### In order to improve the application the following should be added

* Save meal plans and exercises to user profile.
* Track users progress via streak counter, weight, body fat %.
* Link users Resolution Buddy account to google calendars / email to assist in scheduling, updates, and weekly email motivational messages. 

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nick-fulghum-7835a3234/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Express]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[MaterialUI]: https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[MaterialUI-url]: https://mui.com/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en/