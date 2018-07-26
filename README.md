# wndrtrvl
#### Is it wander or wonder!?

## Start frontend

The first time:
```
cd frontend
npm install
pray that npm packages have not introduced breaking changes (but they will have)
```

Then:
`npm run start:dev`

Visit frontend server at localhost:8080

## Start backend

Make sure you have python3.4-6 installed. Also make sure you're using pip > 9.

The first time:
```
cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
env/bin/python manage.py migrate
```

Then:

```
env/bin/python manage.py runserver
```

Visit api server at localhost:8000
