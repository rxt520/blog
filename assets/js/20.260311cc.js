(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{359:function(e,s,t){"use strict";t.r(s);var a=t(3),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"ubuntu-18-04-server-扩容-lvm-磁盘-解决磁盘不足的情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-server-扩容-lvm-磁盘-解决磁盘不足的情况"}},[e._v("#")]),e._v(" UBUNTU 18.04 SERVER 扩容(LVM)磁盘 解决磁盘不足的情况")]),e._v(" "),t("p",[e._v("因为发现我的本地server出现磁盘满了的情况 所以进行lvm的扩容\n(截图的都是扩容后的 所以忽略容量)")]),e._v(" "),t("p",[e._v("1 查看磁盘情况")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("df -h1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.freesion.com/images/856/8988f87164eadc1ab0c6fcf81c32bdd8.png",alt:"这里写图片描述"}}),e._v("\n原本发现 "),t("strong",[e._v("/dev/mapper/ubuntu–vg-ubuntu–lv")]),e._v(" 这个磁盘满了\n所以要进行扩容的就是这个了")]),e._v(" "),t("p",[e._v("2.显示存在的卷组")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo vgdisplay1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.freesion.com/images/301/3ce55fc1b42ab635f2de454121c83035.png",alt:"这里写图片描述"}}),e._v("\n可以看出\nAlloc PE / Size 12800 / 50.00 GiB\nFree PE / Size 44049 / <172.07 GiB\n这两个 第一个就是我的 "),t("strong",[e._v("/dev/mapper/ubuntu–vg-ubuntu–lv")]),e._v(" 这个磁盘\n第二个是 这个磁盘可以扩容的大小 也就是剩余可以扩容多少")]),e._v(" "),t("p",[e._v("3.扩容开始")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo lvextend -L 50G /dev/mapper/ubuntu--vg-ubuntu--lv \n# 扩容50G给这个盘 如果出现 New size (12800 extents) matches existing size (12800 extents).12\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("这里我扩容多50G 给他")]),e._v(" "),t("p",[e._v("这里是报错！！！\n"),t("img",{attrs:{src:"http://www.freesion.com/images/433/0f2b5578c09a0ddbbfd38f3b7fe66109.png",alt:"这里写图片描述"}}),e._v("\n如果出现以上问题 则")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 则用以下方式 全部空间都给这个盘\nsudo lvextend -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv12\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.freesion.com/images/589/b095fcd61118b4ab377951362e3235b5.png",alt:"这里写图片描述"}}),e._v("\n这个才是正确的提示")]),e._v(" "),t("p",[e._v("3.重新计算磁盘大小")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.freesion.com/images/200/a11f7a8fd1e8939e3cc69a6d39e3f048.png",alt:"这里写图片描述"}})]),e._v(" "),t("p",[e._v("4.重新查看磁盘情况")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("df -h\nsudo vgdisplay12\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.freesion.com/images/822/d6898f106656125913f5782d454193de.png",alt:"这里写图片描述"}})]),e._v(" "),t("p",[e._v("大功告成！！！")])])}),[],!1,null,null,null);s.default=n.exports}}]);