from flask import render_template, flash, request, redirect, url_for
from website import app, db
from website.data_setup import client
from website.form import infoForm, validate_phone, validate_desc

@app.route('/', methods={'GET', 'POST'})
def main_page():
    myForm = infoForm();

    if request.method == 'POST':
        if myForm.validate_on_submit():
            newClient = client(name=myForm.inName.data, tele=myForm.inTele.data, email=myForm.inEmail.data, descrip=myForm.inDesc.data)
            db.session.add(newClient)
            db.session.commit()

            myForm.inName.data = ''
            myForm.inTele.data = ''
            myForm.inEmail.data = ''
            myForm.inDesc.data = ''
            flash("Thank you, I will contact you shortly")
            return render_template('index.html', form=myForm, scroll='normal')
        else:
            return render_template('index.html', form=myForm, scroll='scrollform')
    else:
        return render_template('index.html', form=myForm, scroll='normal')


@app.route('/myCorner1995')
def manage():
    return render_template('manage.html')

