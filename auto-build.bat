@echo off

REM tsc ���� �� �Ǿ� ���� �� webpack �����ϸ� -w ��忡 ���� �ʰ� �ٷ� ��������
call tsc

start cmd /k "tsc -w"
start cmd /k "npx webpack --mode=development -w"