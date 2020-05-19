// initialised GitHub
const github = new Github;

// initiat the UI class
const ui = new UI;
// Serch input 
const searchUser = document.getElementById('searchUser');

//add eventlistenr keyUp
searchUser.addEventListener("keyup", (e) => {
    //Get inout text
    const userText = e.target.value;
    if (userText !== "") {

        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    // show alert
                    ui.showAlert("User not found", "alert alert-danger");
                    ui.clearProfile()
                } else {
                    // show profile
                    ui.clearAlert()
                    ui.showProfile(data.profile);
                    ui.showAlert("User found", "alert alert-success");
                    ui.showRepos(data.repos)
                }
            })
            .catch(error => console.log(error))

    } else {
        // Clear the profile
        ui.clearProfile()
    }
})