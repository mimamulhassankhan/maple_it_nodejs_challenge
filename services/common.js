class CommonService {
    constructor() { }

    // use generator function to generate a sequential id
    * generateId() {
        let id = 1;
        while (true) {
            yield id++;
        }
    }
}

module.exports = new CommonService();