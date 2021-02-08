import * as assert from "assert"
import * as chai from "chai"
import {User} from "../src/model/User"

const expect = chai.expect

const data = {
    id: 1,
    surname: "Bob",
    name: "Cornelius"

}
 const user: any = new User(data)

describe("Test if User model is valid", () =>{
    it("should valid User model", () => {
        expect(user.id).to.equal(1),
        expect(user.surname).to.equal("Bob"),
        expect(user.name).to.equal("Cornelius")
    })
})

describe("My first test", () => {

    it("1 is equal to 1", () => {
        expect(1).to.equal(1)
    })
})