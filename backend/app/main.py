from fastapi import FastAPI
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
 

app = FastAPI()
 
# Mount the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Example route
@app.get("/")
def read_root():
    return {"message": "Hi, you have reached us but unfortunately there is nothing here for you"}
