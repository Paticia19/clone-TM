from django.db import models

# Create your models here.
# from djongo import models

class Manuscript(models.Model):
    title = models.CharField(max_length=255)
    authors = models.ArrayField(
        model_container=models.CharField(max_length=100)
    )  # Store authors as an array of strings
    year = models.IntegerField()
    abstract = models.TextField() 
    file = models.FileField(upload_to='manuscripts/')  # Store the uploaded file
    # Add other fields as needed (e.g., keywords, etc.)

    def __str__(self):
        return self.title