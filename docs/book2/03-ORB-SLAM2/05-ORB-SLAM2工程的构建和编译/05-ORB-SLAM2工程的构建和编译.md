**1. 在整个项目的，根目录下 新建一个build目录。**
![这里写图片描述](https://img-blog.csdn.net/20180424221251105?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L29faGFfeW9feWVwZW5n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

**2. 打开 CMake软件，和上述生成库的步骤相同，选择好源目录和生成目录（生成目录中的build文件夹需要自己创建），注意要根据自己的工程目录选择。**

![这里写图片描述](https://img-blog.csdn.net/20180424221411368?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L29faGFfeW9feWVwZW5n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

**3.点击 Config按钮会报错，主要还是Opencv库没有找好的原因。按图中步骤修改Opencv的库目录，然后点击Config 和 Generate按钮。**
![这里写图片描述](https://img-blog.csdn.net/20180424221550422?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L29faGFfeW9feWVwZW5n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
![这里写图片描述](https://img-blog.csdn.net/20180424221607778?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L29faGFfeW9feWVwZW5n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

**4.打开项目，先修改项目模式为64|Release 模式。直接生成会有一些报错**

![这里写图片描述](https://img-blog.csdn.net/20180424221637589?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L29faGFfeW9feWVwZW5n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

因为还有一些库依赖没有配置好，此处我们再补充一些配置，右击ORB-SLAM2，选择属性，然后按下图增加库包含目录：
![这里写图片描述](https://img-blog.csdn.net/20180424221712428?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L29faGFfeW9feWVwZW5n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
按下图所示的分类，补充自己缺少的头文件包含，目录需要根据自己的项目目录而定：
![这里写图片描述](https://img-blog.csdn.net/20180424221753595?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L29faGFfeW9feWVwZW5n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

**5.右击ALL|BUILD ，选择生成，编译成功后打开 My_Monocular 项目中的My_Monocular.cc程序，按住Crl + F5 键编译生成，出现以下界面，说明生成成功。**
![这里写图片描述](https://img-blog.csdn.net/2018042422183042?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L29faGFfeW9feWVwZW5n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
**6.项目中各个部分的代码的含义说明：**

**1）**`bin_vocabulary`目录下程序，主要功能是将`\My_ORB-SLAM24Windows\Vocabulary`下的二进制词典文件 ORBvoc.txt文件转码成二进制格式文件`ORBvoc.bin`。这个工程我已经实现编译执行过了，无需再理会。

**2）**`My_Monocular` 目录是一个测试用例，用以测试算法的功能和输出。
**3）**`ORB_SLAM2` 目录下存放着算法的实现代码，一共是19个cpp文件，其中
（1）`Converter.cc`：实现 矩阵库`eigen`中的矩阵格式 和`OpenCV`中的矩阵的格式转换；
（2）`Frame.cc`： 存放了抽象的 每一帧图像的数据结构以及对每一帧的操作；
（3）`FrameDrawer.cc`：实现每一帧上的关键点以及图像上信息的绘制；
（4）`Initializer.cc`： 系统算法初始化相关的算法程序存放处；
（5）`KeyFrame.cc`：存放了 关键帧相关的数据结构 以及操作函数；
（6）`KeyFrameDatabase.cc`：存放了关键帧的数据库的相关属性 以及对这个数据库的相关操作；
（7）`LocalMapping.cc`：子线程1，建图线程，主要是将检测到的特征点投射到三维空间中，变成路标点，由这些路标点组成的空间的障碍物的位置和分布的过程 叫做建图；
（8）`LoopClosing.cc`：子线程2，回环检测线程，主要用于在摄像机回到原来走过的位置的时候，优化之前的位姿和轨迹估计；
（9）`Map.cc`： 存放 和地图相关的数据结构以及操作；
（10）`MapDrawer.cc`： 地图的绘制函数；
（11）`MapPoint.cc`：存放 地标点相关的数据结构以及操作；
（12）`Optimizer.cc`： 对计算到的位姿进行优化的相关函数存放处；
（13） `ORBextractor.cc`：图像中特征点的提取；
（14）`ORBmatcher.cc`：图像中特征点的匹配；
（15）`PnPsolver.cc`： `PnP`算法的实现文件，用以存放`PnP`算法，`PnP`算法是求解相机的空间位姿的时候需要用到的一个算法；
（16）`Sim3Solver.cc`：`Sim3`算法的实现文件，`Sim3`算法主要是实现回环检测的时候 相似变换矩阵的计算；
（17）`System.cc`： 主线程，算法的入口，主要是读入 摄像头参数数据 和 ORB字典的数据，并且初始化四个子线程，算法开始运行；
（18）`Tracking.cc`：子线程3，摄像机的运动轨迹的更新与跟踪；
（19）`Viewer.cc`：子线程4，用`Pangolin`库显示摄像机三维空间位置以及交互用。