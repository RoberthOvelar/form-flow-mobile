import Model from "@nozbe/watermelondb/Model";
import { field } from "@nozbe/watermelondb/decorators";

export default class Product extends Model {
  static table = "products";

  @field("name") name!: string;
  @field("price") price!: number;
}
