from matplotlib import pyplot

def plotar (fun): 
    y = [fun(x) for x in range(11)]

    pyplot.plot(range(11), y)
    pyplot.show()