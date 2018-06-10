/**
 * 路由配置
 * @param {Object}        router                [配置路由的对象]
 * @param {String}        router.url            [地址(必填) 以‘/api’开头]
 * @param {type}          router.type           [请求类型，默认get]
 * @param {String}        router.baseUrl        [实际请求的接口]
 * @param {Function}      router.resolve        [处理数据方法，默认default]
 */

 let router = [
     {
         url: '/api/xxx',
         type: 'get',
         baseUrl: '/base',
         resolve: ''
     }
 ]