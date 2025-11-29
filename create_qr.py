import qrcode

url = " https://nirdeshpatidar.github.io/dynamic-qr-redirect-system/"
qr = qrcode.make(url)
qr.save("instagram_redirect_qr.png")

print("QR Code Created Successfully!")

