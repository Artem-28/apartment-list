export default class Address
{
    constructor(address) {
        this.city = address.city;
        this.street = address.street;
        this.house = address.house;
        this.room =address.room
    }
    fullAddress() {
        return `г. ${this.city} ул. ${this.street} д. ${this.house} кв. ${this.room}`
    }
}
