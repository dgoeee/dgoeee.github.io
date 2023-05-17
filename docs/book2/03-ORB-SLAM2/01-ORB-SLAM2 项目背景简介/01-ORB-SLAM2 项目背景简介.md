## 1.ORB-[SLAM](https://so.csdn.net/so/search?q=SLAM&spm=1001.2101.3001.7020)是什么，有什么特点？

### **1）简介：**

`ORB-SLAM`是一个用于 单目相机（后期的`ORB-SLAM2`也提供了双目立体相机以及`RGBD`相机的接口）的精确的多功能`SLAM(simultaneous localization and mapping，即时定位与地图构建)`方案。

### **2）功能：**

它能够实时计算并跟踪摄像机在空间中的`运动轨迹`，也能用于小到桌子，大到多个城市街道的多种规模的场景的`三维重建`。除此以外，它还具备较好的稳健性，当摄像头跟丢后还能够实时进行全局的重定位找回摄像头位置。最后，它针对平面以及非平面，提供了两套初始化方案，使得系统的初始化效果更为稳健。

### **3）工作原理：**

（1）`第一步`，系统读取摄像头参数与`ORB`字典的数据，并且初始化整个系统。
（2）`第二步`，它接着初始化相机位姿，初始化时采用ORB算法（算法具体介绍可以参考以下博客[1-ORB特征提取详解](https://blog.csdn.net/zouzoupaopao229/article/details/52625678)，[ 2-ORB特征检测算法小结](https://blog.csdn.net/GH_HOME/article/details/51511471)，[3-特征点匹配——ORB算法介绍](https://blog.csdn.net/lhanchao/article/details/52612954)） 提取第一帧图像的特征点，并且得到相连两帧图像之间的特征点的匹配；
（3）`第三步`，在得到特征点匹配的信息的基础上，利用 双目立体视觉中的三角法（三角法算法数学原理参考以下博客：[ 双目测距数学原理详解](https://blog.csdn.net/u013832707/article/details/53781810)，代码参考以下博客：[ 1- 学习OpenCV(2)双目测距原理](https://blog.csdn.net/Angle_Cal/article/details/50800775)，[2-【opencv学习】完全基于opencv的双目景深与测距的实现](https://blog.csdn.net/hysteric314/article/details/50456570)，[3- VS2017+OpenCV3.3基于SGBM算法的双目立体视觉、双目测距（双目校正和立体匹配）](https://blog.csdn.net/weixin_39449570/article/details/79033314)） 恢复匹配上的特征点的深度（注意此处我们采用的是单目相机，单目相机在不同位置采集的两张图像，也可以采用类似三角化方法恢复空间点深度），并同时得到特征点的三维空间位置（此坐标成为世界坐标系，它以初始化时的相机光心为坐标系原点，此外还有相机坐标系、像素坐标系的概念，具体坐标系原理见博客[ 双目测距数学原理详解](https://blog.csdn.net/u013832707/article/details/53781810)中说明）。
（4）`第四步`，初始化得到特征点的空间位置之后，会先将一部分符合要求的特征点标记为路标点（`Mappoint`）,再对路标点利用PnP算法（PnP算法原理参考以下视频[1- PnP算法简介与代码解析-柴政](https://v.qq.com/iframe/preview.html?width=500&height=375&auto=0&vid=y0347epdhyu)以及网址[2- 【泡泡机器人公开课】第三十九课：PnP算法简介与代码解析-柴政](http://rosclub.cn/post-566.html)，OpenCV代码参考如博客：[1- PNP algorithm](https://blog.csdn.net/baiyu9821179/article/details/78928776)，[2- solvepnp详解](https://blog.csdn.net/flyyufenfei/article/details/70440067)，）即给定物体3D点集与对应的图像2D点集，之后进行姿态计算，求解出最终的初始化时对应的相机的位姿；其中相机位姿的表示采用四元数表示，（具体参考以下高翔博士的博客：[1- 视觉SLAM中的数学基础 第一篇 3D空间的位置表示](http://www.cnblogs.com/gaoxiang12/p/5113334.html)，[2- 视觉SLAM中的数学基础 第二篇 四元数](http://www.cnblogs.com/gaoxiang12/p/5120175.html)或者高翔博士的《视觉SLAM十四讲》这本书的物体三维空间的表示那一章节）。
（5）`第五步`，初始化得到了一开始的相机位姿后，不断的重复上述的匹配，跟踪，三角化，计算出每一帧图像对应的摄像机位姿，然后再计算出每两帧图像之间相机的运动变换矩阵（包括旋转矩阵与平移矩阵两部分），然后再利用图优化（参考以下博客[1- 深入理解图优化与g2o：图优化篇](http://www.cnblogs.com/gaoxiang12/p/5244828.html)，[2- 深入理解图优化与g2o：g2o篇](http://www.cnblogs.com/gaoxiang12/p/5304272.html)，[3- g2o：一种图优化的C++框架](https://blog.csdn.net/u012700322/article/details/52857244)，[4- graph slam tutorial : g2o 的使用](https://blog.csdn.net/heyijia0327/article/details/47813405)，[5- G2o: A general framework for graph optimization](http://xueshu.baidu.com/s?wd=g2o: A general framework for graph optimization&rsv_bp=0&tn=SE_baiduxueshu_c1gjeupa&rsv_spt=3&ie=utf-8&f=8&rsv_sug2=1&sc_f_para=sc_tasktype={firstSimpleSearch})，或者高翔博士的《视觉SLAM十四讲》这本书）的方法对估算出的结果做优化，得到更加精确和稳健的结果，最终得到相机的运动轨迹。

### **4）总结：**

简单的说，这个系统的核心思想是，通过图像中跟踪匹配到的特征点的变化反推出相机的位置以及运动，并且用优化库对计算结果进行了优化，还增加了一些回环检测的模块加强系统的稳健性。这和人类在野外通过周围的景物确定自己的位置变化的思路很相似，都是先选定参照物，然后根据观察到的参照物的视野变化估计出自己的运动轨迹。

### **5）代码梳理分析相关博客与视频：**

（1）整个系统的代码的梳理，可以参考系列博客：
\- [ORB-SLAM2详解（一）简介](https://blog.csdn.net/u010128736/article/details/53157605)
\- [ORB-SLAM2详解（二）代码逻辑](https://blog.csdn.net/u010128736/article/details/53169832)
\- [ORB-SLAM2详解（三）自动地图初始化](https://blog.csdn.net/u010128736/article/details/53218140)
\- [ORB-SLAM2详解（四）跟踪](https://blog.csdn.net/u010128736/article/details/53339311)
\- [ORB-SLAM2详解（五）局部建图](https://blog.csdn.net/u010128736/article/details/53395936)
\- [ORB-SLAM2详解（六）闭环检测](https://blog.csdn.net/u010128736/article/details/53409199)

（2）注释版代码：（吴博注释版）
[paopaoslam / ORB-SLAM2注释版代码](https://gitee.com/paopaoslam/ORB-SLAM2/)
（3）`ORB-SLAM2`系统以及代码新手入门讲解视频：
\- **冯兵讲解的版本**
[orb-slam的简单讲解-冯兵](http://www.bilibili.com/video/av7102994?share_medium=android&share_source=copy_link&bbid=26A819DC-F16F-4505-804E-E569BE355ECF20735infoc&ts=1524299417524)
\- **吴博讲解的版本**
[（视频1）ORB-SLAM2源码详解-吴博](https://v.qq.com/x/page/y0344q39zew.html)，
[（视频2）ORB-SLAM2源码详解-吴博](https://v.qq.com/x/page/y0344ko90m0.html)；
其中PPT可以另外单独下载，下载地址[38ORB-SLAM2源码详解](https://wenku.baidu.com/view/9749404ddcccda38376baf1ffc4ffe473368fdc9.html)

## 2.`ORB-SLAM`是谁做的，它的项目源码地址是什么？

### **1）作者、论文、`ORB-SLAM`项目源码 ：**

`ORB-SLAM`是由[Raul Mur-Artal](http://webdiis.unizar.es/~raulmur/)，[J. M. M. Montiel](http://webdiis.unizar.es/~josemari/)和[Juan D. Tardos](http://webdiis.unizar.es/~jdtardos/)于2015年发表在`IEEE Transactions on Robotics`。
（1）项目主页网址为：[ORB-SLAM](http://webdiis.unizar.es/~raulmur/orbslam/)；
（2）论文地址为：[ORB-SLAM: A Versatile and Accurate Monocular SLAM System.](http://webdiis.unizar.es/~raulmur/MurMontielTardosTRO15.pdf) ；
（3）`ORB-SLAM`项目源码采用C++编写，运用到了`OpenCV`库，`DBow`库，`g2o`库，`Eigen`库，其中，`ORB-SLAM2`中还会用到`Pangolin`库，地址如下[ORB-SLAM](https://github.com/raulmur/ORB_SLAM)（说明：单目方案，`ROS`下的代码）。

### **2）`ORB-SLAM2`项目介绍以及源码地址：**

（1）`ORB-SLAM2`是`ORB-SLAM`的改进版本，它与`ORB-SLAM`的区别主要在于（参考知乎：[ORB_SLAM与ORB_SLAM2的区别？还经常出现跟踪失败，跟踪失败的原因及解决方法](https://www.zhihu.com/question/49030315)）
\- **（a）** 它提供了立体相机与`RGBD`相机的接口；
\- **（b）** 摆脱了对`ROS`的依赖；
\- **（c）** 显示模块改用了`Pangolin`；
\- **（d）** `ORB-SLAM`中做特征匹配时, 对特征尺度的计算方式貌似有误，在`ORB-SLAM2`的代码中进行了修正。

（2）源码地址如下：[ORB-SLAM2](https://github.com/raulmur/ORB_SLAM2)；

## 3.本系列文章要对这个项目做哪些移植和修改？

**1）`win`下移植：**
因为项目需求，需要在`win`下运行算法，而原版的`ORB-SLAM`以及`ORB-SLAM2`都是在`Linux`系统下乃至在`ROS`框架下运行，所以需要将其移植到win下此处我们直接下载`GitHub`上别人修改好的`win`下的版本。
**2）`ORB`读取格式的修改：**
原版的`ORB-SLAM`项目中`ORB`字典的读取采用的是`txt`文本格式，读取速度非常慢，博主电脑上每次加载字典需要`10`秒左右，此处为了加速，我们采用`Github`上网友的方案，将源码修改一下，改成`二进制格式`读写`ORB`字典，最终能达到字典加载时间缩短到`一两`秒。
**3）摄像头的接入，主函数的修改：**
因为原版ORB-SLAM项目中的例子是基于`ROS`读取数据集中的图片,此处为了实际演示用，我们需要加入摄像头的数据采集部分的代码。
**4）摄像头空间位置的数据的提取以及相应路标点的空间位置的数据的提取：**
因为整个系统最终的要求是要输出`相机位置`以及特定`障碍物的深度距离`，以用于之后的导航以及别的模块的整合，此处我们需要考虑如何提取这些数据。