oldPwd = "hepxxzaa"
easiFy = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]  

threeInARow = (arr) ->
    for i in [0..6]
        if arr[i]+1 is arr[i+1] and arr[i]+2 is arr[i+2]
            return true
    return false

validChars = (arr) ->
    for i in arr 
        if i in [8, 11, 14]
            return false
    return true

twoDuplicates = (arr) ->
    dup = 0
    prev = undefined
    for i in arr
        if i is prev
            dup++
            prev = undefined
        else prev = i
    if dup >= 2
        return true
    return false

convertToInt = (string) ->
    int = []
    for char in string
        int.push easiFy.indexOf(char)
    int

convertToChars = (arr) ->
    string = ""
    for i in arr
        string += easiFy[i]
    string

isPwValid = (pw) ->
    if threeInARow(pw) and validChars(pw) and twoDuplicates(pw)
        return true
    else
        return false

loopThrough = (index) ->
    while nextPwd[index] isnt 25
        nextPwd[index]++
        isPwValid nextPwd
    nextPwd[index] = 0

pwdInInt = convertToInt oldPwd
nextPwd = pwdInInt
debugger
while nextPwd[0] isnt 26
    while nextPwd[1] isnt 26
        while nextPwd[2] isnt 26
            while nextPwd[3] isnt 26
                while nextPwd[4] isnt 26
                    while nextPwd[5] isnt 26
                        while nextPwd[6] isnt 26
                            while nextPwd[7] isnt 26
                                pwValidity = isPwValid nextPwd
                                if pwValidity
                                    converted = convertToChars nextPwd
                                    console.log converted, "is valid"
                                    return
                                nextPwd[7]++
                            nextPwd[7] = 0
                            nextPwd[6]++
                        nextPwd[6] = 0
                        nextPwd[5]++
                    nextPwd[5] = 0
                    nextPwd[4]++
                nextPwd[4] = 0
                nextPwd[3]++
            nextPwd[3] = 0
            nextPwd[2]++
        nextPwd[2] = 0
        nextPwd[1]++
    nextPwd[1] = 0
    nextPwd[0]++
nextPwd[0] = 0
