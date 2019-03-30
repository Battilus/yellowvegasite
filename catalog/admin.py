from django.contrib import admin
from catalog.models import ComboAmp


@admin.register(ComboAmp)
class CatalogAdmin(admin.ModelAdmin):
    pass
