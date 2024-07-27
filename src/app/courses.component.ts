import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    standalone: true,
    selector: 'courses',
    imports: [NgFor],
    template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    getTitle() {
        return this.title;
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}