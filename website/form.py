from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from wtforms.widgets import TextArea
import phonenumbers

def validate_desc(form, field):
    if len(field.data) < 5:
        raise ValidationError('Please leave longer description')
    if len(field.data) > 200:
        raise ValidationError('The max characters is 200')


def validate_phone(form, field):
    if (field.data).isdigit() == False:
        raise ValidationError('Invalid phone number.')

    if len(field.data) > 16:
        raise ValidationError('Invalid phone number.')
    try:
        input_number = phonenumbers.parse(field.data)
        if not (phonenumbers.is_valid_number(input_number)):
            raise ValidationError('Invalid phone number.')
    except:
        input_number = phonenumbers.parse("+1"+field.data)
        if not (phonenumbers.is_valid_number(input_number)):
            raise ValidationError('Invalid phone number.')

class infoForm(FlaskForm):
    inName = StringField('inName', validators=[DataRequired()], render_kw={"placeholder": "Jon Snow"})
    inTele = StringField('inTele', validators=[DataRequired(), validate_phone], render_kw={"placeholder": "123-456-7890"})
    inEmail = StringField('inEmail', validators=[DataRequired(), Email()], render_kw={"placeholder": "abc@example.com"})
    inDesc = StringField('inDesc', validators=[DataRequired(), validate_desc], widget=TextArea(), render_kw={"placeholder": "Description of your idea and the software you will need"})
