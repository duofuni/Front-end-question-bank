webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  "data-v-6b4cf18a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  list: [{
      "id": 1,
      "title": "闭包是什么? ",
      "items": [
        "闭包(closure)就是能够读取其他函数内部变量的函数（自带作用域的函数）",
        "普通函数",
        "闭包就是基本数据类型",
        "变量"
      ],
      "answer": 0,
      "reason": "闭包(closure)就是能够读取其他函数内部变量的函数（自带作用域的函数）"
    },
    {
      "id": 2,
      "title": "闭包的用途?",
      "items": [
        "作为函数",
        "闭包是将函数内部和函数外部连接起来的桥梁",
        "作为对象",
        "作为参数"
      ],
      "answer": 1,
      "reason": "闭包是将函数内部和函数外部连接起来的桥梁"
    },
    {
      "id": 3,
      "title": "简述事件循环原理？",
      "items": [
        "宏任务和微任务",
        "宏任务",
        "JS 为了执行异步任务而实现的运行机制，其中的任务分为宏任务和微任务。当主任务结束之后，就立刻执行微任务，后执行宏任务，循环往复",
        "微任务"
      ],
      "answer": 2,
      "reason": `JS 为了执行异步任务而实现的运行机制，其中的任务分为宏任务和微任务。
        宏任务可以认为是运行时提供的 API，由运行时自己实现一个异步的方法，这个异步方法通常可以看做一个单独的 JS 环境。
        微任务是 JS 语言本身提供的 API，因此当主任务结束之后，就立刻会执行`
    },
    {
      "id": 4,
      "title": "虚拟dom是什么?",
      "items": [
        "DOM 对象",
        "普通类型数据",
        "框架中为了代指真实 DOM 使用的对象，通过新旧虚拟 DOM 对比，生成变更应用到真实 DOM 上",
        "DOM 对象的别名",
      ],
      "answer": 2,
      "reason": `虚拟 DOM：框架中为了代指真实 DOM 使用的对象
        用途：通过新旧虚拟 DOM 对比，生成变更应用到真实 DOM 上`
    },
    {
      "id": 5,
      "title": "虚拟DOM的优缺点?",
      "items": [
        "比真实 DOM 慢，不消耗性能",
        "比真实 DOM 更复杂",
        "优点：没有真实 DOM 复杂的引用关系，跨平台；缺点：消耗一定的性能去生成和计算",
        "虚拟 DOM 不跨平台"
      ],
      "answer": 2,
      "reason": "优点：没有真实 DOM 复杂的引用关系，跨平台；缺点：消耗一定的性能去生成和计算"
    },
    {
      "id": 6,
      "title": "vue 和 react 里的key的作用是什么? ",
      "items": [
        "普通属性，没有特殊作用",
        "key不是唯一的",
        "影响 diff 操作，会使 diff 不准确、更慢",
        "key 是给每一个 vnode 的唯一 id，依靠 key，diff 操作可以更准确、更快速"
      ],
      "answer": 3,
      "reason": `key 是给每一个 vnode 的唯一 id,依靠 key，diff 操作可以更准确、更快速。
        不加 key 会导致重复的 dom 被重新生成浪费性能`
    },
    {
      "id": 7,
      "title": "用index作为key会怎样? ",
      "items": [
        "报错，用了会报错",
        "在逆序添加、逆序删除等破坏顺序的操作时会效率低；在包含输入类的 DOM 操作会产生错误 DOM 更新、数据错位",
        "不会有任何影响",
        "特殊情况下会报错，页面崩溃",
      ],
      "answer": 1,
      "reason": `使用 index 做 key,在逆序添加、逆序删除等操作的时候,
        因为每一个节点都找不到对应的 key,会导致部分节点不能复用,所有的新 vnode 都需要重新创建，
        导致diff中的优化失效(降低了复用性,违背了虚拟DOM的初衷)；在包含输入类的 DOM 操作会产生错误 DOM 更新、数据错位`
    },
    {
      "id": 8,
      "title": "vue 双向绑定的原理是什么?",
      "items": [
        "通过数据劫持 + 发布订阅模式的方式来实现的",
        "数据劫持",
        "观察者模式",
        "proxy代理"
      ],
      "answer": 0,
      "reason": `通过:  数据劫持 + 发布订阅模式的方式来实现的；
        数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；`
    },
    {
      "id": 9,
      "title": "vue的template会变成什么?",
      "items": [
        "变成 Vnode",
        "template 会被编译成 AST 语法树，AST 是指抽象语法树(AST),或者语法树,是源代码的抽象语法结构的树状表现形式。 ",
        "字符串",
        "虚拟dom"
      ],
      "answer": 1,
      "reason": `template会被编译成AST语法树,AST是指抽象语法树(AST),或者语法树,是源代码的抽象语法结构的树状表现形式。
        代码分析 首先、定义一个简单的html DOM结构、其中包括比较常见的标签、文本以及注释,用来生成AST结构`
    },
    {
      "id": 10,
      "title": "用过vue 的render吗? render和template有什么关系",
      "items": [
        "template => 虚拟 dom (diff 、patch)",
        "template => render => 虚拟 dom (diff 、patch)",
        "template => ast => 虚拟 dom (diff 、patch)",
        "compiler 过程(template => ast) -> reactivity 过程(data proxy、ast => render) -> runtime 过程(render => VNode/diff/patch)"
      ],
      "answer": 3,
      "reason": `Vue最核心的三部分，即：compiler、reactivity、runtime。
        compiler表示template编译成有规律的数据结构，即AST抽象语法树。
        reactivity表示data数据可以被监控，通过proxy语法来实现。
        runtime表示运行时相关功能，虚拟DOM(即：VNode)、diff算法、真实DOM操作等。`
    },
    {
      "id": 11,
      "title": "关于生命周期钩子完整的是",
      "items": [
        "1.beforeCreate,2.created,3.beforeMount,4.mounted,5.beforeUpdate,6.updated,7.beforeDestroy,8.destroyed",
        "1.beforeCreate,2.created,3.beforeMount,4.mounted,5.beforeUpdate,6.updated,7.activated,8.deactivated,9.beforeDestroy,10.destroyed",
        "1.created,2.mounted,3.updated,4.destroyed",
        "1.beforeCreate,2.beforeMount,3.beforeUpdate,4.beforeDestroy",
      ],
      "answer": 1,
      "reason": `　　（1）beforeCreate（）       实例创建前触发
        　　（2）created（）                实例创建完成，
        　　（3）beforeMount（）        模板渲染前，可以访问数据，模板编译完成，虚拟DOM已经存在
        　　（4）mounted（）              模板渲染完成，可以拿到DOM节点和数据
        　　（5）beforeUpdate（）      更新前
        　　（6）updated（）               更新完成
        　　（7）activated（）         　 激活前
        　　（8）deactivated（）         激活后
        　　（9）beforeDestroy（）　 销毁前
        　　（10）destroyed（）　　  销毁后`
    },
    {
      "id": 12,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 13,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 14,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 15,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 16,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 17,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 18,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 19,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 20,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 21,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 22,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 23,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 24,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 25,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 26,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 27,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 28,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 29,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 30,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 31,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 32,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 33,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 34,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 35,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 36,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 37,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 38,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 39,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 40,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 41,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 42,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 43,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 44,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 45,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 46,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 47,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 48,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 49,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 50,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 51,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 52,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 53,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 54,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 55,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 56,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 57,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 58,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 59,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 60,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 61,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 62,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 63,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 64,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 65,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 66,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 67,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 68,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 69,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 70,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 71,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 72,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 73,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 74,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 75,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 76,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 77,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 78,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 79,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 80,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 81,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 82,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 83,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 84,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 85,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 86,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 87,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 88,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 89,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 90,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 91,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 92,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 93,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 94,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 95,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 96,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 97,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 98,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 99,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 100,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 101,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 102,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 103,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 104,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 105,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 106,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 107,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 108,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 109,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 110,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 111,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 112,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 113,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 114,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 115,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 116,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 117,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 118,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 119,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 120,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 121,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 122,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 123,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 124,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 125,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 126,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 127,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 128,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 129,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 130,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 131,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 132,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 133,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 134,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 135,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 136,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 137,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 138,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 139,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 140,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 141,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 142,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 143,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 144,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 145,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 146,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 147,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 148,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 149,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 150,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 151,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 152,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 153,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 154,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 155,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 156,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 157,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 158,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 159,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 160,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 161,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 162,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 163,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 164,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 165,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 166,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 167,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 168,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 169,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 170,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 171,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 172,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 173,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 174,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 175,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 176,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 177,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 178,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 179,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 180,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 181,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 182,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 183,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 184,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 185,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 186,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 187,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 188,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 189,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 190,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 191,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 192,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 193,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 194,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 195,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 196,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 197,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 198,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 199,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 200,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 201,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 202,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 203,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 204,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 205,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 206,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 207,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 208,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 209,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 210,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 211,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 212,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 213,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 214,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 215,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 216,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 217,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 218,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 219,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 220,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 221,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 222,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 223,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 224,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 225,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 226,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 227,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 228,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 229,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 230,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 231,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 232,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 233,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 234,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 235,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 236,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 237,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 238,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 239,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 240,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 241,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 242,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 243,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 244,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 245,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 246,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 247,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 248,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 249,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 250,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 251,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 252,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 253,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 254,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 255,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 256,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 257,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 258,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 259,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 260,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 261,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 262,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 263,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 264,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 265,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 266,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 267,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 268,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 269,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 270,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 271,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 272,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 273,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 274,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 275,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 276,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 277,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 278,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 279,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 280,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 281,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 282,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 283,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 284,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 285,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 286,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 287,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 288,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 289,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 290,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 291,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 292,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 293,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 294,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 295,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 296,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 297,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 298,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 299,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 300,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 301,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 302,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 303,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 304,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 305,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 306,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 307,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 308,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 309,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 310,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 311,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 312,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 313,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 314,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 315,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 316,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 317,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 318,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 319,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 320,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 321,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 322,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 323,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 324,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 325,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 326,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 327,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 328,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 329,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 330,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 331,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 332,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 333,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 334,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 335,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 336,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 337,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 338,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 339,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 340,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 341,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 342,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 343,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 344,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 345,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 346,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 347,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 348,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 349,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 350,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 351,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 352,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 353,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 354,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 355,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 356,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 357,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 358,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 359,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 360,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 361,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 362,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 363,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 364,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 365,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 366,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 367,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 368,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 369,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 370,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 371,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 372,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 373,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 374,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 375,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 376,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 377,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 378,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 379,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 380,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 381,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 382,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 383,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 384,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 385,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 386,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 387,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 388,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 389,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 390,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 391,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 392,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 393,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 394,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 395,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 396,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 397,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 398,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 399,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 400,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 401,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 402,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 403,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 404,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 405,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 406,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 407,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 408,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 409,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 410,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 411,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 412,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 413,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 414,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 415,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 416,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 417,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 418,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 419,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 420,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 421,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 422,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 423,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 424,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 425,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 426,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 427,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 428,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 429,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 430,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 431,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 432,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 433,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 434,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 435,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 436,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 437,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 438,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 439,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 440,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 441,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 442,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 443,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 444,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 445,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 446,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 447,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 448,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 449,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 450,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 451,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 452,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 453,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 454,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 455,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 456,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 457,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 458,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 459,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 460,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 461,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 462,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 463,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 464,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 465,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 466,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 467,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 468,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 469,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 470,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 471,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 472,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 473,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 474,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 475,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 476,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 477,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 478,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 479,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 480,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 481,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 482,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 483,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 484,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 485,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 486,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 487,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 488,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 489,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 490,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 491,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 492,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 493,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 494,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 495,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 496,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }, {
      "id": 497,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 498,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 0,
      "reason": ""
    }, {
      "id": 499,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "reason": ""
    }, {
      "id": 500,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "reason": ""
    }, {
      "id": 501,
      "title": "",
      "items": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "reason": ""
    }
  ]

};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_model_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_model_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_model_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    'li-model': __WEBPACK_IMPORTED_MODULE_1__components_model_vue___default.a
  },
  data: function data() {
    return {
      data: __WEBPACK_IMPORTED_MODULE_0__data_js___default.a.list.filter(function (x) {
        return x.title.length;
      }),
      qIndex: 0,
      activeIndex: -1,
      rightIndex: -1,
      errorIndex: -1,
      questionList: [],
      ansState: false,
      collectionList: [],
      collectHtmlData: [],
      collectNum: 0,
      errorHtmlData: [],
      errNum: 0,
      collectionState: false,
      collectionText: '收藏',
      toast: false,
      toastText: '',
      allQuestionState: []
    };
  },

  watch: {
    qIndex: function qIndex(n, o) {
      this.qIndex = n;
      this.qIndexChange();
    }
  },
  mounted: function mounted() {
    for (var i = 0; i < this.data.length; i++) {
      this.collectionList.push(false);
      this.allQuestionState.push({ id: i, state: 1 });
    }
  },

  methods: {
    checkEvent: function checkEvent(num) {
      var i = this.qIndex;
      if (!this.questionList[i]) {
        this.activeIndex = num;
        if (this.data[i].answer === num) {
          this.rightIndex = num;
          this.questionList[i] = { userAns: num, rightAns: num };
          this.allQuestionState[i].state = 2;
        } else {
          this.errorIndex = num;
          this.rightIndex = this.data[i].answer;
          this.questionList[i] = { userAns: num, rightAns: this.data[i].answer };
          this.errorHtmlData.push(i + 1);
          this.allQuestionState[i].state = 3;
        }
      }
    },
    preEvent: function preEvent() {
      if (this.qIndex !== 0) {
        this.qIndex -= 1;
        this.activeIndex = -1;
        this.rightIndex = -1;
        this.errorIndex = -1;
        this.ansState = false;
      }
    },
    qIndexChange: function qIndexChange() {
      var i = this.qIndex;
      this.activeIndex = -1;
      this.rightIndex = -1;
      this.errorIndex = -1;

      if (this.questionList[i]) {
        if (this.questionList[i].rightAns === this.questionList[i].userAns) {
          this.rightIndex = this.questionList[i].rightAns;
        } else {
          this.rightIndex = this.questionList[i].rightAns;
          this.errorIndex = this.questionList[i].userAns;
        }
      }
      if (this.collectionList[i]) {
        this.collectionState = true;
        this.collectionText = '取消收藏';
      } else {
        this.collectionState = false;
        this.collectionText = '收藏';
      }
    },
    nextEvent: function nextEvent() {
      if (this.data.length > this.qIndex + 1) {
        this.qIndex += 1;
        this.activeIndex = -1;
        this.rightIndex = -1;
        this.errorIndex = -1;
        this.ansState = false;
      } else {
        this.showToast('没有下一题了');
      }
    },
    answerEvent: function answerEvent() {
      if (this.questionList[this.qIndex]) this.ansState = !this.ansState;else this.showToast('未做题目不能看答案');
    },
    collectionEvent: function collectionEvent() {
      if (this.collectionState) {
        this.collectionList[this.qIndex] = false;
        this.collectionState = !this.collectionState;
        this.collectionText = '收藏';
      } else {
        this.collectionList[this.qIndex] = true;
        this.collectionState = !this.collectionState;
        this.collectionText = '取消收藏';
      }
      this.collectNum = this.getCollectList().length;
    },
    getCollectList: function getCollectList() {
      var a = [];
      for (var i = 0; i < this.collectionList.length; i++) {
        if (this.collectionList[i]) {
          a.push(i + 1);
        }
      }
      return a;
    },
    collectListEvent: function collectListEvent() {
      this.collectHtmlData = this.getCollectList();
      if (this.collectHtmlData.length > 0) this.$refs.collectList.modelOpen();else this.showToast('您当前还没有收藏题目');
    },
    showToast: function showToast(str) {
      var me = this;
      me.toast = true;
      me.toastText = str;
      setTimeout(function () {
        me.toast = false;
      }, 2000);
    },
    listEvent: function listEvent() {
      this.$refs.list.modelOpen();
    },
    errorListEvent: function errorListEvent() {
      if (this.errorHtmlData.length > 0) this.$refs.error.modelOpen();else this.showToast('您当前还没有错题');
    },
    errInEvent: function errInEvent(num) {
      this.$refs.error.modelClose();
      this.qIndex = num;
    },
    collectInEvent: function collectInEvent(num) {
      this.$refs.collectList.modelClose();
      this.qIndex = num;
    },
    allQuestionEvent: function allQuestionEvent(num) {
      this.$refs.list.modelClose();
      this.qIndex = num;
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vModel',
  created: function created() {
    console.log(this.type);
  },
  props: ['isHeadShow', 'type'],
  data: function data() {
    return {
      isModelShow: false
    };
  },

  methods: {
    popupClick: function popupClick() {},
    modelClose: function modelClose() {
      this.isModelShow = false;
    },
    modelOpen: function modelOpen() {
      this.isModelShow = true;
    },
    modelBgHide: function modelBgHide() {
      if (this.type === 'pop') {
        this.modelClose();
      }
    },
    alert_BtnEvent: function alert_BtnEvent() {
      this.modelClose();
      this.$emit('alertEvent');
    },
    confirm_BtnEvent: function confirm_BtnEvent(num) {
      this.modelClose();
      this.$emit('confirmEvent', num);
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  "data-v-ba827cb4",
  /* cssModules */
  null
)


module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "question"
  }, [_c('div', [_c('h5', [_vm._v(_vm._s(_vm.qIndex + 1) + ". " + _vm._s(_vm.data[_vm.qIndex].title))]), _vm._v(" "), _c('ul', _vm._l((_vm.data[_vm.qIndex].items), function(a, index1) {
    return _c('li', {
      class: {
        active: _vm.activeIndex === index1,
        color1: index1 === _vm.rightIndex,
        color2: index1 === _vm.errorIndex
      },
      on: {
        "click": function($event) {
          return _vm.checkEvent(index1)
        }
      }
    }, [(index1 === 0) ? _c('span', {
      class: [{
        sign1: index1 === _vm.rightIndex
      }, {
        sign2: index1 === _vm.errorIndex
      }, 'sign']
    }, [_vm._v("A")]) : _vm._e(), _vm._v(" "), (index1 === 1) ? _c('span', {
      class: [{
        sign1: index1 === _vm.rightIndex
      }, {
        sign2: index1 === _vm.errorIndex
      }, 'sign']
    }, [_vm._v("B")]) : _vm._e(), _vm._v(" "), (index1 === 2) ? _c('span', {
      class: [{
        sign1: index1 === _vm.rightIndex
      }, {
        sign2: index1 === _vm.errorIndex
      }, 'sign']
    }, [_vm._v("C")]) : _vm._e(), _vm._v(" "), (index1 === 3) ? _c('span', {
      class: [{
        sign1: index1 === _vm.rightIndex
      }, {
        sign2: index1 === _vm.errorIndex
      }, 'sign']
    }, [_vm._v("D")]) : _vm._e(), _vm._v(" "), (index1 === 4) ? _c('span', {
      class: [{
        sign1: index1 === _vm.rightIndex
      }, {
        sign2: index1 === _vm.errorIndex
      }, 'sign']
    }, [_vm._v("E")]) : _vm._e(), _vm._v(" "), (index1 === 5) ? _c('span', {
      class: [{
        sign1: index1 === _vm.rightIndex
      }, {
        sign2: index1 === _vm.errorIndex
      }, 'sign']
    }, [_vm._v("F")]) : _vm._e(), _vm._v(" "), (index1 === 6) ? _c('span', {
      class: [{
        sign1: index1 === _vm.rightIndex
      }, {
        sign2: index1 === _vm.errorIndex
      }, 'sign']
    }, [_vm._v("G")]) : _vm._e(), _vm._v(" "), (index1 === 7) ? _c('span', {
      class: [{
        sign1: index1 === _vm.rightIndex
      }, {
        sign2: index1 === _vm.errorIndex
      }, 'sign']
    }, [_vm._v("H")]) : _vm._e(), _vm._v(" " + _vm._s(a) + "\n          ")])
  }), 0)])])]), _vm._v(" "), _c('div', {
    staticClass: "btn-box"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('div', {
    class: [{
      button: _vm.qIndex !== 0
    }, {
      button1: _vm.qIndex === 0
    }],
    on: {
      "click": _vm.preEvent
    }
  }, [_vm._v("上一题")])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('div', {
    class: [{
      button: _vm.qIndex !== _vm.data.length - 1
    }, {
      button1: _vm.qIndex === _vm.data.length - 1
    }],
    on: {
      "click": _vm.nextEvent
    }
  }, [_vm._v("\n        下一题\n      ")])])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "explain"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.ansState),
      expression: "ansState"
    }],
    staticClass: "explain"
  }, [_c('p', [_c('span', {
    staticStyle: {
      "color": "#00a400"
    }
  }, [_vm._v("最佳解释：")]), _vm._v(_vm._s(_vm.data[_vm.qIndex].reason))])])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "50px"
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "toast"
    }
  }, [(_vm.toast) ? _c('div', {
    staticClass: "toast"
  }, [_c('div', {
    staticClass: "main"
  }, [_vm._v(_vm._s(_vm.toastText))])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "fixed",
    on: {
      "click": _vm.listEvent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    class: ['btn', {
      btn1: _vm.collectionState
    }],
    on: {
      "click": _vm.collectionEvent
    }
  }, [_vm._v(_vm._s(_vm.collectionText))]), _vm._v(" "), _c('div', {
    staticClass: "btn",
    on: {
      "click": _vm.answerEvent
    }
  }, [_vm._v("看答案")]), _vm._v(" "), _c('div', {
    staticClass: "btn",
    on: {
      "click": _vm.collectListEvent
    }
  }, [_vm._v("收藏夹"), (_vm.collectNum) ? _c('span', [_vm._v("(" + _vm._s(_vm.collectNum) + ")")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "btn",
    on: {
      "click": _vm.errorListEvent
    }
  }, [_vm._v("错题本"), (_vm.errorHtmlData.length) ? _c('span', [_vm._v("(" + _vm._s(_vm.errorHtmlData.length) + ")")]) : _vm._e()])]), _vm._v(" "), _c('li-model', {
    ref: "collectList",
    staticClass: "collectList",
    attrs: {
      "type": "pop"
    }
  }, [_c('div', {
    attrs: {
      "slot": "modalbody"
    },
    slot: "modalbody"
  }, [_c('h5', [_vm._v("收藏夹")]), _vm._v(" "), _c('ul', _vm._l((_vm.collectHtmlData), function(item) {
    return _c('li', [_c('div', {
      staticClass: "item right",
      on: {
        "click": function($event) {
          return _vm.collectInEvent(item - 1)
        }
      }
    }, [_vm._v(_vm._s(item))])])
  }), 0)]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modelfoot"
    },
    slot: "modelfoot"
  })]), _vm._v(" "), _c('li-model', {
    ref: "list",
    staticClass: "collectList",
    attrs: {
      "type": "pop"
    }
  }, [_c('div', {
    attrs: {
      "slot": "modalbody"
    },
    slot: "modalbody"
  }, [_c('h5', [_vm._v("答题概览")]), _vm._v(" "), _c('ul', _vm._l((_vm.allQuestionState), function(item) {
    return _c('li', [(item.state === 1) ? _c('div', {
      staticClass: "item",
      on: {
        "click": function($event) {
          return _vm.allQuestionEvent(item.id)
        }
      }
    }, [_vm._v(_vm._s(item.id + 1))]) : _vm._e(), _vm._v(" "), (item.state === 2) ? _c('div', {
      staticClass: "item right",
      on: {
        "click": function($event) {
          return _vm.allQuestionEvent(item.id)
        }
      }
    }, [_vm._v(_vm._s(item.id + 1))]) : _vm._e(), _vm._v(" "), (item.state === 3) ? _c('div', {
      staticClass: "item error",
      on: {
        "click": function($event) {
          return _vm.allQuestionEvent(item.id)
        }
      }
    }, [_vm._v(_vm._s(item.id + 1))]) : _vm._e()])
  }), 0)]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modelfoot"
    },
    slot: "modelfoot"
  })]), _vm._v(" "), _c('li-model', {
    ref: "error",
    staticClass: "collectList",
    attrs: {
      "type": "pop"
    }
  }, [_c('div', {
    attrs: {
      "slot": "modalbody"
    },
    slot: "modalbody"
  }, [_c('h5', [_vm._v("错题本")]), _vm._v(" "), _c('ul', _vm._l((_vm.errorHtmlData), function(item) {
    return _c('li', [_c('div', {
      staticClass: "item error",
      on: {
        "click": function($event) {
          return _vm.errInEvent(item - 1)
        }
      }
    }, [_vm._v(_vm._s(item))])])
  }), 0)]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modelfoot"
    },
    slot: "modelfoot"
  })])], 1)
},staticRenderFns: []}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "animateBase"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isModelShow),
      expression: "isModelShow"
    }],
    staticClass: "screen1",
    on: {
      "click": _vm.modelBgHide
    }
  }, [_c('div', {
    staticClass: "model-box"
  }, [_c('div', {
    staticClass: "model"
  }, [_c('div', {
    staticClass: "main",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.popupClick.apply(null, arguments)
      }
    }
  }, [(_vm.type == 'pop') ? _c('div', {
    staticClass: "pop"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isHeadShow),
      expression: "isHeadShow"
    }],
    staticClass: "head"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("弹出窗口")]), _vm._v(" "), _c('span', {
    staticClass: "close",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.modelClose.apply(null, arguments)
      }
    }
  }, [_vm._v("x")])]), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_vm._t("modalbody")], 2), _vm._v(" "), _c('div', {
    staticClass: "foot"
  }, [_vm._t("modalfoot")], 2)]) : _vm._e(), _vm._v(" "), (_vm.type == 'alert') ? _c('div', [_c('div', {
    staticClass: "alert"
  }, [_c('div', {
    staticClass: "top"
  }, [_vm._t("alert")], 2), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('button', {
    on: {
      "click": _vm.alert_BtnEvent
    }
  }, [_vm._v("确 认")])])])]) : _vm._e(), _vm._v(" "), (_vm.type == 'confirm') ? _c('div', [_c('div', {
    staticClass: "confirm"
  }, [_c('div', {
    staticClass: "top"
  }, [_vm._t("confirm")], 2), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('button', {
    staticClass: "radius-left",
    on: {
      "click": function($event) {
        return _vm.confirm_BtnEvent(1)
      }
    }
  }, [_vm._v("确 认")]), _vm._v(" "), _c('button', {
    staticClass: "radius-right",
    on: {
      "click": function($event) {
        return _vm.confirm_BtnEvent(0)
      }
    }
  }, [_vm._v("取 消")])])])]) : _vm._e()])])])])])
},staticRenderFns: []}

/***/ })
],[5]);
//# sourceMappingURL=app.b1f0c0f97cfa63ca402f.js.map