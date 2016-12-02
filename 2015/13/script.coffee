happinessString = "Alice would lose 57 happiness units by sitting next to Bob.
Alice would lose 62 happiness units by sitting next to Carol.
Alice would lose 75 happiness units by sitting next to David.
Alice would gain 71 happiness units by sitting next to Eric.
Alice would lose 22 happiness units by sitting next to Frank.
Alice would lose 23 happiness units by sitting next to George.
Alice would lose 76 happiness units by sitting next to Mallory.
Alice would gain 0 happiness units by sitting next to Valerie.
Bob would lose 14 happiness units by sitting next to Alice.
Bob would gain 48 happiness units by sitting next to Carol.
Bob would gain 89 happiness units by sitting next to David.
Bob would gain 86 happiness units by sitting next to Eric.
Bob would lose 2 happiness units by sitting next to Frank.
Bob would gain 27 happiness units by sitting next to George.
Bob would gain 19 happiness units by sitting next to Mallory.
Bob would gain 0 happiness units by sitting next to Valerie.
Carol would gain 37 happiness units by sitting next to Alice.
Carol would gain 45 happiness units by sitting next to Bob.
Carol would gain 24 happiness units by sitting next to David.
Carol would gain 5 happiness units by sitting next to Eric.
Carol would lose 68 happiness units by sitting next to Frank.
Carol would lose 25 happiness units by sitting next to George.
Carol would gain 30 happiness units by sitting next to Mallory.
Carol would gain 0 happiness units by sitting next to Valerie.
David would lose 51 happiness units by sitting next to Alice.
David would gain 34 happiness units by sitting next to Bob.
David would gain 99 happiness units by sitting next to Carol.
David would gain 91 happiness units by sitting next to Eric.
David would lose 38 happiness units by sitting next to Frank.
David would gain 60 happiness units by sitting next to George.
David would lose 63 happiness units by sitting next to Mallory.
David would gain 0 happiness units by sitting next to Valerie.
Eric would gain 23 happiness units by sitting next to Alice.
Eric would lose 69 happiness units by sitting next to Bob.
Eric would lose 33 happiness units by sitting next to Carol.
Eric would lose 47 happiness units by sitting next to David.
Eric would gain 75 happiness units by sitting next to Frank.
Eric would gain 82 happiness units by sitting next to George.
Eric would gain 13 happiness units by sitting next to Mallory.
Eric would gain 0 happiness units by sitting next to Valerie.
Frank would gain 77 happiness units by sitting next to Alice.
Frank would gain 27 happiness units by sitting next to Bob.
Frank would lose 87 happiness units by sitting next to Carol.
Frank would gain 74 happiness units by sitting next to David.
Frank would lose 41 happiness units by sitting next to Eric.
Frank would lose 99 happiness units by sitting next to George.
Frank would gain 26 happiness units by sitting next to Mallory.
Frank would gain 0 happiness units by sitting next to Valerie.
George would lose 63 happiness units by sitting next to Alice.
George would lose 51 happiness units by sitting next to Bob.
George would lose 60 happiness units by sitting next to Carol.
George would gain 30 happiness units by sitting next to David.
George would lose 100 happiness units by sitting next to Eric.
George would lose 63 happiness units by sitting next to Frank.
George would gain 57 happiness units by sitting next to Mallory.
George would gain 0 happiness units by sitting next to Valerie.
Mallory would lose 71 happiness units by sitting next to Alice.
Mallory would lose 28 happiness units by sitting next to Bob.
Mallory would lose 10 happiness units by sitting next to Carol.
Mallory would gain 44 happiness units by sitting next to David.
Mallory would gain 22 happiness units by sitting next to Eric.
Mallory would gain 79 happiness units by sitting next to Frank.
Mallory would lose 16 happiness units by sitting next to George.
Mallory would gain 0 happiness units by sitting next to Valerie.
Valerie would gain 0 happiness units by sitting next to Alice.
Valerie would gain 0 happiness units by sitting next to Bob.
Valerie would gain 0 happiness units by sitting next to Carol.
Valerie would gain 0 happiness units by sitting next to David.
Valerie would gain 0 happiness units by sitting next to Eric.
Valerie would gain 0 happiness units by sitting next to Frank.
Valerie would gain 0 happiness units by sitting next to George"

dest = []
distances = {}
traject = ""
heighestHappiness = 0
longestRide = 500

happinessArr = happinessString.split(". ")
happiness = {}
persons = []

addToPersonsArray = (person) ->
    if person not in persons
        persons.push(person)

calculateHappiness = (opperator, amount) ->
    switch opperator
        when "gain" then return amount
        when "lose" then return "-" + eval(amount)

for h in happinessArr
    [person1, ignore1, happinessOpperator, happinessAmount, ignore2, ignore3, ignore4, ignore5, ignore6, ignore7, person2] = h.split(" ")
    addToPersonsArray person1
    addToPersonsArray person2
    happiness[person1+"-"+person2] = calculateHappiness happinessOpperator, happinessAmount

console.log "persons", persons
console.log "happiness", happiness

debugger
for person1 in persons
    filteredPersons = persons.filter (filteredPerson) ->
        filteredPerson isnt person1

    for person2 in filteredPersons
        filteredPersons2 = filteredPersons.filter (filteredPerson2) ->
            filteredPerson2 isnt person2

        for person3 in filteredPersons2
            filteredPersons3 = filteredPersons2.filter (filteredPerson3) ->
                filteredPerson3 isnt person3

            for person4 in filteredPersons3
                filteredPersons4 = filteredPersons3.filter (filteredPerson4) ->
                    filteredPerson4 isnt person4

                for person5 in filteredPersons4
                    filteredPersons5 = filteredPersons4.filter (filteredPerson5) ->
                        filteredPerson5 isnt person5
                    
                    for person6 in filteredPersons5
                        filteredPersons6 = filteredPersons5.filter (filteredPerson6) ->
                            filteredPerson6 isnt person6

                        for person7 in filteredPersons6
                            filteredPersons7 = filteredPersons6.filter (filteredPerson7) ->
                                filteredPerson7 isnt person7

                            for person8 in filteredPersons7
                                filteredPersons8 = filteredPersons7.filter (filteredPerson8) ->
                                    filteredPerson8 isnt person8

                                for person9 in filteredPersons8
                                    totalHappiness = 0
                                    for i in [1..8]
                                        j = i + 1
                                        p1 = eval "person"+i
                                        p2 = eval "person"+j
                                        totalHappiness += parseInt(happiness[p1+"-"+p2]) + parseInt(happiness[p2+"-"+p1])
                                    totalHappiness += parseInt(happiness[eval("person1")+"-"+eval("person9")]) + parseInt(happiness[eval("person9")+"-"+eval("person1")])
                                    if totalHappiness > heighestHappiness
                                        heighestHappiness = totalHappiness
                                        console.log "heighestHappiness", heighestHappiness


console.log "final heighestHappiness", heighestHappiness