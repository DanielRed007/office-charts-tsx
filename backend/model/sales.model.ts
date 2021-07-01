import * as mongoose from "mongoose";
import { ObjectId } from "mongoose";

export interface ISales {
  _id: ObjectId;
  saleDate: string;
  items: any[];
  storeLocation: string;
  customer: any;
  couponUsed: boolean;
  purchaseMethod: string;
}

let Schema = mongoose.Schema;

let SalesSchema = new Schema(
  {
    _id: { type: String, required: true },
    saleDate: { type: String },
    items: { type: Array },
    storeLocation: { type: String },
    customer: { type: Object },
    couponUsed: { type: Boolean },
    purchaseMethod: { type: String },
  },
  { collection: "sales" }
);

export default mongoose.model<ISales>("Sales", SalesSchema);
