const httpStatus = require("http-status");
const {
  collectionService,
} = require("../services");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/APIError");
const pick = require("../utils/pick");

const createCollection = catchAsync(async (req, res, next) => {
    console.log(req.body);
    const result = await collectionService.createCollection(req.body);
    res.send({
      status: httpStatus.CREATED,
      result
    }).status(httpStatus.CREATED);
});

const filterCollection = catchAsync(async (req, res) => {
  //const userFilters = pick(req.user, ["location_id", "customer_id"]);
  const filters = pick(req.query, [
    "collection_url",
    "color_url"
  ]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  //let filter = Object.assign(queryFilters, userFilters);
  const result = await collectionService.queryCollections(
    filters,
    options,
  );
  res.send(result);
});

const getAllCollection = catchAsync(async (req, res) => {
  const result = await collectionService.getAllCollection();
  console.log('Result... ',result);
  res.status(httpStatus.ACCEPTED).send({
    status: httpStatus.ACCEPTED,
    result
  });
});

module.exports = {
  createCollection,
  getAllCollection,
  filterCollection
};
