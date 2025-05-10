@echo off 
echo 正在初始化Python全栈开发环境（2025标准版）...
python -m pip install --upgrade pip wheel
pip install numpy pandas matplotlib seaborn requests scipy scikit-learn jupyterlab 
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121 
pip install fastapi uvicorn sqlalchemy poetry polars plotly loguru transformers 
echo 安装完成！耗时约15-20分钟，建议后续操作：
echo 1. 运行 poetry init 创建项目管理 
echo 2. 执行 jupyter lab 启动开发环境 
pause 