'use strict';

//#region Object
let create_course = course => {
    let default_course = { course_name: "ES6", course_duration: "3days", course_owner: "JavaScript" };
    if(Object.keys(course).length>0 && !Object.keys(course).every(key => Object.keys(default_course).includes(key))) throw new Error("Passed object has one or more wrong properties");
    return Object.assign({}, default_course, course)
};
let object_handle = () => {
    console.log("{}", "return defaults");
    console.log(create_course({}));
    console.log('{course_name:"ay7aga"}');
    console.log(create_course({course_name:"ay7aga"}));
    console.log('{course_name:"ay7aga", course_duration:"4days"}');
    console.log(create_course({course_name:"ay7aga", course_duration:"4days"}));
    console.log('{course_name:"ay7aga", course_duration:"4days", course_owner: "CSS"}');
    console.log(create_course({course_name:"ay7aga", course_duration:"4days", course_owner: "CSS"}));
    console.log('{course_name:"ay7aga", course_duration:"4days", ay_key: "CSS"}', 'throws an error');
    console.log(create_course({course_name:"ay7aga", course_duration:"4days", ay_key: "CSS"}));
};
if(document.getElementById('object')) object.addEventListener("click", object_handle);
//#endregion

//#region Iterator
let iterable_user = {
    name: "Ahmed",
    educational_degree: "Bechalor",
    job_title: "Software Developer",
    [Symbol.iterator]: () => {
        let keys = Object.keys(iterable_user);
        let key_index = 0;
        return {
            next: () => (key_index==keys.length) ? {entry:undefined, done:true} : {entry:{property:keys[key_index], value:iterable_user[keys[key_index++]]}, done:false}
        };
    }
};
let user_iterator = iterable_user[Symbol.iterator]();
let iterator_handle = () => {
    console.log(user_iterator.next());
};
if(document.getElementById('iterator')) iterator.addEventListener("click", iterator_handle);
//#endregion

document.addEventListener("DOMContentLoaded", function(event){
});