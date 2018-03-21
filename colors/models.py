# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

################################################

################################################

class Products(models.Model):
	name = models.CharField()
	description = models.TextField()
	price = models.PositiveIntegerField(default = 0)
	product_info = models.TextField()
	qty = models.PositiveIntegerField