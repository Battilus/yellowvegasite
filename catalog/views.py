from django.shortcuts import render, render_to_response


def catalog(request, category):
    if category == 'combo-amps':
        return render_to_response('_combo_amps.html')
