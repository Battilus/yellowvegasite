from django.db import models


class ComboAmp(models.Model):
    AMPS_LIST = (('Лампа', 'Лампа'), ('Транзистор', 'Транзистор'), ('Смешанное', 'Смешанное'))

    title = models.CharField("Название", max_length=50, )
    description = models.TextField("Описание")
    size = models.CharField("Размер", max_length=50)
    speaker_size = models.CharField("Размер динамика", max_length=50, default="", null=True)
    type = models.CharField("Тип", max_length=50)
    amps = models.CharField("Усиление", max_length=50, choices=AMPS_LIST)
    video = models.CharField("Ссылка на видео", max_length=200)
    img1 = models.ImageField(upload_to='combo_amps/')
    img2 = models.ImageField(upload_to='combo_amps/')
    img3 = models.ImageField(upload_to='combo_amps/')
    img4 = models.ImageField(upload_to='combo_amps/')

    class Meta:
        db_table = "Комбо усилители"

# Create your models here.
