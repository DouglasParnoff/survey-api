import { SignUpController } from './signup'

describe("SignUp Controller", () => {
    test("Should return 400 if no name is provided", () =>{
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                //name: 'the test'
                email: 'e@mail.com',
                password: 'anypwd',
                passwordConfirmation: 'anypwd'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new Error('Missing param: name'))
    })
})