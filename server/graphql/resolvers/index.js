exports.portfolioQueries = {
  portfolios: async (root, args, ctx) => await ctx.models.Portfolio.getAll(),
  portfolio: async (root, { id }, ctx) => await ctx.models.Portfolio.getById(id),
};

exports.portfolioMutations = {
  createPortfolio: async (root, { input }, ctx) => {
    const createdPortfolio = ctx.models.Portfolio.create(input)
    return createdPortfolio;
  },
  updatePortfolio: async (root, { id, input }, ctx) => {
    const updatedPortfolio = await ctx.models.Portfolio.update({_id: id}, input, {new: true})
    return updatedPortfolio;
  },
  deletePortfolio: async (root, { id }, ctx) => {
    const deletedPortfolioId = await ctx.models.Portfolio.delete({_id: id})
    return deletedPortfolioId._id
  },
};

exports.userMutations = {
  signIn: async (root, args, ctx) => ctx.models.User.signIn(),
  signUp: async (root, args, ctx) => ctx.models.User.signUp(),
  signOut: async (root, args, ctx) => ctx.models.User.signOut()
}
