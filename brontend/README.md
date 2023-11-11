@import url('https://fonts.googleapis.com/css?family=Lobster');

body {
    background-color: #89FAD0;
    font-family: 'Lobster';
}

#carousel {
    position: absolute;
    height: 200px;
    width: 810px;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.arrow {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: white;
    text-align: center;
    font-size: 25px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    color: #228291;
    line-height: 30px;
    margin-top: 85px;
    z-index: 1000;
}

.arrow-right {
    left: 780px;
}

.item {
    background-color: #228291;
    height: 200px;
    width: 100px;
    text-align: center;
    color: white;
    font-size: 40px;
    position: absolute;
    transition: height 1s, width 1s, left 1s, margin-top 1s, line-height 1s, background-color 1s;
}

$level2-height: 150px;
$level2-width: 110px;
$level1-height: 180px;
$level1-width: 130px;
$level0-height: 200px;
$level0-width: 150px;

$level-2-left: 650px;
$level-1-left: 500px;
$level0-left: 330px;
$level1-left: 180px;
$level2-left: 50px;


.level-2 {
    // height: $level2-height;
    // width: $level2-width;
    line-height: $level2-height;
    background-color: #228291;
    z-index: -1;
}

.level-1 {
    // height: $level1-height;
    // width: $level1-width;
    line-height: $level1-height;
    background-color: #6796E5;
}

.level0 {
    // height: $level0-height;
    // width: $level0-width;
    line-height: $level0-height;
    background-color: #4EC9E1;
}

.level1 {
    // height: $level1-height;
    // width: $level1-width;
    line-height: $level1-height;
    background-color: #6796E5;
}

.level2 {
    // height: $level2-height;
    // width: $level2-width;
    line-height: $level2-height;
    background-color: #228291;
}

.left-enter {
    opacity: 0;
    // height: $level2-height - 30;
    // width: $level2-width - 20;
    line-height: $level2-height - 30;
}

.left-enter.left-enter-active {
    opacity: 1;
    // height: $level2-height;
    // width: $level2-width;
    line-height: $level2-height;
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s, line-height 1s;
}

.left-leave {
    opacity: 1;
    // height: $level2-height;
    // width: $level2-width;
    line-height: $level2-height;
}

.left-leave.left-leave-active {
    opacity: 0;
    // height: $level2-height - 30;
    line-height: 120px;
    // width: $level2-width - 20;
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s, line-height 1s;
}

.right-enter {
    opacity: 0;
    // height: $level2-height - 30;
    // width: $level2-width - 20;
    line-height: $level2-height - 30;
}

.right-enter.right-enter-active {
    opacity: 1;
    // height: $level2-height;
    line-height: $level2-height;
    // width: $level2-width;
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s, line-height 1s;
}

.right-leave {
    // height: $level2-height;
    opacity: 1;
    line-height: $level2-height;
    // width: $level2-width;
}

.right-leave.right-leave-active {
    opacity: 0;
    // height: $level2-height - 30;
    // width: $level2-width - 20;
    line-height: $level2-height - 30;
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s, line-height 1s;
}

.noselect {
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none;  
            user-select: none;
}