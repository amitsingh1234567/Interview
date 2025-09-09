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