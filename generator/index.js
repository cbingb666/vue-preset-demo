const TEMPLATES_PATH = '../template'

module.exports = api => {
  api.render(TEMPLATES_PATH + '/base');
  api.extendPackage({
    "scripts": {
      "commit": "cz",
      "commit:all": "git add . && cz",
    }
  })
}