distancesString = "Faerun to Norrath = 129
Faerun to Tristram = 58
Faerun to AlphaCentauri = 13
Faerun to Arbre = 24
Faerun to Snowdin = 60
Faerun to Tambi = 71
Faerun to Straylight = 67
Norrath to Tristram = 142
Norrath to AlphaCentauri = 15
Norrath to Arbre = 135
Norrath to Snowdin = 75
Norrath to Tambi = 82
Norrath to Straylight = 54
Tristram to AlphaCentauri = 118
Tristram to Arbre = 122
Tristram to Snowdin = 103
Tristram to Tambi = 49
Tristram to Straylight = 97
AlphaCentauri to Arbre = 116
AlphaCentauri to Snowdin = 12
AlphaCentauri to Tambi = 18
AlphaCentauri to Straylight = 91
Arbre to Snowdin = 129
Arbre to Tambi = 53
Arbre to Straylight = 40
Snowdin to Tambi = 15
Snowdin to Straylight = 99
Tambi to Straylight = 70"

dest = []
distances = {}
traject = ""
shortestRide = 500
longestRide = 500

distancesArray = distancesString.split(" ")
filteredDistances = distancesArray.filter (distance) ->
    distance not in ["to", "="]

addToDestinationsArray = (destination) ->
    if destination not in dest
        dest.push(destination)

for d, i in filteredDistances
    switch i%3
        when 0 then do ->
            addToDestinationsArray d
            traject = d + "-"
        when 1 then do ->
            addToDestinationsArray d
            traject += d
        when 2 then do ->
            distances[traject] = d*1

for dest1 in dest
    filteredDest = dest.filter (filteredDest) ->
        filteredDest isnt dest1

    for dest2 in filteredDest
        filteredDest2 = filteredDest.filter (filteredDest2) ->
            filteredDest2 isnt dest2

        for dest3 in filteredDest2
            filteredDest3 = filteredDest2.filter (filteredDest3) ->
                filteredDest3 isnt dest3

            for dest4 in filteredDest3
                filteredDest4 = filteredDest3.filter (filteredDest4) ->
                    filteredDest4 isnt dest4

                for dest5 in filteredDest4
                    filteredDest5 = filteredDest4.filter (filteredDest5) ->
                        filteredDest5 isnt dest5
                    
                    for dest6 in filteredDest5
                        filteredDest6 = filteredDest5.filter (filteredDest6) ->
                            filteredDest6 isnt dest6

                        for dest7 in filteredDest6
                            filteredDest7 = filteredDest6.filter (filteredDest7) ->
                                filteredDest7 isnt dest7

                            for dest8 in filteredDest7
                                dist = 0
                                for i in [1..7]
                                    j = i + 1
                                    d1 = eval "dest"+i
                                    d2 = eval "dest"+j
                                    dist += distances[d1+"-"+d2] or distances[d2+"-"+d1]
                                if dist < shortestRide
                                    shortestRide = dist
                                    console.log "shortestRide", shortestRide
                                if dist > longestRide
                                    longestRide = dist
                                    console.log "longestRide", longestRide


console.log shortestRide