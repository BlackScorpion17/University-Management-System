#! /usr/bin/env node
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerCources(course) {
        this.courses.push(course);
    }
}
;
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCources(course) {
        this.courses.push(course);
    }
}
;
class Course {
    id;
    name;
    students = [];
    instructors = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
    }
    setInstructor(instructor) {
        this.instructors.push(instructor);
    }
}
;
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
;
const std1 = new Student("Laiba", 20, "6001");
const std2 = new Student("Malaika", 17, "6002");
const std3 = new Student("Mariam", 15, "6003");
const std4 = new Student("Sijawal", 11, "6004");
const instructor1 = new Instructor("Yusra", 28, 50000);
const instructor2 = new Instructor("Simran", 30, 50000);
const course1 = new Course(1, "TypeScript");
const course2 = new Course(2, "Python");
course1.addStudent(std1);
course1.addStudent(std2);
course1.addStudent(std3);
course1.addStudent(std4);
course2.addStudent(std1);
course2.addStudent(std3);
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
console.log(course1.instructors);
const d1 = new Department("Computer Science");
d1.addCourse(course1);
console.log(d1.courses[0]);
export {};
