/*
SITUATION BASED QUESTION

Q.1 
I have 4 products and i am getting the 5 users request at the same time without any delay so 
how can I ensure 4 user will the product and 5 will be get product un available /
how can I ensure which user will get the product and which one will get the product 
unavailable

Q.2 
I have a wallet collection and in this collection I have user_id as foreign key 
and I want the user info and the total amount in the wallet 

Q.3 How can I assign the specific task to a separate thread using cluster. 
for example i want to assign x task to in the one thread and y task to another thread 

Q.4 Database partition vs sharding.
Q.5 Type of http protocol like REST, SOP, GrapghQL or which approach you will use over the Dashboard
Q.6 What are the design pattern ?
Q.7 What is cap therom ?
Q.8 Suppose 1000 of user doing the registration at one time how will you handle that situation.

*/




/*

L-0


L-2


Pattern
Q.7
Q.17
Q.24
Q.16

* */

/*
import {Directive, ElementRef, HostListner} from  '@angular/core';

@Directive({
  selector: ['highlighter']
});

export class HighlightDirective {
  constructor(private el: ElementRef){};

  @HostListner('mouseenter') 
  onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = 'green';
  };

  @HostListner('mouseleave') 
  onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = null;
  }
};
*/



function mergeObjDeeply(obj1, obj2){
  const result = { ...obj1 };

  for(let key in obj2){ 
    if(typeof obj2[key] === 'object' && obj2[key] != null && !Array.isArray(obj2[key])){
      result[key] = mergeObjDeeply(result[key], obj2[key]);
      if(true){
        console.log(result)
      }
    }else{
      result[key] = obj2[key];
    }
  };
  return result;
}

const obj1 = {
  name: "John",
  address: {
    city: "Delhi",
    pin: { code: 110001 }
  }
};

const obj2 = {
  age: 25,
  address: {
    pin: { zone: "North" }
  }
};

/*
First Call: -
result:- {
  name: "John",
  address: {
    city: "Delhi",
    pin: { code: 110001 }
  },
  age: 25
};

Second Call :- 
result: - {city: "Delhi", pin: { code: 110001 }}
Passed Parameter {city: "Delhi", pin: { code: 110001 }}, {pin: { zone: "North" }}

Third Call: - 
result: - { code: 110001 }
Passed Parameter { code: 110001 }, { zone: "North" }

After that loop will start again and you will get the key => "zone"
and result become like { code: 110001, zone: "North" }


 */

console.log(mergeObjDeeply(obj1, obj2));






















/*
CREATE PROCEDURE insert_employee(emp_name TEXT, department TEXT, emp_salary NUMERIC)
LANGUAGE plpgsql
AS $BODY$
BEGIN
    INSERT INTO employees (name, department, salary) VALUES (emp_name, department, emp_salary);
END;
$BODY$;


CALL insert_employee('Greet', 'Mac', 50010);


****************************************************************************************************

CREATE FUNCTION get_employee_salary(emp_id INT) 
RETURNS NUMERIC 
LANGUAGE plpgsql 
AS $$ 
DECLARE 
    emp_salary NUMERIC;
BEGIN 
    SELECT salary INTO emp_salary FROM employees WHERE id = emp_id;
    RETURN emp_salary;
END; 
$$;


SELECT get_employee_salary(1);



CREATE FUNCTION get_employees_by_department(dept VARCHAR) 
RETURNS TABLE(id INT, name VARCHAR(100), salary NUMERIC) 
LANGUAGE plpgsql 
AS $$ 
BEGIN 
    RETURN QUERY  
    SELECT employees.id, employees.name, employees.salary 
    FROM employees 
    WHERE employees.department = dept;
END; 
$$;

SELECT * FROM get_employees_by_department('HR');



*/

// console.log("Start");

// setImmediate(() => console.log("setImmediate"));
// setTimeout(() => console.log("setTimeout"), 0);
// process.nextTick(() => console.log("process.nextTick"));

// console.log("End");
// for(let i = 0; i<10000000; i++){}














