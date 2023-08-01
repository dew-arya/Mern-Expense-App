const express = require("express");
const {
  addTransactions,
  getAllTransactions,
  editTransactions,
  deleteTransactions,
} = require("../controllers/transactionController");

//router object
const router = express.Router();

//routers
//Add transaction post method
router.post("/add-transaction", addTransactions);

//edit transaction post method
router.post("/edit-transaction", editTransactions);

//delete transaction post method
router.post("/delete-transaction", deleteTransactions);

//get transaction
router.post("/get-transaction", getAllTransactions);

module.exports = router;
