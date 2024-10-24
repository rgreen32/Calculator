

console.log("Welcome to your calculator!\n")


console.log("What is your first operand?\n")

process.stdin.on("data", function(data){
    let firstOperand = parseInt(data.toString().trim())
    // console.log("User put " + data + "as the first operand\n")

    console.log("What is your second operand?\n")
    process.stdin.on("data", function(data){
        let secondOperand = parseInt(data.toString().trim())
        // console.log("User put " + data + "as the second operand\n")

        console.log("What operation do you want to perform?")
        process.stdin.on("data", function(data){
            let operation = data.toString().trim()
            // console.log("User put " + data + "as the operand.")
            console.log(firstOperand + operation + secondOperand)

            //check if opertation is: + or - or * or /
            let result = ""
            if(operation == "+"){
               result = firstOperand + secondOperand
            }else if(operation == "-"){
                result = firstOperand - secondOperand
            }

            console.log("The result of this operation is: " + result)
            process.exit()

        })

    })

})