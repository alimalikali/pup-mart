// import { Request } from "express";
// import { TryCatch } from "../middlewares/error";
// import { Product } from "../models/product";
// import { NewProductRequestBody } from "../types/type";
// import ErrorHandler from "../utils/utility-class";
// import { rm } from "fs";

// export const newProduct = TryCatch(async (req: Request<{}, {}, NewProductRequestBody>, res, next) =>{
//     const { name, price, stock, category } = req.body;
//     const photo = req.file;

//     if (!photo) return next(new ErrorHandler("Please add Photo", 400));

//     if (!name || !price || !stock || !category) {
//       rm(photo.path, () => {
//         console.log("Deleted");
//       });

//       return next(new ErrorHandler("Please enter All Fields", 400));
//     }

//     const product = await Product.create({
//       name,
//       price,
//       stock,
//       category,
//       photo: photo.path,
//     });
//     return res.status(201).json({
//       success: true,
//       message: "Product Created Successfully",
//       product,
//     });
// });
// export const getAllProducts = TryCatch(async (req, res, next) => {
//   const products = await Product.find();
//   return res.status(200).json({
//     success: true,
//     count: products.length,
//     products,
//   });
// });
// export const getlatestProducts = TryCatch(async (req, res, next) => {
//   const latestProduct = await Product.find({}).sort({ createdAt: -1 }).limit(5);
//   return res.status(200).json({
//     success: true,
//     latestProduct,
//   });
// });
// export const getAllCategories = TryCatch(async (req, res, next) => {
//   const categories = await Product.distinct("category");
//   return res.status(200).json({
//     success: true,
//     categories,
//   });
// });
// export const getAdminProducts = TryCatch(async (req, res, next) => {
//   const products = await Product.find();
//   return res.status(200).json({
//     success: true,
//     count: products.length,
//     products,
//   });
// });
// export const getSingleProduct = TryCatch(async (req, res, next) => {
//   const id = req.params.id;
//   const product = await Product.find({ _id: id });
//   return res.status(200).json({
//     success: true,
//     product,
//   });
// });
// export const deleteProduct = TryCatch(async (req, res, next) => {
//   const id = req.params.id;
//   const product = await Product.findByIdAndDelete({ _id: id });
//   return res.status(200).json({
//     success: true,
//     product,
//   });
// });
// export const updateProduct = TryCatch(async (req, res, next) => {
//   const { id } = req.params;
//   const { name, price, stock, category } = req.body;
//   const photo = req.file;
//   const product = await Product.findById(id);

//   if (!product) return next(new ErrorHandler("Product Not Found", 404));

//   if (photo) {
//     rm(product.photo!, () => {
//       console.log("Old Photo Deleted");
//     });
//     product.photo = photo.path;
//   }
//   if (name) product.name = name;
//   if (price) product.price = price;
//   if (stock) product.stock = stock;
//   if (category) product.category = category;
//   await product.save();

//   return res.status(201).json({
//     success: true,
//     message: "Product updated Successfully",
//     product,
//   });
// });
