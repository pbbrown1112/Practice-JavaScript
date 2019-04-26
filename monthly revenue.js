// There is an array that consists of multiple objects.
// Each object has a name, rate, and hours. Within hours there is a nested array with two objects: {numhrs: x , billable:true} , {numhrs: billable:false}
// Calculate the monthly revenue of all employees

var dovetailPersonnel = [
                            {   firstName: "Hunter",
                                lastName: "Wright",
                                rate: 85,
                                hours: [
                                        {numhrs: 30, billable: true},
                                        {numhrs: 20, billable: false}
                                        ]
                            },
                            {   firstName: "James",
                                lastName: "Fason",
                                rate: 225,
                                hours: [
                                        {numhrs: 10, billable: true},
                                        {numhrs: 100, billable: false}
                                        ]
                            },
                            {   firstName: "Brendan",
                                lastName: "Brown",
                                rate: 7000,
                                hours: [
                                        {numhrs: 30, billable: true},
                                        {numhrs: 15, billable: false}
                                        ]
                            }
                        ];

function monthlyRevenue() {
var mnthlyRev = 0;

    for (var i = 0; i < dovetailPersonnel.length; i++) {
        var person = dovetailPersonnel[i];
        for (var j = 0; j < person.hours.length; j++) {
            if (person.hours[j].billable === true) {
                mnthlyRev += (person.rate * person.hours[j].numhrs);
            }
        }
    }
return mnthlyRev;
}

monthlyRevenue()

function makeString() {
var dovetailString = '';
    for (var i = 0; i < dovetailPersonnel.length; i++) {
        var person = dovetailPersonnel[i];
        for (j=0; j < person.hours.length; j++) {
            dovetailString += person.firstName +' , '+ person.lastName  +' , '+ person.rate +' , '+ person.hours[j].numhrs +' , '+ person.hours[j].billable+'\n';
        }
    }
return dovetailString;
}

makeString();
