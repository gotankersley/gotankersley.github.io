import sys
import os
from time import strftime, gmtime

POST_PATH = '/got/_posts/'

title = raw_input('Enter title: ')
tags = raw_input('Enter tags: ')
postName = strftime('%Y-%m-%d-') + title
postDate = strftime('%Y-%m-%d %H:%M:%S -0600', gmtime())
dir = os.path.dirname(os.path.realpath(__file__))

frontMatter = \
"""---
layout: post
title: %s
date:  %s
tags:  %s
---"""
frontMatter = frontMatter % (title, postDate, tags)

try:
	file = open(dir + '/' + postName, 'w')   
	file.write(frontMatter);
	file.close()
	print ('Successfully created ' + postName)

except:
	print ('Error creating ' + postName)
	sys.exit(0) 

