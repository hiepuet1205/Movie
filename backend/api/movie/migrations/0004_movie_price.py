# Generated by Django 4.0 on 2022-04-08 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0003_alter_movie_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='price',
            field=models.FloatField(default=100),
        ),
    ]
