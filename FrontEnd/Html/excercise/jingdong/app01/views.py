from django.shortcuts import render

# Create your views here.


def jerry(req):
    # print(req.GET)
    # <QueryDict: {'username': ['loriyuhv'], 'password': ['123456'], 'sex': ['0'], 'hobby': ['basketball', 'football']}>

    print(req.POST)
    # 注意，要注释：MIDDLEWARE 里的'django.middleware.csrf.CsrfViewMiddleware'
    # < QueryDict: {'username': ['loriyuhv'], 'password': ['12345'], 'sex': ['0'], 'hobby': ['basketball']} >

    print("file：", req.FILES)
    # 写入硬盘
    for item in req.FILES:
        obj = req.FILES.get(item)
        file_name = obj.name
        with open(file_name, "wb") as f:
            for line in obj.chunks():
                f.write(line)
    return render(req, "index.html")

