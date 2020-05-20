(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{285:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"由浏览器、单线程、事件循环（event-loop）、微任务、宏任务说到vue的-nexttick"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#由浏览器、单线程、事件循环（event-loop）、微任务、宏任务说到vue的-nexttick"}},[t._v("#")]),t._v(" 由浏览器、单线程、事件循环（Event loop）、微任务、宏任务说到Vue的$nextTick")]),t._v(" "),n("p",[t._v("由"),n("a",{attrs:{href:"https://mp.weixin.qq.com/s/BP2Avj7n3QTrmyys2x_RPw",target:"_blank",rel:"noopener noreferrer"}},[t._v("好文--面试必考：你真的理解 $nextTick 么--资料7"),n("OutboundLink")],1),t._v("引发的深入研究：主要是为了弄明白任务类型（宏任务、微任务）与浏览器的js引擎等的内在关系和执行循序，先是查了几篇资料（参考资料1、2、3）、继续"),n("abbr",{attrs:{title:"js 微任务 宏任务 GUI渲染线程 js引擎线程"}},[t._v("搜索")]),t._v("(查到资料4），4的链接查到重点文章（资料5），由5内的链接找到浏览器原理（资料6）")]),t._v(" "),n("h3",{attrs:{id:"浏览器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),n("p",[t._v("参考资料6")]),t._v(" "),n("h3",{attrs:{id:"单线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[t._v("#")]),t._v(" 单线程")]),t._v(" "),n("p",[t._v("JavaScript 单线程指的是浏览器中负责解释和执行 JavaScript 代码的只有一个线程，即为JS引擎线程，但是浏览器的渲染进程是提供多个线程的，如下：")]),t._v(" "),n("ul",[n("li",[t._v("JS引擎线程")]),t._v(" "),n("li",[t._v("事件触发线程")]),t._v(" "),n("li",[t._v("定时触发器线程")]),t._v(" "),n("li",[t._v("异步http请求线程")]),t._v(" "),n("li",[t._v("GUI渲染线程")])]),t._v(" "),n("h3",{attrs:{id:"事件循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),n("p",[t._v("事件循环机制：")]),t._v(" "),n("blockquote",[n("p",[t._v("JS引擎线程会维护一个执行栈，同步代码会依次加入到执行栈中依次执行并出栈。\nJS引擎线程遇到异步函数，会将异步函数交给相应的Webapi，而继续执行后面的任务。\nWebapi会在条件满足的时候，将异步对应的回调加入到消息队列中，等待执行。\n执行栈为空时，JS引擎线程会去取消息队列中的回调函数（如果有的话），并加入到执行栈中执行。\n完成后出栈，执行栈再次为空，重复上面的操作，这就是事件循环(event loop)机制。")])]),t._v(" "),n("h3",{attrs:{id:"宏任务-macrotasks-ˈmaekroʊ"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#宏任务-macrotasks-ˈmaekroʊ"}},[t._v("#")]),t._v(" 宏任务 macrotasks [ˈmækroʊ]")]),t._v(" "),n("ul",[n("li",[t._v("主代码块")]),t._v(" "),n("li",[t._v("setImmediate（Nodejs）")]),t._v(" "),n("li",[t._v("MessageChannel")]),t._v(" "),n("li",[t._v("setTimeout")]),t._v(" "),n("li",[t._v("setInterval")]),t._v(" "),n("li",[t._v("requestAnimationFrame")]),t._v(" "),n("li",[t._v("I/O")]),t._v(" "),n("li",[t._v("UI rendering（浏览器）")])]),t._v(" "),n("h3",{attrs:{id:"微任务-microtasks-ˈmaɪkroʊ"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微任务-microtasks-ˈmaɪkroʊ"}},[t._v("#")]),t._v(" 微任务 microtasks [ˈmaɪkroʊ]")]),t._v(" "),n("ul",[n("li",[t._v("process.nextTick（Nodejs）")]),t._v(" "),n("li",[t._v("Promises")]),t._v(" "),n("li",[t._v("Object.observe")]),t._v(" "),n("li",[t._v("MutationObserver")])]),t._v(" "),n("h3",{attrs:{id:"带上宏任务，微任务的事件循环机制解释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#带上宏任务，微任务的事件循环机制解释"}},[t._v("#")]),t._v(" 带上宏任务，微任务的事件循环机制解释")]),t._v(" "),n("p",[t._v("执行机制：")]),t._v(" "),n("ol",[n("li",[t._v("执行一个宏任务（栈中没有就从事件队列中获取）")]),t._v(" "),n("li",[t._v("执行过程中如果遇到微任务，就将它添加到微任务的任务队列中")]),t._v(" "),n("li",[t._v("宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）")]),t._v(" "),n("li",[t._v("当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染")]),t._v(" "),n("li",[t._v("渲染完毕后，JS引擎线程继续，开始下一个宏任务（从宏任务队列中获取）")])]),t._v(" "),n("h3",{attrs:{id:"参考代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考代码"}},[t._v("#")]),t._v(" 参考代码")]),t._v(" "),n("div",{staticClass:"language-js nodejs10的执行顺序 line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout 1000'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout 0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func async1 start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// await 是同步")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微任务")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func async1 end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("async2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内部是同步")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微任务")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise then 1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise then 2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\nscript start\nfunc async1 start\npromise1\npromise2\nscript end\npromise then 1\npromise then 2\nfunc async1 end\nsetTimeout 0\nsetTimeout 1000\n */")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br")])]),n("h3",{attrs:{id:"vue-nexttick"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-nexttick"}},[t._v("#")]),t._v(" Vue.$nextTick")]),t._v(" "),n("p",[t._v("Vue对于这个API的感情是曲折的，在2.4版本、2.5版本和2.6版本中对于nextTick进行反复变动，原因是浏览器对于「微任务」的不兼容性影响、「微任务」和「宏任务」各自优缺点的权衡。\n"),n("img",{attrs:{src:"/vue_set_data_flow.png",alt:"Vue派发更新的执行流程图"}}),t._v("\n看以上流程图，如果Vue使用setTimeout等「宏任务」函数，那么势必要等待UI渲染完成后的下一个「宏任务」执行，而如果Vue使用「微任务」函数，无需等待UI渲染完成才进行nextTick的回调函数操作，可以想象在「JS引擎线程」和「GUI渲染线程」之间来回切换，以及等待「GUI渲染线程」的过程中，浏览器势必要消耗性能，这是一个严谨的框架完全需要考虑的事情。")]),t._v(" "),n("p",[t._v("当然这里所说的只是nextTick执行用户回调之后的性能情况考虑，这中间当然不能忽略flushBatcherQueue更新Dom的操作，使用异步函数的另外一个作用当然是要确保同步代码执行完毕Dom更新性能优化（例如同步操作对响应式数据使用for循环更新一千次，那么这里只有一次DOM更新而不是一千次）。")]),t._v(" "),n("blockquote",[n("p",[t._v("参考链接")])]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://www.jianshu.com/p/d3ee32538b53",target:"_blank",rel:"noopener noreferrer"}},[t._v("看过--通过microtasks和macrotasks看JavaScript异步任务执行顺序"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly",target:"_blank",rel:"noopener noreferrer"}},[t._v("好文--没看完，英文-_-!!--单步演示-看过-Tasks, microtasks, queues and schedules"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5d01adb2f265da1b667bd4ad",target:"_blank",rel:"noopener noreferrer"}},[t._v("看过--前端基本功(五)：了解javascript的运行机制（单线程、任务队列、EventLoop、微任务、宏任务）"),n("OutboundLink")],1),t._v("（其他几篇基本功待看）")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.jianshu.com/p/f8873cdba604",target:"_blank",rel:"noopener noreferrer"}},[t._v("待看--JS异步、event loop、微任务、宏任务"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5be5a0b96fb9a049d518febc#comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("好文--看过--总结：JavaScript异步、事件循环与消息队列、微任务与宏任务"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5a6547d0f265da3e283a1df7#heading-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("好文--待看--从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/BP2Avj7n3QTrmyys2x_RPw",target:"_blank",rel:"noopener noreferrer"}},[t._v("好文--看过--面试必考：你真的理解 $nextTick 么"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);