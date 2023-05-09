//Write an asynchronous function that accepts a message string and a delay
//  time in milliseconds. The function should log the message to the console after the specified delay time.

async function getMessage(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
  }
  getMessage("Hi Bridget , How is AchiraChix !", 2000);





//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches
//  and logs the data for each user ID one by one, in sequence
  const userIds = [1, 2, 3, 4, 5];

  async function fetchAndLogUserData() {
    for (const id of userIds) {
      const userData = await getUserData(id);
      console.log(userData);
    }
  }
  
  fetchAndLogUserData();
  

//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if 
//there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful,
//and a custom error message if there's an error.
async function performTask(){
  let succesful = true;
  let promise = new Promise(function(resolve, reject){
     if(succesful){
        resolve('Task was successful')
     }
     else{
        reject('An error occured')
     }
  }).then(()=>{console.log('The task was successful')})
   .catch(()=>{console.log('An error occured')})
   .finally(()=>{console.log("Iam still hopeful")})
   console.log({promise});
}
performTask()
