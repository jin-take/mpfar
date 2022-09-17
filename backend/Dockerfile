FROM python:3.9.7-slim-buster

WORKDIR /usr/src/app/backend

ENV FLASK_APP=api

COPY /requirements.txt ./

RUN pip install --upgrade pip
RUN pip install requests
RUN pip install -r requirements.txt