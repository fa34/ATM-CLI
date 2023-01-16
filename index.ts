import inquirer from "inquirer";
interface ansType {
    userID : string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number
}
const answers : ansType= await inquirer.prompt([{

type :"input",
name: "userID",
message:"Plz Enter Your ID"


},
{

    type :"number ",
    name: "userPin",
    message:"Plz Enter Your Pin"
    
    
    },
    {

        type :"list",
        name: "accountType",
        choices:["Current" , "Savings"],
        message:"Plz Select your account"
        
        
        },
        {

            type :"list",
            name: "transactionType",
            choices:["fast Cash" , "withdraw"],
            message:"Plz Select your transactionType",
            when(answers){
                return answers.accountType
            },
            
            
            
            },
            {

                type :"list",
                name: "amount",
                choices:["1000" , "5000" ,"7000"],
                message:"Plz Select your Amount",
                when(answers){
                    return answers.accountType==="fast Cash"
                },
                
                
                },
                {

                    type :"number",
                    name: "amount",
                
                    message:"Enter your Amount",
                    when(answers){
                        return answers.accountType==="withdraw"
                    },
                    
                    
                    },



]);


if(answers.userID && answers.userPin){

    const balance= Math.floor( Math.random() * 100000)
    console.log( "your balance is :" ,balance);
    const EnteredAmount =answers.amount;
    if ( balance>= EnteredAmount){
        const remaining = balance - EnteredAmount ;
        console.log("your remaining balance is ",remaining)
    } 
    else{
        console.log("you have insufficient Balance")
    }
}
