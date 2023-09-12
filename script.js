// document.addEventListener('DOMContentLoaded', function () {
//     const signupForm = document.getElementById('signup-form');
    
//     signupForm.addEventListener('submit', function (e) {
//         e.preventDefault(); 

//         // form values
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;

//         // Create a user object with the collected data
//         const user = {
//             name: name,
//             email: email,
//             password: password
//             // Include other data here as needed
//         };

//         // Store the user object in local storage
//         localStorage.setItem('user', JSON.stringify(user));


//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('user-form');
    const messageElement = document.getElementById('message');

    userForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        //  input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        //  user object
        const user = {
            name: name,
            email: email,
            password: password
        };

        // object to JSON
        const userJSON = JSON.stringify(user);

        // Store the user data in local storage
        localStorage.setItem('userData', userJSON);

        //  success message
        messageElement.textContent = 'User data saved to local storage!';
    });
});
