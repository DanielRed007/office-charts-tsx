import Sales from "../../model/sales.model";

export class SalesController {
  async getAllSales(req: any, res: any) {
    try {
      const sales = await Sales.find();
      res.json(sales);
    } catch (error) {
      res.json(error);
    }
  }

  async pieSalesByCountry(req: any, res: any) {
    try {
      const countries = await Sales.aggregate([
        { $project: { storeLocation: 1 } },
        { $group: { _id: "$storeLocation", total: { $sum: 1 } } },
      ]);

      const graphicCountries = countries.map((country) => country._id);

      res.json({
        labels: countries.map((country) => country._id),
        datasets: [
          {
            label: "# of Votes",
            data: countries.map((country) => country.total),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      res.json(error);
    }
  }

  async graphicsByOfficeOne(req: any, res: any) {
    try {
      const countries = await Sales.aggregate([
        { $project: { storeLocation: 1 } },
        { $group: { _id: "$storeLocation", total: { $sum: 1 } } },
      ]);

      const gender = await Sales.aggregate([
        { $group: { _id: "$customer.gender", total: { $sum: 1 } } },
      ]);

      const purchaseMethod = await Sales.aggregate([
        { $group: { _id: "$purchaseMethod", total: { $sum: 1 } } },
      ]);

      res.json([
        {
          labels: countries.map((country) => country._id),
          datasets: [
            {
              label: "# By City",
              data: countries.map((country) => country.total),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        {
          labels: purchaseMethod.map((country) => country._id),
          datasets: [
            {
              label: "# of Sales",
              data: purchaseMethod.map((country) => country.total),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        {
          labels: gender.map((gen) => gen._id),
          datasets: [
            {
              label: "# of Sales",
              data: gender.map((gen) => gen.total),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
      ]);
    } catch (error) {
      res.json(error);
    }
  }

  async getSalesDetailsList(req: any, res: any) {
    try {
      const sales = await Sales.aggregate([
        { $match: {} },
        { $limit: 21 }
      ]);
      res.json(sales);
    } catch (error) {
      res.json(error);
    }
  }
}
