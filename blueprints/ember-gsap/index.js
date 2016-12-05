module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject("gsap", "~1.19.0");
  }
};
