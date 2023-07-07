import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  icons:any[] = [
    {
      technologie: "Angular",
      icon : "angular.ico"
    },
    {
      technologie: "React",
      icon : "react.ico"
    },
    {
      technologie: "Vue",
      icon : "vue.ico"
    },
    {
      technologie: "Django",
      icon : "django.ico"
    },
    {
      technologie: "Express",
      icon : "express.ico"
    },
    {
      technologie: "Laravel",
      icon : "laravel.ico"
    },
    {
      technologie: "Spring",
      icon : "spring-framework.ico"
    },
    {
      technologie: "Nodejs",
      icon : "nodejs.ico"
    },
    {
      technologie: "Javascript",
      icon : "javascript.ico"
    },
    {
      technologie: "C#.NET",
      icon : ".net.ico"
    },
    {
      technologie: "Java",
      icon : "java.ico"
    },
    {
      technologie: "Php",
      icon : "php.ico"
    },
    {
      technologie: "Python",
      icon : "python.ico"
    },
    {
      technologie: "Ruby",
      icon : "ruby.ico"
    },
    {
      technologie: "Swift",
      icon : "swift.ico"
    },
    {
      technologie: "Typescript",
      icon : "typescript.ico"
    },
    {
      technologie: "C++",
      icon : "c++.ico"
    },
    {
      technologie: "C#",
      icon : "cllar.ico"
    },
    {
      technologie: "Go",
      icon : "go.ico"
    },
    {
      technologie: "Kotlin",
      icon : "kotlin.ico"
    },
    {
      technologie: "Objetive-c",
      icon : "objetive-c.ico"
    },
    {
      technologie: "Scala",
      icon : "scala.ico"
    },
    {
      technologie: "SQL",
      icon : "sql.ico"
    },
    {
      technologie: "Sql",
      icon : "sql.ico"
    },
    {
      technologie: "Dart",
      icon : "dart.ico"
    },
    {
      technologie: "Html",
      icon : "html5.ico"
    },
    {
      technologie: "Css",
      icon : "css3.ico"
    },
    {
      technologie: "Sass",
      icon : "sass.ico"
    },
    {
      technologie: "Less",
      icon : "less.ico"
    },
    {
      technologie: "Bash",
      icon : "bash.ico"
    },
    {
      technologie: "Powershell",
      icon : "powershell.ico"
    },
    {
      technologie: "R",
      icon : "r.ico"
    },
    {
      technologie: "Rust",
      icon : "rust.ico"
    },
    {
      technologie: "Swift",
      icon : "swift.ico"
    },
    {
      technologie: "Visual Basic",
      icon : "windows.ico"
    },
    {
      technologie: "Svelte",
      icon : "svelte.ico"
    },


  ];

  constructor() { }

  getIcon(tecnologie:string){
    let icon = this.icons.find(language => language.technologie === tecnologie)
    return icon?.icon;
  }
}
