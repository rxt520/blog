(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{342:function(v,n,a){"use strict";a.r(n);var s=a(3),_=Object(s.a)({},(function(){var v=this,n=v.$createElement,a=v._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"javase-复习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javase-复习"}},[v._v("#")]),v._v(" JavaSE 复习")]),v._v(" "),a("ol",[a("li",[a("p",[a("strong",[v._v("JDK，JRE ，JVM 三者之间的关系，以及JDK、JRE包含的主要结构有哪些？")])]),v._v(" "),a("p",[v._v("JDK：Java Development Kit  java 开发包")]),v._v(" "),a("p",[v._v("JRE：Java Runtime Environment Java 运行时环境")]),v._v(" "),a("p",[v._v("JVM：Java virtual Machine java 虚拟机")]),v._v(" "),a("p",[v._v("JRE包含JVM")]),v._v(" "),a("p",[v._v("JDK包含JDK")]),v._v(" "),a("p",[v._v("JDK = JRE + Java的开发工具（javac.exe/java.exe/javadoc.exe）")]),v._v(" "),a("p",[v._v("JRE = JVM + Java核心类库")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("为什么要配置path环境变量？如何配置？")])]),v._v(" "),a("p",[v._v("path环境变量：windows操作系统执行命令时所要搜寻的路径")]),v._v(" "),a("p",[v._v("使系统认识java命令，在任何cmd下都能运行java 命令")]),v._v(" "),a("p",[v._v("配置 JAVA_HOME  ："),a("code",[v._v("D://java/jdk1.8")])]),v._v(" "),a("p",[v._v("配置 path  ： %JAVA_HOME%\\bin")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("常用的几个命令行操作都有哪些？")])]),v._v(" "),a("p",[v._v("md")]),v._v(" "),a("p",[v._v("cd")]),v._v(" "),a("p",[v._v("cp")]),v._v(" "),a("p",[v._v("mv")]),v._v(" "),a("p",[v._v("del")]),v._v(" "),a("p",[v._v("rd")]),v._v(" "),a("p",[v._v("exit")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("java 语言的特点")])]),v._v(" "),a("blockquote",[a("p",[v._v("面向对象性:")])]),v._v(" "),a("p",[v._v("​\t两个要素:类、对象")]),v._v(" "),a("p",[v._v("​\t三个特性：封装、继承、多态")]),v._v(" "),a("blockquote",[a("p",[v._v("健壮性：")])]),v._v(" "),a("p",[v._v("①去除了C语言中的指针 ②自动的垃圾回收机制 --\x3e仍然会出现内存溢出、内存泄露")]),v._v(" "),a("blockquote",[a("p",[v._v("跨平台性：")])]),v._v(" "),a("p",[v._v("write once ,run anywhere ： 一次编译，导出运行。这是jvm的特性")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("标识符的命名规则有哪些？")])]),v._v(" "),a("p",[v._v("不能是关键字和保留字")]),v._v(" "),a("p",[v._v("标识符只能从数字、字母、$、_ 中去选择")]),v._v(" "),a("p",[v._v("首字符不能是数字")]),v._v(" "),a("p",[v._v("定义类名、方法名、变量 不能与已有的类、方法、全局变量冲突")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("标识符的命名规范有哪些？")])]),v._v(" "),a("p",[v._v("类、接口：驼峰法  XxxYyyZzz")]),v._v(" "),a("p",[v._v("方法、变量：小驼峰法 xxxYyyZzz")]),v._v(" "),a("p",[v._v("包名：全小写 xxxzzzyyy")]),v._v(" "),a("p",[v._v("项目名：全小写 xxxyyyzzz")]),v._v(" "),a("p",[v._v("常量名：全部大写 XXX_ZZZ_YYY")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("Java 变量按照数据类型怎么划分？并指出Java的基本数据类型有哪八种，并指出各自占用的内存空间大小。")])]),v._v(" "),a("p",[v._v("基本数据类型")]),v._v(" "),a("p",[v._v("引用数据类型")]),v._v(" "),a("p",[v._v("byte char short int long float double boolean")]),v._v(" "),a("p",[v._v("boolean")]),v._v(" "),a("p",[v._v("byte :一个字节")]),v._v(" "),a("p",[v._v("char：一个字符=两个字节")]),v._v(" "),a("p",[v._v("short ： 2个字节")]),v._v(" "),a("p",[v._v("int ：4个字节")]),v._v(" "),a("p",[v._v("long：8个字节")]),v._v(" "),a("p",[v._v("float : 4个字节")]),v._v(" "),a("p",[v._v("double : 8个字节")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("说明基本数据类型变量之间自动类型提升的运算规则。")])]),v._v(" "),a("p",[v._v("当容量小的类型与容量大的类型进行运算时自动转化为容量大的数据类型")]),v._v(" "),a("p",[v._v("byte short char --\x3e int --\x3e long --\x3e float --\x3e double")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("说明基本类型数据变量之间强制类型转换的使用规则和强转可能出现的问题")]),v._v("。")]),v._v(" "),a("p",[v._v("容量大可以转容量小 例如int强转为short")]),v._v(" "),a("p",[v._v("可能出现精度损失。")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("原码、反码、补码")])]),v._v(" "),a("p",[v._v("正数：三码合一")]),v._v(" "),a("p",[v._v("负数：")]),v._v(" "),a("p",[v._v("​\t反码：最高位为1，其他位取反")]),v._v(" "),a("p",[v._v("​\t补码：反码+1")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v('"&" 和 "&&" 的异同')])]),v._v(" "),a("p",[v._v("& : 且  两边都是true 整个算式才为true")]),v._v(" "),a("p",[v._v("&&：与上功能相同，但是如果左边算式为false 则直接为false，不计算右边算式")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("程序输出")])]),v._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5CRXT-2020%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200212234526318.png",alt:"image-20200212234526318"}})]),v._v(" "),a("p",[v._v("z = 44")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("定义三个int型变量并复制，使用三元运算符 或者 if-else 获取这三个数中的最大值")])]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("int a,b,c ;\n        a = 15;\n        b = 16;\n        c = 17;\n        int max = -999;\n        max = a>b?a:b;\n        max = max>c?max:c;\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br"),a("span",{staticClass:"line-number"},[v._v("3")]),a("br"),a("span",{staticClass:"line-number"},[v._v("4")]),a("br"),a("span",{staticClass:"line-number"},[v._v("5")]),a("br"),a("span",{staticClass:"line-number"},[v._v("6")]),a("br"),a("span",{staticClass:"line-number"},[v._v("7")]),a("br")])])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("运算符")])])])]),v._v(" "),a("ul",[a("li",[v._v("算数运算符：+ -  * / ++ --")]),v._v(" "),a("li",[v._v("赋值运算符：=")]),v._v(" "),a("li",[v._v("比较运算符： ==   >   <   >=   <=   !=   <>   instanceof")]),v._v(" "),a("li",[v._v("逻辑运算符：&    &&  |    ||    !     ^(异或 相同为0不同为1)")]),v._v(" "),a("li",[v._v("位运算符 ：<<     >>    >>>")])]),v._v(" "),a("p",[v._v("15."),a("strong",[v._v("switch后面使用的表达式可以是那些数据类型的")]),v._v("。")]),v._v(" "),a("p",[v._v("byte、short、char、int、enum、String")]),v._v(" "),a("p",[v._v("16."),a("strong",[v._v("使用冒泡排序")])]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("public class SortBymaopao {\n    public static void main(String[] args) {\n        int[] arr = {1,3,5,2,4,7,8};\n        sortBymaoPao(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n    public static void sortBymaoPao(int[] arr){\n        for (int i = 0; i < arr.length; i++) {\n            for (int j = 0; j < arr.length-i-1; j++) {\n                if (arr[j]>arr[j+1]){\n                    int temp;\n                    temp = arr[j];\n                    arr[j] = arr[j+1];\n                    arr[j+1] = temp;\n                }\n            }\n        }\n    }\n}\n\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br"),a("span",{staticClass:"line-number"},[v._v("3")]),a("br"),a("span",{staticClass:"line-number"},[v._v("4")]),a("br"),a("span",{staticClass:"line-number"},[v._v("5")]),a("br"),a("span",{staticClass:"line-number"},[v._v("6")]),a("br"),a("span",{staticClass:"line-number"},[v._v("7")]),a("br"),a("span",{staticClass:"line-number"},[v._v("8")]),a("br"),a("span",{staticClass:"line-number"},[v._v("9")]),a("br"),a("span",{staticClass:"line-number"},[v._v("10")]),a("br"),a("span",{staticClass:"line-number"},[v._v("11")]),a("br"),a("span",{staticClass:"line-number"},[v._v("12")]),a("br"),a("span",{staticClass:"line-number"},[v._v("13")]),a("br"),a("span",{staticClass:"line-number"},[v._v("14")]),a("br"),a("span",{staticClass:"line-number"},[v._v("15")]),a("br"),a("span",{staticClass:"line-number"},[v._v("16")]),a("br"),a("span",{staticClass:"line-number"},[v._v("17")]),a("br"),a("span",{staticClass:"line-number"},[v._v("18")]),a("br"),a("span",{staticClass:"line-number"},[v._v("19")]),a("br"),a("span",{staticClass:"line-number"},[v._v("20")]),a("br")])]),a("p",[v._v("18."),a("strong",[v._v("数组中常见的异常有哪些？")])]),v._v(" "),a("p",[v._v("ArrayIndexOutOfBoundsException")]),v._v(" "),a("p",[v._v("nullPointerException")]),v._v(" "),a("p",[v._v("19."),a("strong",[v._v("二分查找")])]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("package com.rxt.tsort;\n\n/**\n * @author Ruan.X.T.\n * @create 2020-02-13-22:09\n */\npublic class tSort {\n    public static void main(String[] args) {\n        int[] arr = {1,2,3,4,5,6,7,8,9};\n        int num = 9;\n        System.out.println(tfind(arr, num));\n    }\n    public static int tfind(int[] arr,int num){\n        int head = 0;\n        int last = arr.length-1;\n        int mid=0;\n        int n;\n        while (head<=last){\n            mid = (head+last)/2;\n            if (arr[mid]==num){\n                break;\n            }else if (arr[mid]>num){\n                last = mid-1;\n            }else if (arr[mid]<num){\n                head = mid + 1;\n            }\n        }\n        return mid;\n    }\n}\n\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br"),a("span",{staticClass:"line-number"},[v._v("3")]),a("br"),a("span",{staticClass:"line-number"},[v._v("4")]),a("br"),a("span",{staticClass:"line-number"},[v._v("5")]),a("br"),a("span",{staticClass:"line-number"},[v._v("6")]),a("br"),a("span",{staticClass:"line-number"},[v._v("7")]),a("br"),a("span",{staticClass:"line-number"},[v._v("8")]),a("br"),a("span",{staticClass:"line-number"},[v._v("9")]),a("br"),a("span",{staticClass:"line-number"},[v._v("10")]),a("br"),a("span",{staticClass:"line-number"},[v._v("11")]),a("br"),a("span",{staticClass:"line-number"},[v._v("12")]),a("br"),a("span",{staticClass:"line-number"},[v._v("13")]),a("br"),a("span",{staticClass:"line-number"},[v._v("14")]),a("br"),a("span",{staticClass:"line-number"},[v._v("15")]),a("br"),a("span",{staticClass:"line-number"},[v._v("16")]),a("br"),a("span",{staticClass:"line-number"},[v._v("17")]),a("br"),a("span",{staticClass:"line-number"},[v._v("18")]),a("br"),a("span",{staticClass:"line-number"},[v._v("19")]),a("br"),a("span",{staticClass:"line-number"},[v._v("20")]),a("br"),a("span",{staticClass:"line-number"},[v._v("21")]),a("br"),a("span",{staticClass:"line-number"},[v._v("22")]),a("br"),a("span",{staticClass:"line-number"},[v._v("23")]),a("br"),a("span",{staticClass:"line-number"},[v._v("24")]),a("br"),a("span",{staticClass:"line-number"},[v._v("25")]),a("br"),a("span",{staticClass:"line-number"},[v._v("26")]),a("br"),a("span",{staticClass:"line-number"},[v._v("27")]),a("br"),a("span",{staticClass:"line-number"},[v._v("28")]),a("br"),a("span",{staticClass:"line-number"},[v._v("29")]),a("br"),a("span",{staticClass:"line-number"},[v._v("30")]),a("br"),a("span",{staticClass:"line-number"},[v._v("31")]),a("br")])]),a("p",[v._v("20."),a("strong",[v._v("面向对象思想编程内容的三条主线")])]),v._v(" "),a("ul",[a("li",[v._v("类及类的成员：属性、方法、构造器;代码块、内部类")]),v._v(" "),a("li",[v._v("面向对象的三大特征：封装、继承、多态")]),v._v(" "),a("li",[v._v("其他关键字：this、super、abstract、interface、static、final、package、import")])]),v._v(" "),a("p",[v._v("21."),a("strong",[v._v("谈谈你对面向对象中类和对象的理解，并指出二者的关系")])]),v._v(" "),a("p",[v._v("类是抽象，是对一类事物的特征。")]),v._v(" "),a("p",[v._v("对象是具体的，是一类事物的具体个体。")]),v._v(" "),a("p",[v._v("对象是类的实例化。")]),v._v(" "),a("p",[v._v("22."),a("strong",[v._v("面向对象思想的同一，类和对象的创建和执行操作有哪三步？")])]),v._v(" "),a("ul",[a("li",[v._v("创建类")]),v._v(" "),a("li",[v._v("类的实例化")]),v._v(" "),a("li",[v._v('调用对象的结构：“对象.属性” "对象.方法"')])]),v._v(" "),a("p",[a("strong",[v._v("23.类的方法内是否可以定义变量？是否可以调用属性？是否可以定义方法？是否可以调用方法？")])]),v._v(" "),a("p",[v._v("是可以定义变量。是可以调用属性。方法内部是不能定义方法。是可0以调用方法、")]),v._v(" "),a("p",[a("strong",[v._v("24.构造器的作用是什么？使用中有哪些注意点？")])]),v._v(" "),a("ul",[a("li",[v._v("创建对象")]),v._v(" "),a("li",[v._v("初始化对象结构")])]),v._v(" "),a("p",[a("strong",[v._v("25.关于类的属性的赋值，有几种赋值的方式。谈谈赋值的先后顺序。")])]),v._v(" "),a("p",[v._v("​\t默认初始化   显式初始化 构造器中初始化 对象.方法或对象.属性")]),v._v(" "),a("p",[a("strong",[v._v("26.方法的重写override 的具体规则有哪些？")])]),v._v(" "),a("p",[v._v("​\t形参列表相同")]),v._v(" "),a("p",[v._v("​    权限修饰符  子类的权限修饰符不小于父类的权限修饰符")]),v._v(" "),a("p",[v._v("​    返回值 如果是基本数据类型和void 只能相同 如果是引用类型可以是父类返回值引用类型的子类")]),v._v(" "),a("p",[v._v("​\t抛出的异常可以比父类小")]),v._v(" "),a("p",[a("strong",[v._v("27.如何区分方法重写和重载？")])]),v._v(" "),a("p",[v._v("①二者的概念：重载是形参列表的不同，重写是对父类里的方法进行重写。")]),v._v(" "),a("p",[v._v("②重载和重写的具体规则，重载的返回值类型，方法名相同，形参不同。")]),v._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[v._v("重写的形参必须相同，权限修饰符大于父类，返回值类型小于父类，抛出的异常小于父类\n")])])]),a("p",[a("strong",[v._v("28. == 和 equals（）有何区别？")])]),v._v(" "),a("p",[v._v("== 比较的是两个对象的地址。如果是基本数据类型则可以直接比较")]),v._v(" "),a("p",[v._v("equals 如果没有进行重写也是比较的地址，重写之后则可以根据对象的内容进行比较。")]),v._v(" "),a("p",[a("strong",[v._v("29. 谈谈你对多态性的理解")])]),v._v(" "),a("p",[v._v("①实现代码的通用性")]),v._v(" "),a("p",[v._v("②Object里的equals")]),v._v(" "),a("p",[v._v("③抽象类，接口的使用")]),v._v(" "),a("p",[a("strong",[v._v("30.static final abstract 用来修饰什么的？")])]),v._v(" "),a("ul",[a("li",[v._v("abstract 可以修饰类和方法，抽象方法一定在抽象类里，抽象类不一定有抽象方法")]),v._v(" "),a("li",[v._v("static 表示静态，可以修饰属性，方法，代码块")]),v._v(" "),a("li",[v._v("final 修饰符，可以修饰变量，方法，类\n"),a("ul",[a("li",[v._v("final修饰变量会变成常量，一旦赋值不能改变，可以在初始化或者构造方法里赋值，只能在这两种方法里二选一，不能不为常量复制，final经常和static 一起使用")]),v._v(" "),a("li",[v._v("final修饰方法，被final修饰的方法将不能被其子类覆盖，保持方法的稳定不能被覆盖。")]),v._v(" "),a("li",[v._v("final修饰类，被final修饰的类将不能被继承，final类中的方法也都是final的。")])])])]),v._v(" "),a("p",[a("strong",[v._v("31.抽象类和接口有哪些共同点和区别？")])]),v._v(" "),a("ul",[a("li",[v._v("共同点：\n"),a("ul",[a("li",[v._v("不能实例化")]),v._v(" "),a("li",[v._v("都可以定义未实现的方法")]),v._v(" "),a("li",[v._v("都可以被继承")])])]),v._v(" "),a("li",[v._v("不同点：\n"),a("ul",[a("li",[v._v("抽象类有构造器，接口不能声明构造器")]),v._v(" "),a("li",[v._v("接口可以被多继承")])])])]),v._v(" "),a("p",[a("strong",[v._v("32.常见异常")])]),v._v(" "),a("ul",[a("li",[a("p",[v._v("IOException")])]),v._v(" "),a("li",[a("p",[v._v("FileNotFoundException")])]),v._v(" "),a("li",[a("p",[v._v("NullPointerException")])]),v._v(" "),a("li",[a("p",[v._v("ArrayIndexOutBoundException")])]),v._v(" "),a("li",[a("p",[v._v("ClassCastException")])]),v._v(" "),a("li",[a("p",[v._v("NumberFormatException")])]),v._v(" "),a("li",[a("p",[v._v("InputMismatchException")])]),v._v(" "),a("li",[a("p",[v._v("ArithmeticException")])])]),v._v(" "),a("p",[a("strong",[v._v("33.ArrayList、LinkedList、Vector三者的异同？")])]),v._v(" "),a("ul",[a("li",[a("p",[v._v("同：三个类都是实现了List接口、存储有序、可重复的数据")])]),v._v(" "),a("li",[a("p",[v._v("不同：")]),v._v(" "),a("ul",[a("li",[v._v("ArrayList是List接口的主要实现类；线程不安全，效率高。底层使用object[] elementData 存储数据")]),v._v(" "),a("li",[v._v("LinkedList 对于频繁的插入与删除使用此类效率较高，底层使用双向链表存储")]),v._v(" "),a("li",[v._v("Vector：是List接口的古老实现类，线程安全效率低。底层使用Object[ ] elementData 存储")])])]),v._v(" "),a("li",[a("p",[v._v("ArrayList 底层 为elementData数组，1.7的时候初始化为容量为10的数组，1.8的时候初始化为0，当进行添加的时候才进行扩容为10.当添加元素超过10的时候需要进行扩容，容量为1.5倍")])])]),v._v(" "),a("p",[a("strong",[v._v("34.HashSet、LinkedHashSet、TreeSet的异同？")])]),v._v(" "),a("ul",[a("li",[v._v("同：存储无序、不可重复的数据")]),v._v(" "),a("li",[v._v("异：\n"),a("ul",[a("li",[v._v("HashSet是Set接口的主要实现类、线程是不安全的；可以存储null值")]),v._v(" "),a("li",[v._v("LinkedHashSet 作为HashSet的子类，遍历他的内部数据时，可以按照添加顺序进行遍历")]),v._v(" "),a("li",[v._v("TreeSet：可以按照添加对象的指定属性，进行排序")])])])])])}),[],!1,null,null,null);n.default=_.exports}}]);