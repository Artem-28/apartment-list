export default class Vendor
{
    constructor(name, lastName, middleName) {
        this.name = name;
        this.lastName = lastName
        this.middleName = middleName
    }
    fullName(){
        return `${this.lastName} ${this.name} ${this.middleName}`
    }
}
