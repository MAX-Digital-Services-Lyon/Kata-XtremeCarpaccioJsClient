exports.order = function order(req, res, next) {
  console.info("______________________________________________");
  console.info("Order details:");
  const { body } = req;
  const { prices, quantities, country, reduction } = body;

  // console.info("Order Body:", body);
  console.info("Prices:", prices);
  console.info("Quantities:", quantities);
  console.info("Country:", country);
  console.info("Reduction:", reduction);

  // TODO implement from here

  // Example of response
  // res.json({ total: 1163.2 });

  res.json({});
};

exports.feedback = function feedback(req, res, next) {
  console.info("______________________________________________");
  console.info("Feedback from server :", req.body.type, req.body.content);
  next();
};
