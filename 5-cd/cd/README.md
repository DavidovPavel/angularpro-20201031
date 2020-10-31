# IMMUTABLE OBJECTCTS


let person = {
    name: John
};

person.name = 'Alice'


person2 = person.set('name', 'Alice')



<hello [person]="person">
isEqual(person, person)


<hello [person]="person2">
person ?== person2