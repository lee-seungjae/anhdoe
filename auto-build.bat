@echo off

REM tsc ���� �� �Ǿ� ���� �� webpack �����ϸ� -w ��忡 ���� �ʰ� �ٷ� ��������
call tsc

start /b tsc -w
npx webpack --mode=development -w