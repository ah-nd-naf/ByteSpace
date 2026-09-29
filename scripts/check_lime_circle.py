import pymupdf as fitz

doc = fitz.open("design/prototype.pdf")
p1 = doc[0]

for draw in p1.get_drawings():
    r = draw["rect"]
    if draw["fill"] and abs(draw["fill"][0] - 0.796) < 0.05 and abs(draw["fill"][1] - 0.988) < 0.05 and abs(draw["fill"][2] - 0.003) < 0.05:
        # #CBFC01 is (203/255, 252/255, 1/255) = (0.796, 0.988, 0.004)
        print("Lime circle fill rect:", r)
    elif draw["color"] and abs(draw["color"][0] - 0.796) < 0.05 and abs(draw["color"][1] - 0.988) < 0.05 and abs(draw["color"][2] - 0.003) < 0.05:
        print("Lime circle stroke rect:", r)
