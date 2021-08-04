################################################################################## 
# 
# How would you print just the 10th line of a file?
# 
# For example, assume that file.txt has the following content:
# 
# Line 1
# Line 2
# Line 3
# Line 4
# Line 5
# Line 6
# Line 7
# Line 8
# Line 9
# Line 10
# 
# Your script should output the tenth line, which is:
# 
# Line 10
# 
# [show hint]
# Hint:
# 1. If the file contains less than 10 lines, what should you output?
# 2. There's at least three different solutions. Try to explore all possibilities.

#awk 每次处理一行，处理的最小单位是字段，每个字段的命名方式为：$n，n 为字段号，从 1 开始，$0 表示一整行。

##################################################################################
# awk '条件类型 1 {动作 1} 条件类型 2 {动作 2} ...' filename
#!/bin/sh


# Read from the file file.txt and output the tenth line to stdout.

#solution1 - watch the space!!!
cnt=0
while read line && [ $cnt -le 10 ]; do
  let 'cnt = cnt + 1'
  if [ $cnt -eq 10 ]; then
    echo $line
    exit 0
  fi
done < file.txt

#solution 2 
awk 'FNR == 10 {print }' file.txt
#OR 
awk 'NR == 10' file.txt
#OR 
awk 'NR == 10 {print $0}' file.txt 

#solution 3
sed -n '10p' file.txt

#solution 4  
tail -n+10 file.txt|head -1