// HOC Version
function withUserData(WrappedComponent) {
  return function Enhanced(props) {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      fetch("/api/user")
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);

    return <WrappedComponent {...props} user={user} />;
  };
}

// Custom Hook Version
function useUserData() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return user;
}

// Usage
function Profile() {
  const user = useUserData();
  return <div>{user?.name}</div>;
}



// HOC Version
function withAuth(WrappedComponent) {
  return function Enhanced(props) {
    const isLoggedIn = localStorage.getItem("token") !== null;
    if (!isLoggedIn) return <div>Please log in</div>;
    return <WrappedComponent {...props} />;
  };
}


// Custom Hook Version
function useAuth() {
  return localStorage.getItem("token") !== null;
}

function Dashboard() {
  const isLoggedIn = useAuth();
  if (!isLoggedIn) return <div>Please log in</div>;
  return <h1>Welcome to Dashboard</h1>;
}








const withExtraProps = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return <WrappedComponent {...props} extra="Hello" />;
  };
};


function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
}

function Hello({ name }) {
  return <h1>Hello, {name}</h1>;
}

const HelloWithLogger = withLogger(Hello);

// Usage
<HelloWithLogger name="Amit" />;







function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

function withAuth(Component) {
  return function AuthComponent(props) {
    const isLoggedIn = true; // Example

    if (!isLoggedIn) {
      return <h2>Please Login</h2>;
    }

    return <Component {...props} />;
  };
}

withAuth(Dashboard);

return <Component {...props} />;
// is actually:
return <Dashboard {...props} />;

// Wrap the component
const ProtectedDashboard = withAuth(Dashboard);
const ProtectedProfile = withAuth(Profile);

function App() {
  return (
    <>
      <ProtectedDashboard />
      <ProtectedProfile />
    </>
  );
}



import { useState } from "react";

function useAuth() {
  const [isLoggedIn] = useState(true);

  return {
    isLoggedIn
  };
}

function Dashboard() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <h2>Please Login</h2>;
  }

  return <h2>Welcome to Dashboard</h2>;
}





// DataProvider component
function DataProvider({ render }) { 
  const [data, setData] = React.useState("Hello from DataProvider");

  return (
    <div>
      {render(data)}  {/* Call the render function with data */}
    </div>
  );
}

// Usage
function App() {
  return (
    <DataProvider render={(data) => <h1>{data}</h1>} />
  );
}

// Create a component called User.
function User({ render }) {
  const user = {
    name: "Amit",
    age: 30
  };

  return render(user);
}

function App() {
  return (
    <User
      render={(user) => (
        <h2>
          Name: {user.name}, Age: {user.age}
        </h2>
      )}
    />
  );
}

/*
You want to reuse the logic, but different components want different UI.
Render Props lets you separate:

Logic
  +
UI

The component provides the logic, while the parent decides the UI.

Is Render Props still commonly used?

This is important for you because you're preparing for interviews.

Render Props is an older React pattern.

Today, many of the problems that Render Props solved are usually handled with custom Hooks.

For example, instead of:

<MouseTracker
  render={(position) => (
    <h2>{position.x}</h2>
  )}
/>

we can create:

function useMousePosition() {
  // mouse tracking logic
}

and then:

function App() {
  const position = useMousePosition();

  return <h2>{position.x}</h2>;
}

This is generally easier to understand in modern React.


Single source of truth:-

Single Source of Truth (SSOT) means that all important data is stored and managed in one central place, and every part of the application relies on that source rather than duplicating or scattering state.

State lives in one place → Usually in a parent component or a global store (like Redux, Zustand, or Context API).

UI reflects that state → Components don’t keep their own copies of the same data; they read from the single source.

Consistency → If the data changes in the source, every component using it automatically updates.


Why we are using the key while using the loop ?:- 
We use the key prop in React lists to help React efficiently identify which items have changed, been added, or removed when rendering a list.

Uniquely identifies each element in a list.

Helps React’s diffing algorithm (called reconciliation) know which items are stable and which need updating.

Prevents issues like incorrect reordering, duplicated DOM nodes, or lost input focus.
*/