const square = object => {
   if(object === undefined) return ["XXX","X X","XXX"].join('\n') 
   if(typeof object === "object" 
       && typeof object.length !== "number"
       && object.fill === true
       && typeof object.char !== "string") return ["XXX","XXX","XXX"].join('\n')  
   if((object.fill === true && typeof object.fill === "boolean")
       && typeof object.length !== "number"
       && typeof object.char === "string") {
        object.length = 3
        let fullstr = object.char.repeat(object.length)
        let insidestr = object.char + object.char.repeat(object.length-2) + object.char + '\n'
        let body = object.length > 2 ? insidestr.repeat(object.length-2) : ''
        body = fullstr + '\n' + body
        if (object.length>1) body += fullstr
        return body
   }  
   if((object.fill === false || typeof object.fill !== "boolean") 
       && typeof object.length !== "number"
       && typeof object.char === "string") {
         object.length = 3
         let fullstr = object.char.repeat(object.length)
         let insidestr = object.char + ' '.repeat(object.length-2) + object.char + '\n'
         let body = object.length > 2 ? insidestr.repeat(object.length-2) : ''
         body = fullstr + '\n' + body
         if (object.length>1) body += fullstr
         return body
   } 
   if(typeof object === "object" 
       && typeof object.length !== "number") return ["XXX","X X","XXX"].join('\n') 
   if(object.length === 0) return ""
   if(object.length === 1) return typeof object.char === "string" ? object.char : "X"
   if((object.fill === false || typeof object.fill !== "boolean") 
       && object.length > 1 && typeof object.length === "number" 
       && typeof object.char !== "string") {
         let fullstr = "X".repeat(object.length)
         let insidestr = "X" + ' '.repeat(object.length-2) + "X" + '\n'
         let body = object.length > 2 ? insidestr.repeat(object.length-2) : ''
         body = fullstr + '\n' + body
         if (object.length > 1) body += fullstr
         return body   
   }
   if((object.fill === false || typeof object.fill !== "boolean") 
       && object.length > 1 && typeof object.length === "number"
       && typeof object.char === "string") {
         let fullstr = object.char.repeat(object.length)
         let insidestr = object.char + ' '.repeat(object.length-2) + object.char + '\n'
         let body = object.length > 2 ? insidestr.repeat(object.length-2) : ''
         body = fullstr + '\n' + body
         if (object.length > 1) body += fullstr
         return body
   } 
   if((object.fill === true && typeof object.fill === "boolean") 
       && object.length > 1 && typeof object.length === "number"
       && typeof object.char !== "string") {
        let fullstr = "X".repeat(object.length)
        let insidestr = "X" + "X".repeat(object.length-2) + "X" + '\n'
        let body = object.length > 2 ? insidestr.repeat(object.length-2) : ''
        body = fullstr + '\n' + body
        if (object.length > 1) body += fullstr
        return body
   } 
   if((object.fill === true && typeof object.fill === "boolean")
       && object.length > 1 && typeof object.length === "number"
       && typeof object.char === "string") {
        let fullstr = object.char.repeat(object.length)
        let insidestr = object.char + object.char.repeat(object.length-2) + object.char + '\n'
        let body = object.length > 2 ? insidestr.repeat(object.length-2) : ''
        body = fullstr + '\n' + body
        if (object.length > 1) body += fullstr
        return body
   }    
} 

module.exports = { square }

