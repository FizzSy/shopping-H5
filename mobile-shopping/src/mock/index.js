const Mock = require("mockjs"); // 获取mock对象
import { shoppingMall } from "./shoppingMall";

Mock.mock(`/shoppingMall`, "get", shoppingMall);
