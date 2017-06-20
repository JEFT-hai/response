# response

1. 响应式优缺点
* 优点: 节省时间，减少工作量,每个设备都得到正确的设计,搜索优化...
* 缺点: 加载更多的样式和脚本资源，设计较难的的精确控制，老版本兼容性不好...
2. 媒体查询
* 查询符 not、and、or、only
  * not: 有效范围到","
  * and: 全部符合
  * or: 符合其中一个，等同","
  * only: 防止老旧的浏览器，不支持带媒体属性的查询
3. 设置viewport视口
* <meta view="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
4. 响应式网站设计实践原则
* 渐进增强
* 优雅降级
5. Css Resets
* 每个浏览器特定标签的解释都有差异
* reset.css: 重置浏览器的css默认样式，浏览器的品种不同样式不同，然后重置，让他们统一
* normalize.css: 保留有用的浏览器默认样式，而不是一概的将它们抹杀，normalize.css作用在范围更广的元素上面，修正了一些bug及主流浏览器在渲染上的不一致
