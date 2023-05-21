class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // if (this.queryString.filter)
    //   this.query = this.query.find({ type: this.queryString.filter });
    // return this;
    const queryOb = { ...this.queryString };
    const excludedFields = ['sort', 'search'];
    excludedFields.forEach((el) => delete queryOb[el]);

    //Advance filtering
    let queryStr = JSON.stringify(queryOb);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  search() {
    if (this.queryString.search) {
      const searchTerm = this.queryString.search.trim().replace(/[\\\\/]/g, '');
      const searchRegex = new RegExp(searchTerm, 'i');
      const searchQuery = {
        $or: [
          { product: { $regex: searchRegex } },
          { description: { $regex: searchRegex } },
        ],
      };
      this.query = this.query.find(searchQuery);
    }
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else this.query = this.query.sort('-createdAt');
    return this;
  }
}

module.exports = APIFeatures;
