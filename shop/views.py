from django.shortcuts import render, render_to_response


def main_page(request):
    return render_to_response('_main.html')


def constructor(request):
    return render_to_response('_constructor.html')


def about(request):
    return render_to_response('_about.html')


def delivery(request):
    return render_to_response('_delivery.html')


def payment(request):
    return render_to_response('_payment.html')
