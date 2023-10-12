class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    present() {
        const index = this.attendance.findIndex(value => value === null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log('Не можна відвідати більше 25 заннять');
        }
    }

    absent() {
        const index = this.attendance.findIndex(value => value === null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log('Не можна пропустити більше 25 заннять');
        }
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    summary() {
        const averageGrade = this.calculateAverageGrade();
        const attendanceRate = this.attendance.filter(value => value === true).length / 25;

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Сергій", "Волков", 2005);
const student2 = new Student("Аліна", "Костенко", 2006);

student1.addGrade(99);
student1.addGrade(89);
student1.addGrade(94);

student2.addGrade(70);
student2.addGrade(81);
student2.addGrade(72);

student1.present();
student1.present();
student1.absent();

console.log(`${student1.firstName} ${student1.lastName}, вік: ${student1.getAge()} років`);
console.log(`Середня оцінка: ${student1.calculateAverageGrade()}`);
console.log(`Відвідуваність: ${student1.attendance.filter(value => value === true).length}/25`);
console.log(student1.summary());

console.log(`${student2.firstName} ${student2.lastName}, вік: ${student2.getAge()} років`);
console.log(`Середня оцінка: ${student2.calculateAverageGrade()}`);
console.log(`Відвідуваність: ${student2.attendance.filter(value => value === true).length}/25`);
console.log(student2.summary());
