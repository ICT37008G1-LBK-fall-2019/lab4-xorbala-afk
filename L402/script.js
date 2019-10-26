var c=0;
var nn = 'ddd';
var students =[
     { id: 1, name: 'ddd' },
     { id: 2, name: 'sss' },
     { id: 3, name: 'dgg' },
     { id: 4, name: 'ddd' },
     { id: 5, name: 'ddd' },
];
function datvla (list,nn){
    for (let index = 0; index < list.length; index++) {
        if (list[index].name==nn) c++;
    } return c;
}
console.log(datvla(students,nn));
