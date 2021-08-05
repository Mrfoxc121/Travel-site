 import '../styles/styles.css'
 import Person from './modules/Person'

 if (module.hot) {
     module.hot.accept()
 }

 //  lesson example code below this line

 class Adult extends Person {
     payTaxes() {
         console.log(`${this.name} now owes zero taxes.`)
     }
 }

 let John = new Person('John Doe', 'red');
 John.greet();
 let Jane = new Adult('Jane Smith', 'yellow');
 Jane.greet();
 Jane.payTaxes();