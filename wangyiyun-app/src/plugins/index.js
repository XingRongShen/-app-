import { Swipe, SwipeItem,Button,Popup  } from 'vant';
// 放入数组中
let plugins=[
    Swipe,SwipeItem,Button,Popup 
]
export default function getVant(app){//调用函数实现引入组件，组件数据定义成数组减少代码量
    plugins.forEach((item)=>{
        return app.use(item)
    })
}
