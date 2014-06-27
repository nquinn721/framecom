#!/usr/bin/env python
import os

os.system("git add . && git commit -m 'update' && git push origin master")
os.system("ssh mellopip@mellopipelines.com")
os.system("cd public_html/garretscott/framecom")
os.system("git pull")
