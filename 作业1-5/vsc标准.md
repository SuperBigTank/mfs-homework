VS code常用快捷键：

移动当前行代码：Alt + down / alt + up

隐藏菜单栏：View > Toggle Menu Bar, 显示菜单栏： Alt

分割编辑区：Ctrl+\
切换编辑区：ctrl + 1， 2， 3

水平分割编辑区或垂直分割编辑区：Shift + alt + 1

缩进代码：ctrl + [, ctrl + ]

注释和取消注释: ctrl + /

全局搜索：ctrl + shift + f

代码格式化： shift+ Alt+ f

向后导航，Alt+Left
向前导航，Alt+right

让文件保持打开： ctrl + k, enter

复制当前行： 不选中情况下，ctrl + c, 

剪切当前行： 不选中情况下，ctrl + x

隐藏显示左侧边栏： ctrl + b


常用插件：

code runner: 让代码运行

hacker haze theme： 黑客主题

lua -for -vscode: lua自动补全提示

vscode-icons: icons for visual studio code

 

key-bindings:(File->preference->key shortcut settting)

[
     { "key": "ctrl+d", "command": "editor.action.deleteLines", "when": "editorTextFocus" }, 
     { "key": "ctrl+shift+k", "command": "editor.action.addSelectionToNextFindMatch", "when": "editorFocus" },
     { "key": "ctrl+shift+/", "command": "editor.action.blockComment", "when": "editorTextFocus" } ,

// 定制与 sublime 相同的大小写转换快捷键，需安装 TextTransform 插件
    {
        "key": "ctrl+k ctrl+u",
        "command": "uppercase",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+k ctrl+l",
        "command": "lowercase",
        "when": "editorTextFocus"
    }
]


其他配置：

ctrl + shift + p -> configure language -> 打开locale.json进行配置display language