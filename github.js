class Github {
    constructor() {
        this.client_id = "67b2ed7cfb247f60914c";
        this.client_secret = "9b48eb6a5cbc6c53094fae9952ae6402abf3a108"
    }

    // creation of asyncronus fucntion tp get user
    async getUser(user) {
        // include profile and repo
        const url = `https://api.github.com/users/${user}?client_id=67b2ed7cfb247f60914c&client_secret=9b48eb6a5cbc6c53094fae9952ae6402abf3a108`;
        const profileResponse = await fetch(url)

        const profile = await profileResponse.json()

        // return the object
        return {
            profile
        }
    }
}