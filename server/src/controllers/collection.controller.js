const httpStatus = require("http-status");
const {
  collectionService,
} = require("../services");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/APIError");
const pick = require("../utils/pick");

const createCollection = catchAsync(async (req, res, next) => {
  if (!req.files) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Please select color images in order to proceed.");
  } else {
    const images = []
    console.log(req.body.images);
    // await req.files.map((v, i) => images.push(v.filename))
    req.body.color_image = req?.files[0]?.filename
    req.body.display_image = req?.files[1]?.filename
    console.log(req.body);
    const result = await collectionService.createCollection(req.body);
    res.send({
      status: httpStatus.CREATED,
      result
    }).status(httpStatus.CREATED);
  }
});

// const getCollections = catchAsync(async (req, res) => {
//   const filters = pick(req.query, [
//     "vendor",
//     "isAvailable",
//     "category",
//     "size",
//     "colour",
//   ]);
//   const options = pick(req.query, ["sortBy", "limit", "page"]);
//   const result = await collectionService.queryProductCondition(
//     filters,
//     options
//   );
//   res.status(httpStatus.ACCEPTED).send({
//     status: httpStatus.ACCEPTED,
//     result
//   });
// });

const getAllCollection = catchAsync(async (req, res) => {
  const result = await collectionService.getAllCollection();
  res.status(httpStatus.ACCEPTED).send({
    status: httpStatus.ACCEPTED,
    result
  });
});

module.exports = {
  createCollection,
  getAllCollection
};
