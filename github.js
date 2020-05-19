class Github {
    constructor() {
        this.client_id = "67b2ed7cfb247f60914c";
        this.client_secret = "9b48eb6a5cbc6c53094fae9952ae6402abf3a108";
        this.repos_count = 5;
        this.repos_sort = 'create: asc'


    }

    // creation of asyncronus fucntion tp get user
    async getUser(user) {
        // include profile and repo
        const profileUrl = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        const profileResponse = await fetch(profileUrl)

        const repoUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
        const repoResponse = await fetch(repoUrl);

        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        // return the object
        return {
            profile,
            repos
        }
    }


}