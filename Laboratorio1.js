/**          LABORATORIO I
 * 
 * Prepare un sistema simple para almacenar información sobre
 * estudiantes y profesores y combinarlos para la tutoría
 * 
 * Para iniciar este laboratorio crea una clase User, la cuál creará objetos tanto para
 * profesores como para estudiantes.
 * El constructor debe tomar los datos del usuario (name, surname, email, role), pero
 * asegúrate de crear las propiedades adecuadas.
 * 
 * También deberás crear los siguientes métodos:
 * 
 *   + addCourse(course, level) - que le permitirá agregar un curso (por ejemplo, matemáticas)
 *     y un nivel (por ejemplo, 2: cuanto mayor sea el número, mayor será el nivel); en el
 *     caso de un estudiante, significará que está buscando ayuda en este nivel, y en el
 *     caso de un profesor, significará que puede ayudar hasta este nivel.
 * 
 *   + removeCourse(course) - que le permitirá eliminar el curso (por ejemplo, si el estudiante
 *     ya no está interesado en aprender matemáticas)
 * 
 *  + editCourse(course, level) - que le permitirá cambiar el nivel asociado al curso;
 * 
 *  + sendMessage(from, message) - que le permitirá enviar un 'message' mensaje del usuario
 *    'from' al usuario descrito en el objeto; la información completa sobre el mensaje
 *    enviado debe almacenarse en el caché local (sugerencia: use una matriz para esto);
 *    el envío del mensaje en sí solo se simulará, declare la función sendEmail(from, to, message) {}
 *    de antemano y úsela en el lugar apropiado.
 * 
 *  + showMessagesHistory() - qué mostrará el historial de todos los mensajes enviados al
 *                            usiario en la consola.
 */
class User {
    constructor({ name, surname, email, role }) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messages = [];
    }

    addCourse(course, level) {
        this.courses.push({ course, level });
    }

    removeCourse(course) {
        this.courses = this.courses.filter(c => c.course !== course);
    }

    editCourse(course, newLevel) {
        const courseIndex = this.courses.findIndex(c => c.course === course);
        if (courseIndex !== -1) {
            this.courses[courseIndex].level = newLevel;
        }
    }

    sendMessage(to, message) {
        this.messages.push({ from: this.email, to: to.email, message });
        sendEmail(this.email, to.email, message); // Simulación de envío
    }

    showMessagesHistory() {
        this.messages.forEach(msg => {
            console.log(`${msg.to} -> ${msg.from} : ${msg.message}`);
        });
    }
}

// Simulación de envío de email (a implementar según necesidades)
function sendEmail(from, to, message) {
    console.log(`Sending email from ${from} to ${to}: ${message}`);
} 


/* Prueba la solución utilizando el siguiente código   
 */
let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);
console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
teacher1.showMessagesHistory();
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: test message
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: another message