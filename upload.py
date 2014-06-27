#!/usr/bin/env python
import os

os.system("git add --all && git commit -m 'update' && git push origin master")
os.system("ssh mellopip@mellopipelines.com")
