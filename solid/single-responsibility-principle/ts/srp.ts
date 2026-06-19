class User {
    // this class right here is just for managing the user property
    constructor(name: string, email: string) {}
}

class UserAuthentication {
    // this class right here handles user authentication
    constructor(user: User) {}

    authenticate(password: string) {
        throw new Error("Method not implemented.");
    }
}