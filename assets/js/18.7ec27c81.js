(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{620:function(s,n,a){"use strict";a.r(n);var t=a(12),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),a("ul",[a("li",[s._v("树莓派，已经配置好网络的")]),s._v(" "),a("li",[s._v("Xshell （鼠标键盘也行）")])]),s._v(" "),a("h2",{attrs:{id:"安装ntp服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装ntp服务器"}},[s._v("#")]),s._v(" 安装NTP服务器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -i\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ufw  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#防火墙配置程序")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"配置ntp服务器-sudo下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置ntp服务器-sudo下"}},[s._v("#")]),s._v(" 配置NTP服务器(sudo下)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/ntp.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后照着下面的中文注释改：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' /etc/ntp.conf, configuration for ntpd; see ntp.conf(5) for help\n\ndriftfile /var/lib/ntp/ntp.drift\n\n# Leap seconds definition provided by tzdata\nleapfile /usr/share/zoneinfo/leap-seconds.list\n\n# Enable this if you want statistics to be logged.\n#statsdir /var/log/ntpstats/\n\nstatistics loopstats peerstats clockstats\nfilegen loopstats file loopstats type day enable\nfilegen peerstats file peerstats type day enable\nfilegen clockstats file clockstats type day enable\n\n# You do need to talk to an NTP server or two (or three).\n#server ntp.your-provider.example\nserver ntp.ntsc.ac.cn  #这里写要同步的服务器地址\n\n# pool.ntp.org maps to about 1000 low-stratum NTP servers.  Your server will\n# pick a different set every time it starts up.  Please consider joining the\n# pool: <http://www.pool.ntp.org/join.html>\npool 0.debian.pool.ntp.org iburst\npool 1.debian.pool.ntp.org iburst\npool 2.debian.pool.ntp.org iburst\npool 3.debian.pool.ntp.org iburst\n\n# Access control configuration; see /usr/share/doc/ntp-doc/html/accopt.html for\n# details.  The web page <http://support.ntp.org/bin/view/Support/AccessRestrictions>\n# might also be helpful.\n#\n# Note that "restrict" applies to both servers and clients, so a configuration\n# that might be intended to block requests from certain clients could also end\n# up blocking replies from your own upstream servers.\n\n# By default, exchange time with everybody, but don\'t allow configuration.\nrestrict -4 default kod notrap nomodify nopeer noquery limited\nrestrict -6 default kod notrap nomodify nopeer noquery limited\n\nrestrict 192.168.10.0 mask 255.255.255.0 nomodify \n# 上面的一行是限制访问，格式： \n# restrict <IP地址，请填写本网地址，并把最后一个byte改成0> mask <子网掩码> nomodify\n#\n# nomodify是不允许客户端更改，允许对时\n\n\n# Local users may interrogate the ntp server more closely.\nrestrict 127.0.0.1\nrestrict ::1\n\n# Needed for adding pool entries\nrestrict source notrap nomodify noquery\n\n# Clients from this (example!) subnet have unlimited access, but only if\n# cryptographically authenticated.\n#restrict 192.168.123.0 mask 255.255.255.0 notrust\n\n......省略...........\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br")])]),a("p",[s._v("保存退出。")]),s._v(" "),a("p",[s._v("然后执行：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" ntp restart\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ntp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("看到下面的内容，就配置好了NTP服务器：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ntp        1066      1  0 18:10 ?        00:00:00 /usr/sbin/ntpd -p /var/run/ntpd.pid -g -u 104:110\npi         1069   1034  0 18:10 pts/0    00:00:00 grep --color=auto ntp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"配置防火墙-sudo下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置防火墙-sudo下"}},[s._v("#")]),s._v(" 配置防火墙(sudo下)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ufw "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\nufw deny\nufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("/udp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启UDP协议123端口")]),s._v("\nufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("/tcp  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启ssh端口")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后你会看到：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Status: active\n\nTo                         Action      From\n--                         ------      ----\n123/udp                    ALLOW       Anywhere                  \n22/tcp                     ALLOW       Anywhere                  \n123/udp (v6)               ALLOW       Anywhere (v6)             \n22/tcp (v6)                ALLOW       Anywhere (v6)             \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("好了，现在重启系统(sudo reboot)，就OK了！")])])}),[],!1,null,null,null);n.default=e.exports}}]);