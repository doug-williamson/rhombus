import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ExperienceService, IExperience, IJob, IJobTag } from './experience.service';

@Component({
  selector: 'rh-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class RhExperienceComponent implements OnInit {

  experience: IExperience;
  jobs: IJob[];
  jobTags: IJobTag[];

  constructor(public media: MediaObserver, private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experienceService.getExperience$().subscribe(res => {
      this.experience = res;
    });

    this.experienceService.getJobs$().subscribe(res => {
      this.jobs = res;
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
