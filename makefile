acp:
	git add .
	git commit -m "$m"
	git push -u origin master

repo:
	echo "# $a" >> README.md
	git init
	git add README.md
	git commit -m "$b"
	git remote add origin https://github.com/CaimeoAI/$a.git
	git push -u origin master

livepull:
	cd /home/jude/Workspace-DCI/MySolutions/pb/PB-LiveCoding
	git pull