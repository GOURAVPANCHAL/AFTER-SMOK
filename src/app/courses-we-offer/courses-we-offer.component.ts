import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
    selector: 'app-courses-we-offer',
    templateUrl: './courses-we-offer.component.html',
    styleUrls: ['./courses-we-offer.component.css']
})
export class CoursesWeOfferComponent implements OnInit {

    imgpath: 'assets/images/';
    data = [
        {
            heading: 'Investment and Finance',
            icon: `assets/images/medical.svg`,
            content: `It’s time to au revoir your hesitation for investing because with Techzy's concise course on Indian capital
      markets and finance, we will teach you about investment and finance through and through. Our course
      encapsulates all the fundamentals related to the subject, to lend you a strong foundation. The doubt
      clearing sessions held by our experts offer you a pragmatic sense of knowledge on the field.`
        },
        {
            heading: 'Networking',
            icon: 'assets/images/Circulatory system-pana.svg',
            content: `Unsure of how to optimize your graduation years? Enroll on TechZy for the most affordable courses on
      Networking and give your career and edge to excel. Our each course comprises 170+ hours recorded
      video lectures for a detailed learning experience. Our flexibility is what we take our credit in. Our
      courses are designed to let you learn at your own pace and have your doubts cleared at any time by our
      experts. There is absolute compatibility between your regular course and TechZy`
        },
        {
            heading: 'Digital Marketing',
            icon: 'assets/images/medical-1.svg',
            content: `Seeking ways to upgrade your resume? Here we are serving your wish on plate. Avail our
      economical courses on TechZy to rocket your skills and command on Digital Marketing. Our
      skillfully crafted courses by our competent experts are made sure to suffice your academic and
      professional needs vis-à-vis the subject of digital marketing. Your search and find of a job in the
      sector will be rendered easy peasy after certification.`
        }
    ]
    constructor() { }

    ngOnInit(): void {
        AOS.init();

    }

    ellipsis(content: string) {
        if (content.length > 200) {
            return content.substring(0, 200) + "...";
        } else {
            return content
        }
    }

}

