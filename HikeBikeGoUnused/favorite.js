export class Favorite {
    constructor(name) {
        this.id = Date.now() + Math.floor(Math.random() * 100);
        this.name = name;
        this.completed = 0;
    }
}