from django.db import migrations
from api.user.models import CustomUser

class Migration (migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name="hiepuetnbk", email= "hiepvbhpnbk@gmail.com", is_staff=True,
                            is_superuser=True)
        
        user.set_password("hiepuetnbk")
        user.save()

    dependencies = []

    operations = [ 
        migrations.RunPython(seed_data),
    ]