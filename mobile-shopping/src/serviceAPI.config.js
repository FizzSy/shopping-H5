// const LOCALURL = "http://localhost:3000";
const LOCALURL = `//kaneki.com.cn`;
const URL = {
    registerUser: LOCALURL + "/shopping/user/register", //用户注册接口
    login: LOCALURL + "/shopping/user/login", //用户登录接口
    getDetailGoodsInfo: LOCALURL + "/shopping/goods/getDetailGoodsInfo", //获取商品详情
    getCateGoryList: LOCALURL + "/shopping/goods/getCateGoryList", //得到大类信息
    getCateGorySubList: LOCALURL + "/shopping/goods/getCategorySubList", //得到小类信息
    getGoodsListByCategorySubID: LOCALURL + "/shopping/goods/getGoodsListByCategorySubID", //得到小类商品信息
};

export default URL;
