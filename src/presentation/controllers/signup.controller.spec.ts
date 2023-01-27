import { SignUpController } from './signup'
import { HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error' 

describe("SignUp Controller", () => {
    test("Should return 400 if no name is provided", () =>{
        const sut = new SignUpController()
        const httpRequest: HttpRequest = {
            statusCode: 400,
            body: {
                //name: 'the test'
                email: 'e@mail.com',
                password: 'anypwd',
                passwordConfirmation: 'anypwd'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('name'))
        expect(httpResponse.body instanceof MissingParamError).toBe(true)
    })
    
    test("Should return 400 if no email is provided", () =>{
        const sut = new SignUpController()
        const httpRequest: HttpRequest = {
            statusCode: 400,
            body: {
                name: 'the name',
                //email: 'the test',
                password: 'anypwd',
                passwordConfirmation: 'anypwd'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('email'))
    })
})