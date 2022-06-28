(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{615:function(s,t,n){"use strict";n.r(t);var a=n(12),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"简介与开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介与开发环境"}},[s._v("#")]),s._v(" 简介与开发环境")]),s._v(" "),n("p",[s._v("首先，Arduino是一种单片机开发板，其MCU大部分基于AVR架构，采用串口下载，板载USB转串口芯片，下载时可自动复位，无需手动重置；开发板大多支持7 ~ 12 V DC 供电以及5V USB供电。")]),s._v(" "),n("p",[s._v("要开发它，首先要安装Arduino的IDE"),s._v(" (或者安装atmel公司提供的开发环境)，接着安装开发板USB转串口芯片的驱动程序,然后在Arduino IDE中的工具-开发板选择你的开发板型号(我这里用的是基于Atmega328P的Uno)，就可以愉快地coding了！")]),s._v(" "),n("h2",{attrs:{id:"程序代码结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#程序代码结构"}},[s._v("#")]),s._v(" 程序代码结构")]),s._v(" "),n("p",[s._v("Arduino是基于精简的C++的，所以他支持对象，但是对于STL的支持并不完整！")]),s._v(" "),n("p",[s._v("Arduino的工程文件后缀名为.ino，相当于.cpp（实际上，在编译时预处理器会把工程目录下的所有文件复制到临时文件夹并改名.ino为.cpp），工程目录文件夹名需与主ino文件名相同。")]),s._v(" "),n("p",[s._v("当你新建一个工程时，默认有两个函数，如下:")]),s._v(" "),n("div",{staticClass:"language-Cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("loop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("这两个函数没有返回值，也没有入口参数，且不可更改名称。为啥？因为Arduino是在核心文件里包含工程文件来实现编译的，核心文件里就是这样定义这两个函数的，要改了的话会报错（改核心文件另说）。其中setup函数只在板子上电或重置时执行一次，loop则在setup后无限循环。")]),s._v(" "),n("h2",{attrs:{id:"第一个闪灯程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一个闪灯程序"}},[s._v("#")]),s._v(" 第一个闪灯程序")]),s._v(" "),n("p",[s._v("在文件-示例-Basics里找到Blink程序，如下：")]),s._v(" "),n("div",{staticClass:"language-Cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//LED_BUILTIN 是板载LED的引脚号，是自动定义的，不用管直接用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化LED引脚为OUTPUT")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Arduino的引脚有3种模式，分别为")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  OUTPUT  输出模式，向外输出电流，单个引脚最大40mA")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  INPUT   输入模式，引脚为高阻抗态，对外部电平变化敏感")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  INPUT_PULLUP  与INPUT作用相同，只是多开启了内部的10k上拉电阻")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pinMode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LED_BUILTIN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OUTPUT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("loop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("digitalWrite")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LED_BUILTIN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" HIGH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将LED引脚电平配置为高(HIGH=1)")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("delay")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等待1000毫秒")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("digitalWrite")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LED_BUILTIN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" LOW"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// LED引脚电平配置为低(LOW=0)")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("delay")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等待1000毫秒")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("插上你的开发板的USB线，等待电脑识别后在工具-端口里选择对应串口，按Ctrl+U进行编译并下载，下载完成后，你就可以看到开发板上的LED亮一秒灭一秒地闪烁了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);