const models = require("../models/index");

function insertProductCategory(req, res) {
  let form = req.body;
  models.ProductCategory.create(form);

  return res.send({ message: "Data has been created", data: form });
}

async function listProductCategory(req, res) {
  const result = await models.ProductCategory.findAll();
  if (result.length < 1) {
    return res.status(204).send({ message: "Data is empty" });
  }
  return res.send({ message: "Data is found", data: result });
}

async function detailProductCategory(req, res) {
  const result = await models.ProductCategory.findOne({
    where: { id: req.params.id },
  });
  if (!result) {
    return res.status(204).send({ message: "Data is empty" });
  }
  return res.send({ message: "Data is found", data: result });
}

function updateProductCategory(req, res) {
  let data = req.body;
  models.ProductCategory.update(data, { where: { id: req.params.id } });

  return res.send({ message: "Data has been updated", data: req.body });
}

function deleteProductCategory(req, res) {
  models.ProductCategory.destroy({ where: { id: req.params.id } });
  return res.send({ message: "Data has been deleted" });
}

module.exports = {
  insertProductCategory,
  listProductCategory,
  detailProductCategory,
  updateProductCategory,
  deleteProductCategory,
};
