interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Classic function syntax as expected by ALX
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;
  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}
