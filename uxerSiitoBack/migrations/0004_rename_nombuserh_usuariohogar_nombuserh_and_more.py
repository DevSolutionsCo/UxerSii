# Generated by Django 5.0 on 2024-04-02 06:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uxerSiitoBack', '0003_delete_establedona_delete_hogardona_delete_orgdona_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuariohogar',
            old_name='nombuserh',
            new_name='nombUserH',
        ),
        migrations.AddField(
            model_name='usuariohogar',
            name='numDonaciones',
            field=models.IntegerField(blank=True, db_column='numDonaciones', null=True),
        ),
    ]
