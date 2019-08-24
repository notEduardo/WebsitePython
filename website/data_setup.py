from website import db

class client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    tele = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    descrip = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return "Client #{self.id}: {self.name} | {self.tele} | {self.email} - {self.desc}"

