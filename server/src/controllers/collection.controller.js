const httpStatus = require("http-status");
const {
  collectionService,
} = require("../services");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/APIError");

const createCollection = catchAsync(async (req, res, next) => {
  console.log('IT IS BODY ---  ',req.body);
  if (!req.files) {
    throw new ApiError(httpStatus.BAD_REQUEST, "No image or the file type is incorrect. Only PDF or Image are acceptable.");
  } else {
    const images = []
    console.log(req.body.images);
    await req.files.map((v, i) => images.push(v.filename))
    req.body.images = images
    console.log(req.body);
    // const result = await productService.createProduct(req.body);
    // res.send({
    //   status: httpStatus.CREATED,
    //   result
    // }).status(httpStatus.CREATED);
  }
  // res.status(200).send({ 
  //   status: httpStatus.ACCEPTED,
  //   user, tokens, product, model, brand, showroom
  //  });
});

module.exports = {
  createCollection,
};
