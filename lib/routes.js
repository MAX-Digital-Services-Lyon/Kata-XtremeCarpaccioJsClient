exports.order = function order(req, res, next) {
  console.info("______________________________________________");
  console.info("Order details:");
  const { body } = req;
  console.info("Order Body:", body);

  let result = {};
  if (!body || Object.keys(body).length === 0) {
    console.info("Le corps de la commande est vide.");
    result = {}
  } else {
    const { prices, quantities, country, reduction } = body;
    // console.info("Prices:", prices);
    // console.info("Quantities:", quantities);
    // console.info("Country:", country);
    // console.info("Reduction:", reduction);

    // TODO implement from here

    // Example of response
    result = {total: 1234.56 };
  }

  res.json(result);
};

exports.feedback = function feedback(req, res, next) {
  console.info("______________________________________________");
  console.info("Feedback from server :", req.body.type, req.body.content);
  next();
};
