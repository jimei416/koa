class message {
  err(meg, data) {
    return { type: "error", code: 0, message: meg, data };
  }
  suc(meg) {
    return { type: "success", code: 1, message: meg };
  }
}
module.exports = new message();
