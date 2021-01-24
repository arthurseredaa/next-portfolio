class Portfolio {
  constructor(model) {
    this.Model = model;
  }

  getAll = () => this.Model.find({});

  getById = (id) => this.Model.findById(id);

  create = (input) => this.Model.create(input)

  update = (id, input) => this.Model.findOneAndUpdate({_id: id}, input, {new: true});

  delete = (id) => this.Model.findOneAndDelete({_id: id});
}

module.exports = Portfolio;
