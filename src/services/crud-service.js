class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud service layer");
        }
    }
    
    async destroy(id) {
        try {
            const result = await this.repository.destroy(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud service layer");
        }
    }

    async get(id) {
        try {
            const result = await this.repository.get(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud service layer");
        }
    }

    async getAll() {
        try {
            const result = await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in crud service layer");
        }
    }

    async update(id,data) {
        try {
            const result = await this.repository.update(id,data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud service layer");
        }
    }
}

module.exports = CrudService;