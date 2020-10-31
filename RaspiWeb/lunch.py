# -*- coding: utf-8 -*-
# @Time    : 2020/10/30 19:11
# @Author  :The Monster Master
# @Site    : 
# @File    : lunch.py
# @Software: PyCharm


from flask import Flask ,render_template,send_file ,url_for, redirect, request

app =   Flask( __name__, template_folder = r"C:\Users\93565\Desktop\Flask_web\RaspiWeb",
              static_folder = r"C:\Users\93565\Desktop\Flask_web\RaspiWeb\assets",
              static_url_path='' )

#app.config['SERVER_NAME'] = "team.com:5000" #域名


#返回路由 方法一 基本上是第一种方式
@app.route('/')
def main( ):
    return  render_template("templates/index.html")

@app.route("/ReadTxt")
def ReadTxt( ):
    #reda file
    from flask import Flask, render_template, request

    app = Flask(__name__)

'''
// 虫害信息
    @app.route("/pvuv")
    def pvuv():
        # read file
        data = []
        with open("./data/pvuv.txt") as fin:
            is_first_line = True
            for line in fin:
                if is_first_line:
                    is_first_line = False
                    continue
                line = line[:-1]  # \n
                pdate, pv, uv = line.split("\t")
                data.append((pdate, pv, uv))
        return render_template("file.html", data=data)

'''
if __name__ == "__main__":
    app.run ( )