export default class Apartment
{
    constructor(id, preview, title, rooms, area, unit, like) {
        this.id = id;
        this.like = like
        this.preview = preview;
        this.title = title;
        this.rooms = rooms
        this.area = area;
        this.unit = unit;
    }
    formatArea() {
        return `${this.area} ${this.unit}.`
    }
    setAddress(address) {
        this.address = address;
    }
    setVendor(vendor) {
        this.vendor = vendor;
    }
}

