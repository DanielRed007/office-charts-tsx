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
}
