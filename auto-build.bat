@echo off

REM tsc ���� �� �Ǿ� ���� �� webpack �����ϸ� -w ��忡 ���� �ʰ� �ٷ� ��������
call tsc

start cmd /k "title typescript && tsc -w"
start cmd /k "title webpack && npx webpack --mode=development -w"