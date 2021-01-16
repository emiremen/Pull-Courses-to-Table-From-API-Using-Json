import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Courses } from './courses';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient) {
    
  }
  courses: Courses[] = [];

  ngOnInit(): void {
    this.http.get<any>("https://api.zaguru.com/api/Classes/getClasses").subscribe(data => {
      this.courses = data;
      for( let course of this.courses ){
        course.participants = 0;
        course.courseNotes = "";
        course.active = true;
      }
    })
    
    
    

  }

  tableTitle = "Courses Table";

  popoverVisible: boolean = false;
  isVisible: boolean = false;
  modalTitle: string = ""
  modalBusinessId: string = ""

  courseIndex!: number;
  courseNotes!: string;
  courseParticipants!: number;
  courseStatus!: boolean;
  
  showModal(index:number, title: string, businessId: string) {
    this.courseIndex = index - 1 ;
    this.modalTitle = title;
    this.modalBusinessId = businessId;
    this.isVisible = true;
    this.courseParticipants = this.courses[this.courseIndex].participants;
    this.courseStatus = this.courses[this.courseIndex].active;
  }

  handleOk() {
    
    this.courses[this.courseIndex].courseNotes = this.courseNotes;
    this.courses[this.courseIndex].participants = this.courseParticipants;
    this.courses[this.courseIndex].active = this.courseStatus;
    this.isVisible = false;
  }
  handleCancel() {
    this.isVisible = false;
  }

  deleteTableRow(index: number) {
    this.courses.splice(index - 1, 1);
  }

  popoverVisibileOver(){
    this.popoverVisible = true;
  }

  courseActivity(){
    //this.courseStatus ? this.courseStatus = false : this.courseStatus = true;
  }
}
