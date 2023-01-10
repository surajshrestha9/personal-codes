const func1 = async () => {
    //  return Promise.resolve({key: "I am resolve"})
    throw {key: "I am resolve"}    // resolve / reject
}

// func1()
// .then((result) => {
//     console.log(result);
// })

const func2 = async () => {
    try{
        let result = await func1()
        console.log(result.key);
    }catch(error){
        console.error("Error: ", error);
    }
}

// func2()

// name, email, password
const validateData = async (data) => {
    // logic validation 
    if(!data.email || !data.name || !data.password) {
        throw "Name, email and password fields are compulsory";
    } else {
        return true;
    }
}

const registerUser = async () => {
    try {
        let form_data = {
            name: "",
            email: "tst@test.com",
            password: "test1235"
        };
    
        await validateData(form_data)
        // logic db user register
        console.log(form_data);
    } catch(except) {
        // exception handling
        console.log(except);
    }

}

registerUser();