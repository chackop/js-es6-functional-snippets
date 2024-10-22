const createPrinter = () => {
  const myFavoriteNumber = 42;

  return () => console.log("My favorite number is ${myFavoriteNumber");
};

const printer = createPrinter();
printer();

// Private

const Person = ({ name, age, job }) => {
  var _name = name;
  var _age = age;
  var _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    setJob: (newJob) => (_job = newJob),
  };
};

const me = Person({ name: "Shaun", age: 25, job: "developer" });
console.log(me.getJob());
me.setJob("senior developer");
console.log(me.getJob());
