`use strict`;

class useCommentRouttes {
    constructor(model) {
        this.model = model;
    }

    async read(id) {
        try {
            if (id) {
                return await this.model.findOne({ where: { id: id } });
            } else {
                return await this.model.findAll();
            }
        } catch (e) {
            console.log(`Error in reading data from id : ${id}`);
        }
    }

    async create(obj) {
        try {
            return await this.model.create(obj);
        } catch (e) {
            console.log(`Error for creation`);
        }
    }

    async update(id, obj) {
        try {
            const postById = await this.read(id);
            return await postById.update(obj);
        } catch (e) {
            console.log(`Error while ubdate data with id : ${id}`)
        }
    }

    async delete(id) {
        try {
            return await this.model.delete({ where: { id: id } });
        } catch (e) {
            console.log(`Error while deleting data with id : ${id}`);
        }
    }



    async readCommitRelatedPost(Commint) {
        try {
            return await this.modelfindAll({ include: [Commint] });
        } catch (e) {
            console.log(`Error while reading commint reation to post for model : ${this.model} `);
        }
    }

};

module.exports = useCommentRouttes;
