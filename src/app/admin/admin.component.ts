import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { window } from 'rxjs';
import { MatPaginator } from '@angular/material';

export interface PeriodicElement {
  code: number;
  name: string;
 
  email: any;
  
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
[x: string]: any;
// userList:any[]=userData
displayedColumns: string[] = ['code', 'name', 'email'];
// dataSource =this.userList ;
   
@ViewChild(MatPaginator) paginator !: MatPaginator 
  ngAfterViewInit() {
    // this.userList.paginator =MatPaginator;
  }
  
   data:any
   session:any
 
  constructor(private service:ApiService , private form:FormBuilder ) { }
  Form= this.form.group({
    code : ['',[Validators.required]],
    name : ['',[Validators.required]],
   
    email :  ['',[Validators.required]],
    
  })
  
  ngOnInit(): void {
    
    
  }
  fileName= 'ExcelSheet.xlsx';
searchText:any;
  userList:any[] = [

    {
    
    "code": 1011,
 "name": "rushu",
  "email": "rushu@gmail.com",
    
    
    },
    
    {
    
    "code":1111,
     "name": "akshu",
       "email" : "akshu@gmail.com",
    
    },
    
    {
    
    "code": 1112,
    
    "name": "ravi",
         "email": "ravi@gmail.com",
  
        },
    
    {
    
    "code": 1113,
    
    "name": "jay ",
     
    "email": "jay1234@gmail.com",
    
    },
    
    {
    
    "code":1114,
    
    "name": "gaurav",
    
    "email": "gaurav@gmail.com",

    
    
    }
    
    ]
    importexcel(): void
    {
      
      let element = document.getElementById('excel-table');
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   
      
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
      
      XLSX.writeFile(wb, this.fileName);
       let pass = document.getElementById('hello')
       const window: XLSX.WorkSheet = XLSX.utils.table_to_sheet(pass)
    }
    
 
    edit(item:any){
      this.Form.patchValue(item)
      
    }
    add(){
      this.userList.push({
        code: this.Form.value.code,
        name : this.Form.value.name,
        
        email : this.Form.value.email,
        
      })
      let data={code:'',name:'',email:''};
localStorage.setItem;{ "session";JSON.stringify(data)}
      
    }
    submit(){
      alert('you have succesfully submit your form')
      this.Form.reset()
    }    
    
    student =[
      {
        name:'Rushi',
        collage:'HVPM Clg ',
        city:'Wardha'
      },
      {
        name:'Ravi',
        collage:'Model Clg',
        city:'pune'
      },
      {
        name:'Akahay',
        collage:'Sipna Clg',
        city:'Nagpur'
      },
      {
        name:'Aashu',
        collage:'Yashwant Clg',
        city:'Arvi'
      }
    ]
    search(event:Event){
    const filevalue=(event.target as HTMLInputElement).value;
   this.data.filter= filevalue
    }
    // findarray(){
    //   let student =this.student.find((item)=>{
    //     item.name =='seema'
    //   })
    //     console.log(student)

    // }
    

//    search(){
// var input,filter,table,tr,td,i,textValue;
// input=document.getElementById("myInput");
// filter=input?.ariaValueMax?.toUpperCase();


//   }
      
    
}
