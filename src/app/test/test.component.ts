import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Test } from './test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient) {}

  text : string[] = [];
  textURL = 'http://localhost:8080/GetRecipies';

  getText() {
    return this.http.get<string[]>(this.textURL)//,  {responseType: 'text'})
    .subscribe(text => (this.text = text));
  }



  ngOnInit(): void {
    this.getText();
    console.log(this.text[1]);
  }
}
