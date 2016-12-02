reindeerString = "Dancer can fly 27 km/s for 5 seconds, but then must rest for 132 seconds.
Cupid can fly 22 km/s for 2 seconds, but then must rest for 41 seconds.
Rudolph can fly 11 km/s for 5 seconds, but then must rest for 48 seconds.
Donner can fly 28 km/s for 5 seconds, but then must rest for 134 seconds.
Dasher can fly 4 km/s for 16 seconds, but then must rest for 55 seconds.
Blitzen can fly 14 km/s for 3 seconds, but then must rest for 38 seconds.
Prancer can fly 3 km/s for 21 seconds, but then must rest for 40 seconds.
Comet can fly 18 km/s for 6 seconds, but then must rest for 103 seconds.
Vixen can fly 18 km/s for 5 seconds, but then must rest for 84 seconds"

reindeerString2 = "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds"

reindeer = {}
time = 0
timeToTravel = 2503
timeToTravel2 = 1000

reindeerArray = reindeerString.split('. ')

for r in reindeerArray
    [name, ignore, ignore, flySpeed, ignore, ignore, flyTime, ignore, ignore, ignore, ignore, ignore, ignore, restTime, ignore] = r.split(' ')
    reindeer[name] =
        flySpeed: parseInt(flySpeed)
        flyTime: parseInt(flyTime)
        restTime: parseInt(restTime)
        timeFlying: 0
        timeResting: 0
        km: 0
        points: 0

ride2 = (reindeer) ->
    if reindeer.timeFlying < reindeer.flyTime
        reindeer.km += reindeer.flySpeed
        reindeer.timeFlying++
    else
        if reindeer.timeResting < reindeer.restTime
            reindeer.timeResting++
        if reindeer.timeResting is reindeer.restTime
            reindeer.timeFlying = 0
            reindeer.timeResting = 0

while time < timeToTravel
    time++
    for i, r of reindeer
        ride2 r
    maxKm = reindeer.Dancer.km
    for i, r of reindeer
        if r.km > maxKm
            maxKm = r.km
    for i, r of reindeer
        if r.km is maxKm
            r.points++

for i, r of reindeer
    console.log i, "has", r.points, "points and traveled", r.km, "km"