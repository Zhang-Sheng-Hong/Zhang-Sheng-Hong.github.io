@echo off 
echo ���ڳ�ʼ��Pythonȫջ����������2025��׼�棩...
python -m pip install --upgrade pip wheel
pip install numpy pandas matplotlib seaborn requests scipy scikit-learn jupyterlab 
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121 
pip install fastapi uvicorn sqlalchemy poetry polars plotly loguru transformers 
echo ��װ��ɣ���ʱԼ15-20���ӣ��������������
echo 1. ���� poetry init ������Ŀ���� 
echo 2. ִ�� jupyter lab ������������ 
pause 