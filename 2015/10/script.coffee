input = "3113322113"
input = input.split('')

lookAndSay = (input) ->
    previous = undefined
    count = 0
    value = 0
    nextInput = ""
    index = 1

    for digit in input
        if digit is previous
            count++
        else 
            if count isnt 0
                nextInput += count + value
            count = 1
            value = digit
        previous = digit
        if index is input.length
            nextInput += count + value
        index++
    console.log "nextInput.length", nextInput.length
    nextInput

lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay lookAndSay input