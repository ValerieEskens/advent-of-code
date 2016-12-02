key = "bgvyzdsv"
start = "000000"

counter = 0
secretKey = 0

md5 = CryptoJS.MD5(secretKey)
md5string = md5.toString()

hash = (key) ->
  md5 = CryptoJS.MD5(secretKey)
  md5.toString()
  
startsWith = (string, start) ->
  string.substring(0, start.length) is start

print = (text) ->
  document.getElementById("result").innerHTML += "<br>" + text
  
checkHash = ->
  counter++
  secretKey = key + counter
  hashed = hash(secretKey)
  if startsWith(hashed, start) 
    THEcounter = counter
    print "hashed for key #{key}#{counter} is #{hashed}"

THEcounter = undefined

while THEcounter is undefined
  counter++
  secretKey = key + counter
  hashed = hash(secretKey)
  if startsWith(hashed, start) 
    THEcounter = counter
    print "hashed for key #{key}#{counter} is #{hashed}"
 
print "loop done, last counter: #{counter}"