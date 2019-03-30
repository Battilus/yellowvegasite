from django.shortcuts import render, render_to_response
from catalog.models import ComboAmp
from django.core.paginator import Paginator


def catalog(request, category):
    if category == 'combo-amps':
        combo_amps = ComboAmp.objects.all()
        paginator = Paginator(combo_amps, 2)

        page = request.GET.get('page')
        items = paginator.get_page(page)
        return render(request, 'blocks/_items.html', {'items': items})


def item(request, category, item_id):
    if category == 'combo-amps':
        item = ComboAmp.objects.get(id=item_id)
    return render(request, '_item.html', {'item': item,
                                          'category': category,
                                          'item_id': item_id})


def categories(request):
    return render(request, '_categories.html')


def bread_plug(request, category, item):
    pass
