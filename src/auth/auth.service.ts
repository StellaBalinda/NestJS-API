import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    login() {
        return { msg: 'Hello, I am logged in' }
    }

    signup() {
        return { msg: 'Hello, I am signed up' }
    }
}